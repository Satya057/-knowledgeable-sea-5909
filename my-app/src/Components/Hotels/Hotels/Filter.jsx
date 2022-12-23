import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import styles from "./Filter.module.css";

const Filter = ({ handleFilter, onChangeBedroom, onChangeBathroom }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Button
        className={styles.filter_button}
        bgColor="white"
        border="1px solid"
        fontSize={["8px", "12px", "16px"]}
        p={["0", "2px", "10px"]}
        borderRadius="0"
        as={Button}
        rightIcon={<ChevronDownIcon />}
        onClick={onOpen}
      >
        Apply Filter
      </Button>

      <Modal width={"60%"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Filter</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <Box display={"flex"} justifyContent="space-around">
            <Box>
              <Text>Bedrooms</Text>
              <Input
                type="text"
                placeholder="Type here.."
                onChange={onChangeBedroom}
              ></Input>
            </Box>

            <Box>
              <Text>Bathrooms</Text>
              <Input
                type="text"
                placeholder="Type here.."
                onChange={onChangeBathroom}
              ></Input>
            </Box>
          </Box>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              onClick={() => {
                handleFilter();
                onClose();
              }}
              variant="ghost"
            >
              Apply
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Filter;

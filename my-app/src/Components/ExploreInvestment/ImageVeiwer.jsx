import { useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";

function ImageVeiwer({ images, count }) {
  // descturing props send from ExploreDisplay
  const [imgCount, setImgCount] = useState(count);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const slideLeft = () => {
    if (imgCount < 0) {
      // previous image
      // check if index is first index it will make it last
      setImgCount(images.length - 1);
    } else {
      setImgCount(imgCount - 1); // decrement imgCount so that we can see previous image wit help of index
    }
  };
  const slideRight = () => {
    // next image
    if (imgCount >= images.length - 1) {
      // if index of image is last index it will make index first index
      setImgCount(0);
    } else {
      setImgCount(imgCount + 1); // increment imgCount so that we can see next image wit help of index
    }
  };

  const manageNavigation = (e) => {
    // check keys if left navigate left if right navogate image right
    if (e.key === "ArrowLeft") {
      slideLeft();
    }
    if (e.key === "ArrowRight") {
      slideRight();
    }
  };

  return (
    <>
      {count === 7 ? (
        <Box
          backgroundSize="cover"
          onClick={() => {
            setImgCount(count);
            onOpen();
          }} // opens a modal where we can see Targeted Image as preview
          display="flex"
          justifyContent="center"
          color="white"
          alignItems="center"
          brightness="10%"
          height="200px"
          backgroundImage={`linear-gradient(-180deg,transparent 10%,rgba(0,0,0,.9)),url('${images[count]}')`}
        >
          {images.length - 7}+ More{" "}
          {/*checks if count is equal to 7 it will give text on image with remaining in images arr*/}
        </Box>
      ) : (
        <Box
          backgroundSize="cover"
          onClick={() => {
            setImgCount(count);
            onOpen();
          }} // opens a modal where we can see Targeted Image as preview
          height="200px"
          backgroundImage={`url('${images[count]}')`}
        ></Box>
      )}
      <Modal // Modal were will be able to see image preview
        backdropFilter="blur(10px)"
        size="full"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent
          onKeyUp={manageNavigation}
          bg=""
          backdropFilter="blur(10px)"
        >
          <ModalHeader color="white" textAlign="center">
            Preview
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody>
            <Box w="100%">
              {/*images is arr and imgCount is state with current Image index number which will change to see next and previous image */}
              <Image m="auto" maxH="80vh" src={images[imgCount]} />
            </Box>
          </ModalBody>

          <ModalFooter gap="100px" justifyContent="center" display="flex">
            <Button // left button to navigate previous image
              variant="outline"
              onClick={slideLeft}
            >
              <AiOutlineLeft size={20} color="white" />
            </Button>
            <Button // left button to navigate next image
              variant="outline"
              onClick={slideRight}
            >
              <AiOutlineRight size={20} color="white" />
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ImageVeiwer;

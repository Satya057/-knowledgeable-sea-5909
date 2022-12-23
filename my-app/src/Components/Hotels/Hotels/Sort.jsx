import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import styles from "./Sort.module.css"

const Sort = ({handleSort}) => {
  return (
    <div>
      <Menu>
        <MenuButton className={styles.sort_menu_button}
          bgColor="white"
          border="1px solid"
          fontSize={["8px", "12px", "16px"]}
          p={["0", "2px", "10px"]}
          borderRadius="0"
          as={Button}
          rightIcon={<ChevronDownIcon />}
        >
          Sort By
        </MenuButton>
        <MenuList>
          <MenuItem
            bgColor="white"
            border="1px solid"
            fontSize={["8px", "12px", "16px"]}
            p={["0", "2px", "10px"]}
            borderRadius="0"
            onClick={() => {
              //If click button execute handleSort function with passing props in main Hotels page  
              handleSort("HL")
            }}
          >
            Price High To Low
          </MenuItem>
          <MenuItem
            bgColor="white"
            border="1px solid"
            fontSize={["8px", "12px", "16px"]}
            p={["0", "2px", "10px"]}
            borderRadius="0"
            onClick={() => {
            //   If click button execute handleSort function with passing props in main Hotels page   
              handleSort("LH")            
            }}
          >
            Price Low To High
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Sort;

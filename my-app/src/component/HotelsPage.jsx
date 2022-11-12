import { Box, Button, Heading, HStack, Img, Input, Text, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import {ChevronDownIcon} from "@chakra-ui/icons"

const HotelsPage=()=>{
    const [hotelsData,setHotelsData] = useState([]);
    const [bedRoom,setBedRoom] = useState(0)
    const [bathroom,setBathroom] = useState(0)
    const { isOpen, onOpen, onClose } = useDisclosure()

useEffect(()=>{
getData("")
},[])

    const getData=async (prop)=>{
     const res=await axios.get("http://localhost:8080/results");
     const data=res.data
     
     let updatedData=[]
     if(prop=="HL"){
        updatedData=data.sort((a,b)=>{
        return b.starting_price_in_usd-a.starting_price_in_usd
    })
    setHotelsData(updatedData)
  
    }else if(prop=="LH"){
        updatedData=data.sort((a,b)=>{
            return a.starting_price_in_usd-b.starting_price_in_usd
        })
       setHotelsData(updatedData)
    }else if(bathroom!=0 && bedRoom==0){
        updatedData=data.filter((el)=>{
            return el.number_of_bathrooms == bathroom
        })
        console.log(updatedData)
        setHotelsData(updatedData)

    }else if(bathroom==0 && bedRoom!=0){
        updatedData=data.filter((el)=>{
            return el.number_of_rooms == bedRoom
        })
        console.log(updatedData)
        setHotelsData(updatedData)
    }else if(bathroom!==0 && bedRoom!==0 ){
        updatedData=data.filter((el)=>{
            return el.number_of_rooms == bedRoom && el.number_of_bathrooms == bathroom
        })
        console.log(updatedData)
        setHotelsData(updatedData) 
    }else{
        setHotelsData(data)
    }

    // const handleFilter=()=>{
    //      updatedData=data.filter((el)=>{
    //         return el.number_of_bathrooms !== bathroom
    //     })
    //     console.log(updatedData)
    //     setHotelsData(updatedData)
    // }
    // console.log(updatedData)
    }

   

    // const handleSort=(prop)=>{
    //     let updatedData=[]
    //     if(prop=="HL"){
    //         updatedData=hotelsData.sort((a,b)=>{
    //         return a.starting_price_in_usd-b.starting_price_in_usd
    //     })
      
    //     }else{
    //         updatedData=hotelsData.sort((a,b)=>{
    //             return a.starting_price_in_usd-b.starting_price_in_usd
    //         })
           
    //     }
    //     console.log(updatedData)
    //     setHotelsData(updatedData)
    // }

    console.log(hotelsData);
    console.log(bedRoom);
    console.log(bathroom);
   return (
   <Box w={["100vw","90vw"]}  margin="auto" marginTop={"40px"}>

    <Box display={"flex"} justifyContent="space-between">

    <Button bgColor="white" border="1px solid" fontSize={["8px","12px","16px"]} p={["0","2px","10px"]} borderRadius="0" as={Button} rightIcon={<ChevronDownIcon />} onClick={onOpen}>Apply Filter</Button>
     
     
      <Modal width={"60%"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Filter</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          </ModalBody>
            <Box display={"flex"} justifyContent="space-around">
             <Box>
                <Text>Bedrooms</Text>
                <Input type="text" placeholder="Type here.." onChange={(e)=>{setBedRoom(Number(e.target.value))}}></Input>


             </Box>

             <Box>
                <Text>Bathrooms</Text>
                <Input type="text" placeholder="Type here.." onChange={(e)=>{setBathroom(Number(e.target.value))}}></Input>

             </Box>

           
            </Box>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button  onClick={()=>{ getData();onClose()}} variant='ghost'>Apply</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>



<Menu>
  <MenuButton bgColor="white" border="1px solid" fontSize={["8px","12px","16px"]} p={["0","2px","10px"]} borderRadius="0" as={Button} rightIcon={<ChevronDownIcon />}>
    Sort By
  </MenuButton>
  <MenuList>
    <MenuItem bgColor="white" border="1px solid" fontSize={["8px","12px","16px"]} p={["0","2px","10px"]} borderRadius="0" onClick={()=>{getData("HL")}}>Price High To Low</MenuItem>
    <MenuItem bgColor="white" border="1px solid" fontSize={["8px","12px","16px"]} p={["0","2px","10px"]} borderRadius="0" onClick={()=>{getData("LH")}}>Price Low To High</MenuItem>
  </MenuList>
</Menu>



    </Box>

    <HStack marginTop="10px" border="1px solid grey"></HStack>

   
        {hotelsData.map((el)=>{
            if(el.state_slug=="goa-11"){
                return  <Box  w={"100%"} display="flex" marginTop="40px" marginBottom={'15px'} shadow="md">
                <Box  w={["50%","40%","35%","30%"]}>
                 <Img src={el.images_large[0]} ></Img>
                 </Box>

                 <Box w={"60%"} p={["5px","7px","10px"]}>
                   <Heading fontSize={["7px","12px","18px","20px","22px"]}>{el.title}</Heading>
                   <Text marginTop={["1px", "2px" ,"3px","5px"]} color={"blue.400"} fontSize={["7px","10px","14px","18px","20px"]} >{el.city}, {el.state_slug=="goa-11"?"Goa":"Goa"},{el.country}</Text>
                 
                 <Box marginTop={["2px","4px","6px","8px","10px"]} display={"flex"} gap="10px" flexWrap={"wrap"} >{el.prop_tags.map((el)=>{
                    return <Box fontSize={["5px","6px","8px","10px","12px"]} border={"1px solid grey"} borderRadius={"10%"} p={["1px","2px","4px","5px"]} >{el}</Box>
                 })}</Box>
                 
                 <Box display={"flex"} gap="2px">
                 <Text fontWeight="bold" marginTop={["8px", "15px" ,"20px","30px"]}  fontSize={["7px","10px","14px","16px","18px"]} >Rs {el.starting_price_in_usd}.00  </Text>
                 
                 <Text marginTop={["8px", "15px" ,"20px","30px"]} fontSize={["3px","4px","6px","8px","10px"]} color="grey" >Per Night </Text>

                 </Box>

                 </Box>

                 </Box>
            }
           
        })}
    
   </Box>
   )    
}

export default HotelsPage
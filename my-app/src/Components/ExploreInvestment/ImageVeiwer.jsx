import { Box, Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
function ImageVeiwer({images,count}) {
    const [imgCount , setImgCount] = useState(count)
    const { isOpen, onOpen, onClose } = useDisclosure()
         
        return (
          <>
            
            {(count===7)? <Box backgroundSize='cover' onClick={onOpen} display='flex' justifyContent='center' color='white' alignItems='center' brightness='10%' height="200px" backgroundImage={`linear-gradient(-180deg,transparent 10%,rgba(0,0,0,.9)),url('${images[count]}')`}>
           {images.length-7}+ More
           </Box>:
          <Box backgroundSize='cover' onClick={onOpen} height="200px" backgroundImage={`url('${images[count]}')`}></Box>
           }
            <Modal backdropFilter="blur(10px)" size='full' isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent bg="" backdropFilter="blur(10px)" >
                <ModalHeader color='white' textAlign='center'  >Preview</ModalHeader>
                <ModalCloseButton color='white' />
                <ModalBody >
                    <Box w="100%" >
            
                  <Image m='auto' maxH='80vh' src={images[imgCount]}/>
                    </Box>
                </ModalBody>
      
                <ModalFooter gap='100px' justifyContent='center' display='flex' >
                  <Button variant='outline'  onClick={()=>{
                    if(imgCount<0){
                        setImgCount(images.length-1)
                    }else{

                        setImgCount(imgCount-1)
                    }
                  }}>
                    <AiOutlineLeft size={20} color='white'/>
                  </Button>
                <Button variant='outline' onClick={()=>{
                    if(imgCount>=images.length-1){
                        setImgCount(0)
                    }else{

                        setImgCount(imgCount+1)
                    }
                    
                  }} >
                    <AiOutlineRight size={20} color='white'/>
                  </Button>
                  
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
  
}

export default ImageVeiwer
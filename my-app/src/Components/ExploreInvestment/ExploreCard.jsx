import { Box, Button, Divider, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Explorecontext } from '../../context/ExploreContext/ExploreContextProvider'

function ExploreCard({images,AboutProject,title,ProjectBy,location,startingPrice,homes,targetYeild,targetIrr,id}) {
  const {unlock,toggleUnlock} = useContext(Explorecontext)
  const navigate = useNavigate()
  const navigateToFormPage = ()=>{
        navigate('/tounlock')
  }
  const navigateToDisplayPage = ()=>{
        navigate(`/explore-investment/${id}`)
  }
  return (
    <Flex  boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px;' backgroundRepeat='no-repeat' justifyContent="flex-end" w="80%" m="auto" mb="50px" minH="350px" backgroundSize="cover" backgroundImage={`url('${images[0]}')`}>
        <Box display='flex' flexDir='column' minH='350px' w={{lg:"70%",md:"70%",sm:"100%",base:"100%"}} bgColor='white'>
              <Flex alignItems='center' gap="20px" flexDir={{lg:'row',md:"row",sm:'column',base:'column'}} justifyContent="space-between" mx="50px" mt="30px">
              <Flex flexDir='column' textAlign='left'>
                <Heading mb="0px" fontSize="2em">
                  {title}
                </Heading>
                <Text mt="0px" className={unlock?"":"blur"}  fontSize='1.3em' fontWeight="bold">{ProjectBy}</Text>
                <Text mb="20px" mt="0px"  color='grey'>{location}</Text>
              </Flex>
              <Flex justifyContent='center' w='30%' alignItems='center'>
                <Button onClick={unlock?navigateToDisplayPage:navigateToFormPage} colorScheme='orange' px="70px">{unlock?"Explore":"Unlock"}</Button>
              </Flex>
              </Flex>
              <Divider m='auto' my={50} w="90%"/>
              <SimpleGrid mx="50px" columns={{lg:4,md:2,sm:2,base:2}}>
                <Box textAlign='center'>
                  <Text fontSize='1.7em'  fontWeight="bold">₹ {startingPrice}</Text>
                  <Text fontSize='1.1em' color='grey'>Starting Price</Text>
                </Box>
                <Box textAlign='center'>
                  <Text fontSize='1.7em'  fontWeight="bold">{homes}</Text>
                  <Text fontSize='1.1em' color='grey'>Homes In A Community</Text>
                </Box>
                <Box textAlign='center'>
                  <Text fontSize='1.7em'  fontWeight="bold">{targetYeild}</Text>
                  <Text fontSize='1.1em' color='grey'>Target Yield</Text>
                </Box>
                <Box textAlign='center'>
                  <Text fontSize='1.7em'  fontWeight="bold">{targetIrr}</Text>
                  <Text fontSize='1.1em' color='grey'>Target 7 Year IRR</Text>
                </Box>
               
              </SimpleGrid>
              
               <Text className={unlock?"":"blur"}  my="30px" textAlign='left' noOfLines={2} mx="50px">
                    {AboutProject}
               </Text>
        </Box>
    </Flex>
  )
}

export default ExploreCard
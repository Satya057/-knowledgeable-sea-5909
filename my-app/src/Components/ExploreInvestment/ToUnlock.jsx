import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Explorecontext } from '../../context/ExploreContext/ExploreContextProvider'

function ToUnlock() {
  const {unlock,toggleUnlock} = useContext(Explorecontext)
  console.log(unlock)
  const navigate = useNavigate()
  return (
    <Box textAlign='center' w="95%" m="auto">
   <Heading>
   Tell Us More To Unlock Income Generating Opportunities
   </Heading>
   <Text>Investing in Real Estate is meant for Sophisticated Investors. By filling out the form below we are able to understand more about your requirements and suggest what opportunities would fit you best. Post filling in the form, you will see all oppportunities</Text>
   <Heading>How much are you looking to invest in Real Estate?</Heading>
   <Heading>What is the source of your wealth?</Heading>
   <Button m='auto' onClick={()=>{
          toggleUnlock(true)
          navigate("/explore-investment")
   }} colorScheme='teal'>Submit</Button>
    </Box>
  )
}

export default ToUnlock
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Explorecontext } from '../../context/ExploreContext/ExploreContextProvider'
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useState } from "react";
// import styles from "./unlock.module.css";

function Unlock() {
  const [value, setValue] = useState("0");
  const [value1, setValue1] = useState("0");
  const [value2, setValue2] = useState("0");
  const [value3, setValue3] = useState("0");
  const [value4, setValue4] = useState("0");
  const [value5, setValue5] = useState("0");
  const [value6, setValue6] = useState("0");
  const [value7, setValue7] = useState("0");
  const [value8, setValue8] = useState("0");
  return (
    <>
      <Box className="main">
        <h2 className="h2">
          How much are you looking to invest in Real Estate?
        </h2>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row">
            <Radio value="1" colorScheme="teal" size='lg'>
              0 to 25L
            </Radio>
            <Radio value="2" colorScheme="teal" size='lg'>
              25 to 75L
            </Radio>
            <Radio value="3" colorScheme="teal" size='lg'>
              75 to 1Cr
            </Radio>
            <Radio value="4" colorScheme="teal" size='lg'>
              1 to 2Cr
            </Radio>
            <Radio value="5" colorScheme="teal" size='lg'>
              2Cr+
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box className="main">
        <h2 className="h2">
        What is the source of your wealth?
        </h2>
        <RadioGroup onChange={setValue1} value={value1}>
          <Stack direction="row">
            <Radio value="1" colorScheme="teal" size='lg'>
            Retirement Savings
            </Radio>
            <Radio value="2" colorScheme="teal" size='lg'>
            Sale of Some other property
            </Radio>
            <Radio value="3" colorScheme="teal" size='lg'>
              Income from Business
            </Radio>
            <Radio value="4" colorScheme="teal" size='lg'>
              Inheritance
            </Radio>
            <Radio value="5" colorScheme="teal" size='lg'>
            Other
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box className="main">
        <h2 className="h2">
        Do you own your own residence at the moment?
        </h2>
        <RadioGroup onChange={setValue2} value={value2}>
          <Stack direction="row">
            <Radio value="1" colorScheme="teal" size='lg'>
            YES
            </Radio>
            <Radio value="2" colorScheme="teal" size='lg'>
           NO
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box className="main">
        <h2 className="h2">
        Do you own homes or apartments you are renting out?
        </h2>
        <RadioGroup onChange={setValue3} value={value3}>
          <Stack direction="row">
            <Radio value="1" colorScheme="teal" size='lg'>
              YES
            </Radio>
            <Radio value="2" colorScheme="teal" size='lg'>
              NO
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box className="main">
        <h2 className="h2">
        Do you own any commercial space you are renting?
        </h2>
        <RadioGroup onChange={setValue4} value={value4}>
          <Stack direction="row">
            <Radio value="1" colorScheme="teal" size='lg'>
              YES
            </Radio>
            <Radio value="2" colorScheme="teal" size='lg'>
              NO
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box className="main">
        <h2 className="h2">
        Any Geographic Preferences?
        </h2>
        <RadioGroup onChange={setValue5} value={value5}>
          <Stack direction="row">
            <Radio value="1" colorScheme="teal" size='lg'>
            Thailand
            </Radio>
            <Radio value="2" colorScheme="teal" size='lg'>
            Bali
            </Radio>
            <Radio value="3" colorScheme="teal" size='lg'>
            Australia
            </Radio>
            <Radio value="4" colorScheme="teal" size='lg'>
            Sri Lanka
            </Radio>
            <Radio value="5" colorScheme="teal" size='lg'>
            Dubai
            </Radio>
            <Radio value="6" colorScheme="teal" size='lg'>
            North India
            </Radio>
            <Radio value="7" colorScheme="teal" size='lg'>
            South India
            </Radio>
            <Radio value="8" colorScheme="teal" size='lg'>
            Maharashtra & Goa
            </Radio>
            <Radio value="9" colorScheme="teal" size='lg'>
            Europe
            </Radio>
            <Radio value="10" colorScheme="teal" size='lg'>
            North America
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box className="main">
        <h2 className="h2">
        Which age bracket do you fall into?
        </h2>
        <RadioGroup onChange={setValue6} value={value6}>
          <Stack direction="row">
            <Radio value="1" colorScheme="teal" size='lg'>
            Below 25
            </Radio>
            <Radio value="2" colorScheme="teal" size='lg'>
            25 TO 35
            </Radio>
            <Radio value="3" colorScheme="teal" size='lg'>
            36 TO 55
            </Radio>
            <Radio value="4" colorScheme="teal" size='lg'>
            55 Above
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box className="main">
        <h2 className="h2">
        What are you in your professional life?
        </h2>
        <RadioGroup onChange={setValue7} value={value7}>
          <Stack direction="row">
            <Radio value="1" colorScheme="teal" size='lg'>
            Salaried
            </Radio>
            <Radio value="2" colorScheme="teal" size='lg'>
            Business Person
            </Radio>
            <Radio value="3" colorScheme="teal" size='lg'>
            Agriculture
            </Radio>
            <Radio value="4" colorScheme="teal" size='lg'>
            Retired
            </Radio>
            <Radio value="5" colorScheme="teal" size='lg'>
              Other
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box className="main">
        <h2 className="h2">
        Do you already have a Tripvillas Account?
        </h2>
        <RadioGroup onChange={setValue8} value={value8}>
          <Stack direction="row">
            <Radio value="1" colorScheme="teal" size='lg'>
            Yes. I have login details
            </Radio>
            <Radio value="2" colorScheme="teal" size='lg'>
            No, I want to create one.
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </>
  );
}


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

   <Unlock/>
   <Button m='auto' onClick={()=>{
          toggleUnlock(true)
          navigate("/explore-investment")
   }} colorScheme='teal'>Submit</Button>
    </Box>
  )
}

export default ToUnlock
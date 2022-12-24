import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Explorecontext } from "../../context/ExploreContext/ExploreContextProvider";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useState } from "react";
// import styles from "./unlock.module.css";

//  Static form component which will be imported belo in export funtion
function ToUnlock() {
  const { toggleUnlock } = useContext(Explorecontext); // getting toggle Unlock form ExploreContext to change unlock status
  const navigate = useNavigate();
  // States to manage only one selection of option in ech feilds
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [value4, setValue4] = useState(null);
  const [value5, setValue5] = useState(null);
  const [value6, setValue6] = useState(null);
  const [value7, setValue7] = useState(null);
  const [value8, setValue8] = useState(null);
  const [pageValidation , setPageValidation] = useState(false)
  return (
    <>
      {/* Static form */}
      <Box className="main">
        <h2 className="h2">
          How much are you looking to invest in Real Estate?
        </h2>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row">
            <Radio value="1" colorScheme="teal" size="lg">
              0 to 25L
            </Radio>
            <Radio value="2" colorScheme="teal" size="lg">
              25 to 75L
            </Radio>
            <Radio value="3" colorScheme="teal" size="lg">
              75 to 1Cr
            </Radio>
            <Radio value="4" colorScheme="teal" size="lg">
              1 to 2Cr
            </Radio>
            <Radio value="5" colorScheme="teal" size="lg">
              2Cr+
            </Radio>
          </Stack>
        </RadioGroup>
        {pageValidation ? <Text color='red'>{(!value ? "* This Feild is Required *":"")}</Text>:""}
      </Box>
      <Box className="main">
        <h2 className="h2">What is the source of your wealth?</h2>
        <RadioGroup onChange={setValue1} value={value1}>
          <Stack direction="row">
            <Radio value="1" colorScheme="teal" size="lg">
              Retirement Savings
            </Radio>
            <Radio value="2" colorScheme="teal" size="lg">
              Sale of Some other property
            </Radio>
            <Radio value="3" colorScheme="teal" size="lg">
              Income from Business
            </Radio>
            <Radio value="4" colorScheme="teal" size="lg">
              Inheritance
            </Radio>
            <Radio value="5" colorScheme="teal" size="lg">
              Other
            </Radio>
          </Stack>
        </RadioGroup>
        {pageValidation ? <Text color='red'>{(!value1 ? "* This Feild is Required *":"")}</Text>:""}
      </Box>
      <Box className="main">
        <h2 className="h2">Do you own your own residence at the moment?</h2>
        <RadioGroup onChange={setValue2} value={value2}>
          <Stack direction="row">
            <Radio value="1" colorScheme="teal" size="lg">
              YES
            </Radio>
            <Radio value="2" colorScheme="teal" size="lg">
              NO
            </Radio>
          </Stack>
        </RadioGroup>
        {pageValidation ? <Text color='red'>{(!value2 ? "* This Feild is Required *":"")}</Text>:""}
      </Box>
      <Box className="main">
        <h2 className="h2">
          Do you own homes or apartments you are renting out?
        </h2>
        <RadioGroup onChange={setValue3} value={value3}>
          <Stack direction="row">
            <Radio value="1" colorScheme="teal" size="lg">
              YES
            </Radio>
            <Radio value="2" colorScheme="teal" size="lg">
              NO
            </Radio>
          </Stack>
        </RadioGroup>
        {pageValidation ? <Text color='red'>{(!value3 ? "* This Feild is Required *":"")}</Text>:""}
      </Box>
      <Box className="main">
        <h2 className="h2">Do you own any commercial space you are renting?</h2>
        <RadioGroup onChange={setValue4} value={value4}>
          <Stack direction="row">
            <Radio value="1" colorScheme="teal" size="lg">
              YES
            </Radio>
            <Radio value="2" colorScheme="teal" size="lg">
              NO
            </Radio>
          </Stack>
        </RadioGroup>
        {pageValidation ? <Text color='red'>{(!value4 ? "* This Feild is Required *":"")}</Text>:""}
      </Box>
      <Box className="main">
        <h2 className="h2">Any Geographic Preferences?</h2>
        <RadioGroup onChange={setValue5} value={value5}>
          <Stack direction="row">
            <Radio value="1" colorScheme="teal" size="lg">
              Thailand
            </Radio>
            <Radio value="2" colorScheme="teal" size="lg">
              Bali
            </Radio>
            <Radio value="3" colorScheme="teal" size="lg">
              Australia
            </Radio>
            <Radio value="4" colorScheme="teal" size="lg">
              Sri Lanka
            </Radio>
            <Radio value="5" colorScheme="teal" size="lg">
              Dubai
            </Radio>
            <Radio value="6" colorScheme="teal" size="lg">
              North India
            </Radio>
            <Radio value="7" colorScheme="teal" size="lg">
              South India
            </Radio>
            <Radio value="8" colorScheme="teal" size="lg">
              Maharashtra & Goa
            </Radio>
            <Radio value="9" colorScheme="teal" size="lg">
              Europe
            </Radio>
            <Radio value="10" colorScheme="teal" size="lg">
              North America
            </Radio>
          </Stack>
        </RadioGroup>
        {pageValidation ? <Text color='red'>{(!value5 ? "* This Feild is Required *":"")}</Text>:""}
      </Box>
      <Box className="main">
        <h2 className="h2">Which age bracket do you fall into?</h2>
        <RadioGroup onChange={setValue6} value={value6}>
          <Stack direction="row">
            <Radio value="1" colorScheme="teal" size="lg">
              Below 25
            </Radio>
            <Radio value="2" colorScheme="teal" size="lg">
              25 TO 35
            </Radio>
            <Radio value="3" colorScheme="teal" size="lg">
              36 TO 55
            </Radio>
            <Radio value="4" colorScheme="teal" size="lg">
              55 Above
            </Radio>
          </Stack>
        </RadioGroup>
        {pageValidation ? <Text color='red'>{(!value6 ? "* This Feild is Required *":"")}</Text>:""}
      </Box>
      <Box className="main">
        <h2 className="h2">What are you in your professional life?</h2>
        <RadioGroup onChange={setValue7} value={value7}>
          <Stack direction="row">
            <Radio value="1" colorScheme="teal" size="lg">
              Salaried
            </Radio>
            <Radio value="2" colorScheme="teal" size="lg">
              Business Person
            </Radio>
            <Radio value="3" colorScheme="teal" size="lg">
              Agriculture
            </Radio>
            <Radio value="4" colorScheme="teal" size="lg">
              Retired
            </Radio>
            <Radio value="5" colorScheme="teal" size="lg">
              Other
            </Radio>
          </Stack>
        </RadioGroup>
        {pageValidation ? <Text color='red'>{(!value7 ? "* This Feild is Required *":"")}</Text>:""}
      </Box>
      <Box className="main">
        <h2 className="h2">Do you already have a Tripvillas Account?</h2>
        <RadioGroup onChange={setValue8} value={value8}>
          <Stack direction="row">
            <Radio value="1" colorScheme="teal" size="lg">
              Yes. I have login details
            </Radio>
            <Radio value="2" colorScheme="teal" size="lg">
              No, I want to create one.
            </Radio>
          </Stack>
        </RadioGroup>
        {pageValidation ? <Text color='red'>{(!value8 ? "* This Feild is Required *":"")}</Text>:""}
      </Box>
      <Box textAlign="center" w="95%" m="auto">
      <Heading>Tell Us More To Unlock Income Generating Opportunities</Heading>
      <Text>
        Investing in Real Estate is meant for Sophisticated Investors. By
        filling out the form below we are able to understand more about your
        requirements and suggest what opportunities would fit you best. Post
        filling in the form, you will see all oppportunities
      </Text>
      
      <Button
        m="auto"
        onClick={() => {
          // Onclick changing Unlock Status and Navigating to ExploreInvestment page to see unloacked items
          if(value && value1 && value2 && value3 && value4 && value5 && value6 && value7 && value8){      // checks if all required feilds are selected
            
            toggleUnlock(true);             // changing unlock status to true
            navigate("/explore-investment");       
          }else{
            console.log(value)
             setPageValidation(true)       // checks the submit attempt
          }
        }}
        colorScheme="teal"
      >
        Submit
      </Button>
    </Box>
    </>
  );
}



export default ToUnlock;

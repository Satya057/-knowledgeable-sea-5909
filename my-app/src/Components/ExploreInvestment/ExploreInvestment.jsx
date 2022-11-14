import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import ExploreCard from './ExploreCard'
import Whatis from './Whatis'
import WhyInvest from './WhyInvest'
import axios from 'axios'
import { useState } from 'react'
function ExploreInvestment() {
   const [data , setData] = useState([]);
   useEffect(()=>{
      axios.get(`${process.env.REACT_APP_BASE_URL}/exploreinvenstment`)
  .then(function (response) {
    // handle success
    console.log(response.data);
    setData(response.data)
  })
   },[])
  return (
     <Box>
        <WhyInvest/>
        <Heading fontSize="2.5em" my="30px">Current Opportunities</Heading>
        {
         data?
         data.map((e,i)=>{
         if(i===1){
            return <>
             <Whatis/>
            <ExploreCard {...e}/>
            </>
         }
        return <ExploreCard key={e.keyId+e.id} {...e}/>
         })
         :""
        }
        
     </Box>
  )
}

export default ExploreInvestment
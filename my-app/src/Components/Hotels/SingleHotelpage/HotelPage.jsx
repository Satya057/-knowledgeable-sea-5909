import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./HotelPage.module.css"
import getData from "./fetchData";
import LeftSideBox from "./LeftSideBox";
import RightSideBox from "./RightSideBox";
  

  
  
  const HotelPage = () => {
    const data=JSON.parse(localStorage.getItem("data"))
    const [hotelData,setHotelData] = useState()
    const params = useParams()
    

  useEffect(()=>{
     getData(params.id).then((res)=>{
      setHotelData(res)
     }).catch((e)=>{
      console.log(e);
     })
  },[params.id])

  return (
    <>
    {/* If we get hotel data from ID then print data in to UI else NOT FOUND show */}
    {hotelData?<Box display={["-moz-initial","-moz-initial","flex"]} className={styles.main_box}>
      
      {/* --------------left---------------- */}
      <LeftSideBox hotelData={hotelData}/>

      {/* --------------Right---------------- */}
      <RightSideBox isAuth={data?data.isAuth:false} hotelData={hotelData}/>
     
    </Box>:<Heading marginTop="100px">Loading...</Heading>} 
    </>
  );
};

export default HotelPage;

import React, { useEffect } from "react";
import { HomeSearch } from "./Home_Search/HomeSearch";
import { HomeMiddle } from "./HomeMiddle/HomeMiddle";

import axios from "axios";
import Property from "./ExpolrePage/Property";
import Carasol from "./Carasol/Carasol.jsx";
export default function Home(){
  useEffect(()=>{
    console.log(
      "fsdf"
    )
    axios
    .get(`https://tripvilla.herokuapp.com/hotels`)
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.log(error,"error");
      
    })
  },[])
  return (
    <div>
      <HomeSearch />
      <Carasol/>
      <HomeMiddle/>
      <Property/>
      <Carasol/>
    </div>
  );
};

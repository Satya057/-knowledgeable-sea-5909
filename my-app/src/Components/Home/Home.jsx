import React, { useEffect } from "react";
import { NavBar } from "../Home_NavBar/NavBar";
import { HomeSearch } from "./Home_Search/HomeSearch";

import Property from "../ExpolrePage/Property";
import { Carasol } from "../../Components/Carasol/Carasol.jsx";
import { Footer } from "../../Components/Home/HomeFooter/Footer";
import { HomeMiddle } from "./HomeMiddle/HomeMiddle";

import axios from "axios";
export const Home = () => {
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
      <NavBar />
      <HomeSearch />
      <Carasol />
      <HomeMiddle/>
      <Property />

      <Carasol />
      <Footer />
    </div>
  );
};

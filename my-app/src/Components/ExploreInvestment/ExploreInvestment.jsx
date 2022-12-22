import { Box, Heading, Spinner } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import ExploreCard from "./ExploreCard";
import Whatis from "./Whatis";
import WhyInvest from "./WhyInvest";
import axios from "axios";
import { useState } from "react";
function ExploreInvestment() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false); // returns loading component while data is loading
  const getData = () => {
    setLoad(true); // setting load state true
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/exploreinvenstment`)
      .then(function (response) {
        // handle success
        console.log(response.data);
        setData(response.data); // setting data in state
        setLoad(false); // setting load state false after data is stored in state
      });
  };
  useEffect(() => {
    getData(); // fetch data function
  }, []);
  if (load) {
    return (
      <>
        <Spinner mt="20px" size={"xl"} /> {/* loading component**/}
      </>
    );
  }
  return (
    <Box>
      <WhyInvest /> {/* Imported component  */}
      <Heading fontSize="2.5em" my="30px">
        Current Opportunities
      </Heading>
      {data // data we got from getdata function  & using ternary oprator for null check
        ? data.map((e, i) => {
            // maping data
            if (i === 1) {
              return (
                <>
                  <Whatis />{" "}
                  {/*imported component which is been appended at after specific element */}
                  <ExploreCard {...e} />
                </>
              );
            }
            return <ExploreCard key={e.keyId + e.id} {...e} />; // passing full element in ExploreCard component as a prop
          })
        : ""}
    </Box>
  );
}

export default ExploreInvestment;

import {
  Box,
  Button,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageVeiwer from "./ImageVeiwer";
function ExploreDisplay() {
  const initState = {
    //intial for state which acts as Schema of data
    images: [""],
    AboutProject: "",
    title: "",
    ProjectBy: "",
    location: "",
    startingPrice: "",
    homes: "",
    targetYeild: "",
    targetIrr: "",
    id: "",
  };
  const [data, setData] = useState(initState);
  const [load, setLoad] = useState(false);
  const param = useParams(); // get id from params in url

  const getData = () => {
    setLoad(true);
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/exploreinvenstment/${param.id}`) // get data for perticular id from api
      .then((res) => {
        setData(res.data);
        setLoad(false); // storing data in state
      });
  };
  useEffect(() => {
    //call getData function on loading of page
    getData();
  }, []);
  if (load) {
    return (
      <>
        <Spinner mt="20px" size={"xl"} />
      </>
    );
  }
  console.log(data);
  return (
    <>
      <Box
        w="100%"
        py="50px"
        color="white"
        filter="grayscale(40%)"
        minH="500px"
        backgroundSize="cover"
        backgroundImage={`linear-gradient(-180deg,transparent 10%,rgba(0,0,0,.9)),url('${data.images[0]}')`}
      >
        <Box m="auto" maxW={{ lg: "60%", md: "80%", sm: "90%", base: "90%" }}>
          <Heading fontSize="4em" brightness="100%">
            {data.title}
          </Heading>
          <Text fontSize="3.5em">{data.ProjectBy}</Text>
          <Text fontSize="1.7em">{data.location}</Text>
        </Box>
        <Button mt="30px" colorScheme="orange">
          Contact Us
        </Button>
        <Divider my="50px" />

        <SimpleGrid mx="30px" columns={{ lg: 5, md: 4, sm: 2, base: 2 }}>
          <Box textAlign="center">
            <Text fontSize="3em">₹ {data.startingPrice}</Text>
            <Text fontSize="1.1em" color="grey">
              Starting Price
            </Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize="3em">{data.homes}</Text>
            <Text fontSize="1.1em" color="grey">
              Homes In A Community
            </Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize="3em">{data.targetYeild}</Text>
            <Text fontSize="1.1em" color="grey">
              Target Yield
            </Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize="3em">{data.targetIrr}</Text>
            <Text fontSize="1.1em" color="grey">
              Target 7 Year IRR
            </Text>
          </Box>
          <Box textAlign="center">
            <Text fontSize="3em">{data.completionDate}</Text>
            <Text fontSize="1.1em" color="grey">
              Date Of Completion | Phase 2
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Text fontSize="2.5em" mt="50px" fontWeight="semibold">
        Photos
      </Text>

      <SimpleGrid width="80%" m="auto" my="50px" columns={4}>
        {" "}
        {/* maping images which is in array form for perticular product in 4x2 grid*/}
        {data.images.map((e, i) => {
          if (i >= 8) {
            return;
          } else {
            return <ImageVeiwer key={e+i} images={data.images} count={i} />; // passing images array in props and count of particular image index in ImageViewer Component
          }
        })}
      </SimpleGrid>
      <Heading my="50px">About This Project</Heading>
      <Text m="auto" w="80%">
        {`${data.AboutProject}`}
      </Text>
      <Heading my="50px">Anemities</Heading>
      <SimpleGrid
        gap="40px"
        columns={{ lg: 4, md: 2, sm: 1, base: 1 }}
        m="auto"
        w="80%"
      >
        {data.anemities
          ? data.anemities.map((e) => (
              <Box
                p={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
                boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
              >
                <Text>{e}</Text>
              </Box>
            ))
          : ""}
      </SimpleGrid>
    </>
  );
}

export default ExploreDisplay;

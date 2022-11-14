import { Box, Button, Grid, GridItem, Heading, HStack, Img, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// const hotelData = {
  //   city_slug: "candolim-615",
  //   instant_bookable: false,
  //   ac: true,
  //   cook_on_call: false,
  //   premium: false,
  //   pets: true,
  //   state_slug: "goa-11",
  //   gym: true,
  //   internet: false,
  //   television: true,
  //   review_rating: null,
  //   created_on: "2013-08-23 14:08:38",
  //   max_price_in_usd: 209,
  //   check_in: null,
  //   images_small: [
    //     "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_100x100/15323035/highland_1_thumbnail_100x100.jpeg",
    //     "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_100x100/15323035/highland-pool_1_thumbnail_100x100.jpeg",
    //     "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_100x100/15323035/dsc01551_thumbnail_100x100.jpeg",
    //     "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_100x100/15323035/dsc01552_thumbnail_100x100.jpeg",
    //     "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_100x100/15323035/dsc01558_thumbnail_100x100.jpeg",
    //   ],
    //   parking: false,
    //   active: true,
    //   spa: false,
    //   number_of_rooms: 1,
    //   id: "15323035",
    //   refrigerator: true,
    //   city: "candolim",
    //   images_large: [
      //     "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/15323035/highland_1_watermarked_image_1024.jpeg",
//     "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/15323035/highland-pool_1_watermarked_image_1024.jpeg",
//     "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/15323035/dsc01551_watermarked_image_1024.jpeg",
//     "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/15323035/dsc01552_watermarked_image_1024.jpeg",
//     "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/15323035/dsc01558_watermarked_image_1024.jpeg",
//   ],
//   property_type: "Apartment",
//   review_count: 0,
//   housekeeping: true,
//   title: "1 Double A/C Bedroom with Bath, Lounge, Kitchen in Candolim!!",
//   country: "india",
//   number_of_bathrooms: 1,
//   country_slug: "india",
//   starting_price_in_usd: 1290,
//   occupancy: 4,
//   images_medium: [
  //     "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/15323035/highland_1_mid_thumbnail.jpeg",
  //     "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/15323035/highland-pool_1_mid_thumbnail.jpeg",
  //     "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/15323035/dsc01551_mid_thumbnail.jpeg",
  //     "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/15323035/dsc01552_mid_thumbnail.jpeg",
  //     "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_280x210/15323035/dsc01558_mid_thumbnail.jpeg",
  //   ],
  //   functional_kitchen: true,
  //   swimming_pool: true,
  //   state: "arunachal pradesh",
  //   score: 45,
  //   lng: 73.7700337172,
  //   lat: 15.5169558574,
//   washing_machine: true,
//   images_mid_large: [
  //     "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/15323035/highland_1_mob_thumbnail.jpeg",
  //     "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/15323035/highland-pool_1_mob_thumbnail.jpeg",
  //     "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/15323035/dsc01551_mob_thumbnail.jpeg",
  //     "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/15323035/dsc01552_mob_thumbnail.jpeg",
  //     "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_640x960/15323035/dsc01558_mob_thumbnail.jpeg",
  //   ],
  //   units: 1,
  //   dish_washer: false,
  //   availability_pct: 39.44,
  //   slug: "15323035-1-double-ac-bedroom-with-bath-lounge-kitchen-in-candolim",
  //   prop_tags: ["Apartment", "1 BR", "1 Bath", "Swimming Pool", "TV", "AC"],
  //   url: "/holiday-home/15323035-1-double-ac-bedroom-with-bath-lounge-kitchen-in-candolim/",
  //   currency: "NOK",
  // };
  
  
  
  const HotelPage = () => {
    const [hotelData,setHotelData] = useState()
    const params = useParams()
    console.log(params)
    const getData = ()=>{
      axios.get(`${process.env.REACT_APP_BASE_URL}/results/${params.id}`).then((res)=>{
        setHotelData(res.data)
      })
  }

  useEffect(()=>{
     getData()
  },[])
  return (
    <>
    {hotelData?<Box display={["-moz-initial","-moz-initial","flex"]}>
      {/* --------------left---------------- */}
      <Box p={"4%"} w={["100%","100%","75vw"]}>
        <Text color="grey" marginBottom="5px">
          Home/{hotelData.country}/
          {hotelData.state_slug === "goa-11" ? "Goa" : "Goa"}/{hotelData.city}/#
          {hotelData.id}
        </Text>
        <HStack border="1px solid grey"></HStack>
        {/* -------photos and details title/price/etc */}
        <Box display={"flex"} flexDirection={["column","column","inherit"]}>
          <Box w={["100%","100%","55%"]} className="left" marginTop="5px">
           <Img src={hotelData.images_large[0]?hotelData.images_large[0]:""}></Img>
           <HStack marginTop="5px" w={"100%"}>
           <Img w={"49%"} h={"200px"} src={hotelData.images_large[1]}></Img>
           <Img w={"49%"} h={"200px"} src={hotelData.images_large[2]}></Img>

           </HStack>
          </Box>
          <Box p={"4%"} boxSizing="border-box" w={["100%","100%","45%"]} className="right">
            <Heading fontWeight="medium"  fontSize={"24px"}>
                {hotelData.title}
            </Heading>

            <Text color="grey" fontSize={"18px"} marginTop={"20px"}>{hotelData.city} , {hotelData.state_slug=="goa-11"?"Goa":hotelData.state_slug} , {hotelData.country} | {hotelData.city}</Text>
           
           <HStack marginTop={"10px"} border={".5px solid lightgrey"}></HStack>

           <Box className="topFeatures" marginTop={"20px"} display="flex" gap="20px" flexWrap={"wrap"}>
             {hotelData.prop_tags.map((el)=>{
                return <Box p={"5px"} border={"1px solid #6db1f5"} color="#6db1f5">{el}</Box>
             })}

           </Box>

          </Box>
        </Box>
       
        <HStack marginTop={'20px'} border={"1px solid lightgrey"}></HStack>

        <HStack>

         <Box className="left-overview" w={"50%"}>
         <Box color={"#7ab8f5"} width={"80%"} margin="auto" p={"10%"} marginTop={"10px"} shadow="2xl" display="flex" justifyContent={"center"} alignItems="center">
            {hotelData.property_type}
        </Box>

        <HStack  width={"80%"} margin="auto">
        <Box color={"#7ab8f5"} width={"80%"} margin="auto" p={"10%"} marginTop={"10px"} shadow="2xl" display="flex" justifyContent={"center"} alignItems="center">
            {hotelData.number_of_bathrooms} Bathrooms
        </Box>

        <Box color={"#7ab8f5"} width={"80%"} margin="auto" p={"10%"} marginTop={"10px"} shadow="2xl" display="flex" justifyContent={"center"} alignItems="center">
        {hotelData.number_of_rooms} Bedrooms
        </Box>
        </HStack>

        <Box color={"#7ab8f5"} width={"80%"} margin="auto" p={"10%"} marginTop={"10px"} shadow="2xl" display="flex" justifyContent={"center"} alignItems="center">
            {hotelData.occupancy} Max Guests
        </Box>
         </Box>


         <Box className="right-overview" w={"50%"} boxSizing="border-box" p={"5px"}>
            
            <Text fontSize={"12px"}>
                Overview:-
                <br/>
                <br/>
            Located on a quiet hilltop, away from the hustle and bustle of the tourist areas, yet close enough to enjoy the trimmings of beaches, shopping, tours, restaurants etc. It is a 4 bed villa, all the rooms air conditioned with ceiling fans and en-suite bathrooms with showers. A fully functional kitchen with kettle, gas hob, fridge freezer, utensils and crockery and cutlery.
<br></br>
The villa has great views of the Candolim Valley and the Arabian sea from the roof top terrace and large window of the Master bedroom. There is also a 6 place dining table and a large lounge area to relax in. There is also a large basement which in the near future will have a pool/billiards table. Bed linen and towels are provided.
<br></br>
There are numerous excellent restaurants, bars, supermarkets and shops offering a variety of goods, cuisines, curios and services. From massages, trinkets, exotic teas, handicrafts, to day trips and tours to various tourist attractions in and around Goa, all within walking distance.
<br></br>
The villa is only an hours drive from Dabolim international airport and just 14 km from the state capital Panjim.
<br></br>
Try out the public transportation in the form of a bus ride to Panjim like the locals, or alternatively rent a bike for two or a car.
            </Text>
         </Box>

     
        </HStack>

<HStack>

</HStack>

<HStack marginTop={'20px'} border={"1px solid lightgrey"}></HStack>

<Heading fontSize={"24px"} marginTop="20px">Key Amenities</Heading>

<Box className="topFeatures" marginTop={"20px"} display="flex" gap="20px" flexWrap={"wrap"}>
             {hotelData.prop_tags.map((el)=>{
                return <Box p={"5px"} border={"1px solid #6db1f5"} color="#6db1f5">{el}</Box>
             })}

             </Box>

             
        
      </Box>

      {/* --------------Right---------------- */}
      <Box
        position={["-moz-initial","-moz-initial","fixed"]}
        right={["0px"]}
        h={"100vh"}
        
        w={["100%","100%","25vw"]}
        border="1px solid black"
        p={"3%"}
      >
          <Text marginTop={"80px"} color={"grey"} fontSize={"20px"}>Staring</Text>
          <Heading>₹{hotelData.starting_price_in_usd}.00</Heading>
          <Text marginLeft={"130px"} color={"grey"} fontSize={"10px"}>Per Night</Text>
          <Input marginTop={"10px"} placeholder="Check In" borderRadius={"0"} borderColor="grey"></Input>
          <Input marginTop={"10px"} placeholder="Check Out" borderRadius={"0"} borderColor="grey" ></Input>
          <Input marginTop={"10px"} placeholder="Guest" borderRadius={"0"} borderColor="grey"></Input>
          <Button fontSize={"10px"} w={"100%"} bg="#7ab8f5" color={"white"} marginTop={"10px"} borderRadius={"0"}>REQUIST TO CHECK</Button>
      </Box>
     
    </Box>:""} 
    </>
  );
};

export default HotelPage;

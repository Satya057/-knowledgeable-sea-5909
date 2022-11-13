import { Box, Button, Container, Grid, GridItem, Heading, Img, Input, useStatStyles,Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom"
  
const Availability = () => {
    const [hotelData,setHotelData] = useState([])

    useEffect(()=>{
     getData()
    },[])

    const getData=async ()=>{
     const res=await axios.get("http://localhost:8000/results")
     const data=res.data
     setHotelData(data)

    }
    console.log(hotelData);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };



  return (
    <div>
      <Container
        maxW="90vw"
        color="black"
        border="1px solid"
        borderColor="transparent"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        margin="auto"
        padding="30px"
        marginTop="40px"
      >
        <Heading fontSize="28px" textAlign="center" fontWeight="100">{"Goa"} Holiday Homes</Heading>
        <Heading fontSize="20px" textAlign="center" fontWeight="100" marginTop="20px">We have 300 Vacation Rentals - search by dates for availability</Heading>
        <Box height={"100px"} display="flex" alignItems="center" justifyContent="center">
            <Input padding="10px" placeholder="Check In" border="1px solid grey"></Input>
            <Input padding="10px" placeholder="Check Out" border="1px solid grey"></Input>
            <Input padding="10px" placeholder="Select Guests" border="1px solid grey"></Input>
           <Link to="/search" > <Button padding="10px 60px" bg="#1e87f0" color="white" border="1px solid grey">SEARCH</Button></Link>
        </Box>
      </Container>

      <Box
      maxW="90vw"
      color="black"
      margin="auto"
      marginTop="40px">


    {/* -----------------------Homes Goa----------------------------------------- */}
       
       
       
        <Heading fontSize="20px" fontWeight="400" >{"Goa"} Holiday Homes</Heading>

     
     <Box width="90vw" margin="auto" height="350px" marginTop="40px" >
       <Slider className="Slider-Hotels" {...settings}>
          {hotelData.map((el)=>{
            if(el.property_type=="Villa"){
             return <Box height="350px" >
                <Img width="100%" height="200px" src={el.images_large[1]}></Img>
                <Text marginTop="10px" fontWeight={"500"}>{el.title}</Text>
                <Text marginTop="10px" fontWeight={"300"}>{el.city}, {el.state_slug}, {el.country}</Text>
                <Box marginTop="10px" display={"flex"}  flexWrap="nowrap">
                {el.prop_tags.map((pt)=>{
                    return <Text fontWeight={"100"} fontSize="12px">{pt} | </Text>
                })}
                </Box> 

                <Text marginTop="30px" color="blue" fontWeight={"500"}>{el.starting_price_in_usd} Per night</Text>

             </Box>
            }
          })}
        </Slider>

        </Box>

{/* -----------------------Top Rated Hotels----------------------------------------- */}

        <Heading fontSize="20px" fontWeight="400" marginTop={"80px"}>{"Goa"} Top Rated Hotels</Heading>


        <Box width="90vw" margin="auto" height="350px" marginTop="40px" >
       <Slider className="Slider-Hotels" {...settings}>
          {hotelData.map((el)=>{
            if(el.property_type=="Apartment"){
                if(el.state_slug=="goa-11"){

                
             return <Box height="350px" >
                <Img width="100%" height="200px" src={el.images_large[1]}></Img>
                <Text marginTop="10px" fontWeight={"500"}>{el.title}</Text>
                <Text marginTop="10px" fontWeight={"300"}>{el.city}, {el.state_slug}, {el.country}</Text>
                <Box marginTop="10px" display={"flex"}  flexWrap="nowrap">
                {el.prop_tags.map((pt)=>{
                    return <Text fontWeight={"100"} fontSize="12px">{pt} | </Text>
                })}
                </Box> 

                <Text marginTop="30px" color="blue" fontWeight={"500"}>{el.starting_price_in_usd} Per night</Text>

             </Box>
            }
        }
        
          })}
        </Slider>

        </Box>


      
{/* -----------------------Top Rated Hotels----------------------------------------- */}
      
{/* <iframe src="https://maps.google.com/maps?q=goa,%20india&amp;t=k&amp;z=9&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas" frameborder="0" scrolling="no" style="width: 550px; height: 240px;"></iframe> */}

<Heading fontSize="20px" fontWeight="400" marginTop={"80px"}> About Location</Heading>

<Text color="grey" fontSize="14px">
<br></br>
<br></br>
Goa is India's smallest state by area and the fourth smallest by population. Located on the west coast of India in the region known as the Konkan, it is bounded by the state of Maharashtra to the north, and by Karnataka to the east and south, while the Arabian Sea forms its western coast. Panaji is the state's capital, while Vasco da Gama is the largest city. The historic city of Margao still exhibits the cultural influence of the Portuguese, who first landed in the early 16th century as merchants, and conquered it soon thereafter. The Portuguese overseas territory existed for about 450 years, until it was annexed by India in 1961. Renowned for its beaches, places of worship and world heritage architecture, Goa is visited by large numbers of international and domestic tourists each year. It also has rich flora and fauna, owing to its location on the Western Ghats range, which is classified as a biodiversity hotspot.
<br></br>
<br></br>
Goa has two World Heritage Sites: the Bom Jesus Basilica and a few designated convents. The Basilica holds the mortal remains of St. Francis Xavier, regarded by many Catholics as the patron saint of Goa (the patron of the Archdiocese of Goa is actually the Blessed Joseph Vaz). Once every twelve years, the body is taken down for veneration and for public viewing. The last such event was conducted in 2004. The Velhas Conquistas regions are also known for its Goa-Portuguese style architecture. There are many forts in Goa such as Tiracol, Chapora, Corjuem, Aguada, Gaspar Dias and Cabo de Rama.
<br></br>
<br></br>
In many parts of Goa, mansions constructed in the Indo-Portuguese style architecture still stand, though in some villages, most of them are in a dilapidated condition. Fontainhas in Panaji has been declared a cultural quarter, showcasing the life, architecture and culture of Goa. Some influences from the Portuguese era are visible in some of Goa's temples, notably the Mangueshi Temple and the Mahalasa Temple, although after 1961, many of these were demolished and reconstructed in the indigenous Indian style.
Goa also has a few museums, the two important ones being Goa State Museum and the Naval Aviation Museum. The Aviation museum is the only one of its kind in the whole of India. Also, a place not well known to tourists is the Goa Science Center, which is located in Panjim.
</Text>



<Heading fontSize="20px" fontWeight="400" marginTop={"80px"}>FAQs</Heading>

<Text color="grey" fontSize="14px">
<br></br>
<br></br>
<span style={{color:"black",fontWeight:"500"}}> Can I get a holiday home with swimming pool in Goa?</span>
<br></br>
<br></br>
Yes. We have close to 197 holiday homes with swimming pool in Goa. You can also choose a villa or bungalow with a swimming pool. Each vacation rental will have its own swimming pool policies & timings though. Make sure you talk to the property manager or the owner when you make a reservation.<br></br>
<br></br>


<span style={{color:"black",fontWeight:"500"}}>What are the most popular destinations in Goa?</span>
<br></br>
<br></br>
Tripvillas has around 300 of vacation rentals in Goa. Some of the most popular destinations are Candolim (62 vacation rentals), Calangute (35 vacation rentals), Arpora (32 vacation rentals), Baga (13 vacation rentals), Benaulim (12 vacation rentals), Varca (11 vacation rentals), Morjim (10 vacation rentals), Anjuna (9 vacation rentals), Colva (9 vacation rentals), Sinquerim (9 vacation rentals).
<br></br>


<span style={{color:"black",fontWeight:"500"}}>Can I get any accommodation in Goa if I am travelling with my family or a group of friends?</span>
<br></br>
<br></br>
You will have to choose number of bedrooms depending on the group size. You can go for any of the 91 Apartments, 83 Villas. You can go for 46 1BHK, 56 2BHKS, 46 3BHKS, 24 4BHKS, 9 5BHKS holiday homes<br></br>
<br></br>

<span style={{color:"black",fontWeight:"500"}}>What are the different types of holiday homes I can get in Goa?</span>
<br></br>
<br></br>
Tripvillas has different types of holiday homes you can choose from in Goa. We have 91 Apartments, 5 Cottages, 10 Homestays, 28 Resorts, 74 Rooms, 83 Villas<br></br>
<br></br>
<br></br>

</Text>



        </Box>
       

     
    </div>
  );
};
export default Availability;

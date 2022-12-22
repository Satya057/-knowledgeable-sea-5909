import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import styles from "./Availability.module.css";
import SearchByDates from "./SearchByDates";
import Corousel from "./Corousel";
import Aboutlocaion from "./Aboutlocaion";
import Faq from "./Faq";
import { useParams } from "react-router-dom";

// ------FAQ Array--------
const faq = [
  {
    quistion: "Can I get a holiday home with swimming pool in Goa?",
    answer:
      "Yes. We have close to 197 holiday homes with swimming pool in Goa. You can also choose a villa or bungalow with a swimming pool. Each vacation rental will have its own swimming pool policies & timings though. Make sure you talk to the property manager or the owner when you make a reservation.",
  },
  {
    quistion: "What are the most popular destinations in Goa?",
    answer:
      "Tripvillas has around 300 of vacation rentals in Goa. Some of the most popular destinations are Candolim (62 vacation rentals), Calangute (35 vacation rentals), Arpora (32 vacation rentals), Baga (13 vacation rentals), Benaulim (12 vacation rentals), Varca (11 vacation rentals), Morjim (10 vacation rentals), Anjuna (9 vacation rentals), Colva (9 vacation rentals), Sinquerim (9 vacation rentals).",
  },
  {
    quistion:
      "Can I get any accommodation in Goa if I am travelling with my family or a group of friends?",
    answer:
      "You will have to choose number of bedrooms depending on the group size. You can go for any of the 91 Apartments, 83 Villas. You can go for 46 1BHK, 56 2BHKS, 46 3BHKS, 24 4BHKS, 9 5BHKS holiday homes",
  },
  {
    quistion:
      " What are the different types of holiday homes I can get in Goa?",
    answer:
      "Tripvillas has different types of holiday homes you can choose from in Goa. We have 91 Apartments, 5 Cottages, 10 Homestays, 28 Resorts, 74 Rooms, 83 Villas",
  },
];

const Availability = () => {
  const [hotelData, setHotelData] = useState([]);
  const {id} = useParams()
  console.log(id);

  useEffect(() => {
    getData();
  }, []);

  // -------Fetch Hotels Data  -----
  const getData = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/results`);
    const data = res.data;
    setHotelData(data);
  };

  hotelData.map((el)=>{
    console.log(el.state_slug);
  })


  return (
    <div className={styles.availabilityMainDiv}>
      {/* ---------------------Top part Availability page------------------ */}

      <SearchByDates props={id}/>

      <Box className={styles.bottom_part_availability}>
        {/* -----------------------Homes Goa Corousel----------------------------------------- */}

        <Corousel 
          props={{ heading: `${id} Holiday Homes`, data: hotelData }} 
        />

        {/* -----------------------Top Rated Hotels Corousel----------------------------------------- */}

        <Corousel
          props={{ heading: `${id} Top Rated Hotels`, data: hotelData }}
        />

        {/* -----------------------About Location Section----------------------------------------- */}

        <Aboutlocaion />

        {/* -----------------------FAQ Section----------------------------------------- */}

        <Faq props={{ faq }} />
      </Box>
    </div>
  );
};
export default Availability;

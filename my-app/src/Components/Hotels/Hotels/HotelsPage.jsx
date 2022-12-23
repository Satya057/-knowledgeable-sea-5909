import { Box , HStack} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styles from "./HotelsPage.module.css";
import getData from "./FetchData";
import Sort from "./Sort";
import Filter from "./Filter";
import HotelCard from "./HotelCard";

const HotelsPage = () => {
  const [hotelsData, setHotelsData] = useState([]);
  const [bedRoom, setBedRoom] = useState(0);
  const [bathroom, setBathroom] = useState(0);
  const [sort, setSort] = useState("");

  useEffect(() => {
    getData({ sort, bedRoom, bathroom })
      .then((res) => {
        setHotelsData(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [sort]);

// Sorting Function
  const handleSort = (param) => {
    setSort(param);
  };

// Filter Function
  const handleFilter = () => {
    getData({ sort, bedRoom, bathroom }).then((res) => {
      setHotelsData(res);
    });
  };

  
  const onChangeBedroom = (e) => {
    setBedRoom(Number(e.target.value));
  };

  const onChangeBathroom = (e) => {
    setBathroom(Number(e.target.value));
  };



  return (
    <Box w={["100vw", "90vw"]} className={styles.main_box}>

      {/* --Filter And Sorting-Start*/}
      <Box display={"flex"} justifyContent="space-between">

        {/* --Sending 3 functions as a props in Filter.jsx file and execute from there for Filter Function  */}
        <Filter
          handleFilter={handleFilter}
          onChangeBathroom={onChangeBathroom}
          onChangeBedroom={onChangeBedroom}
        />

        {/* --Sending handleSort function as a props in Sort.jsx file and execute from there  */}
        <Sort handleSort={handleSort} />
      </Box>

      {/* --Filter And Sorting-End */}

      <HStack marginTop="10px" border="1px solid grey"></HStack>    
       
       {/*--All hotel card map sending HotelsData as a props */}
      <HotelCard hotelsData={hotelsData}/>
      
    </Box>
  );
};

export default HotelsPage;

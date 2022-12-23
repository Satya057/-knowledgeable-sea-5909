import { Box, Button, Container, Heading, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./SearchByDates.module.css";

const SearchByDates = ({props}) => {
  console.log(props);
  return (
    <div className={styles.search_by_dates_container}>
      <h1 className={styles.main_heading} >       
        {props} Vacation Rental
      </h1>

      <h2 className={styles.second_main_heading}>
        We have 300 Vacation Rentals - search by dates for availability
      </h2>
      
      <Box className={styles.inputs_box}>
        {/* ----Input Boxes for Check-In, Check-out and Guests Count ----  */}
        <Input
          className={styles.input_tag}
          type="date"
          placeholder="Check In"
        />
        <Input
          className={styles.input_tag}
          type="date"
          placeholder="Check Out"
        />
        <Input
          className={styles.input_tag}
          placeholder="Select Guests"
        />

        {/* ----Button for redirect it to Hotels page where i can see all the hotels for perticular state-- */}
        <Link to="/search">
          {" "}
          <Button className={styles.search_by_dates_button} bg="#1e87f0">
            SEARCH
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default SearchByDates;

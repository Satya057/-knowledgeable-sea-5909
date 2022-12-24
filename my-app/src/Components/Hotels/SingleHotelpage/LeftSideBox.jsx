import { Box, Heading, HStack, Img, Text } from "@chakra-ui/react";
import styles from "./LeftSideBox.module.css";

// Distructuring props (hotelData) which is comming from HotelPage(Main page)
const LeftSideBox = ({ hotelData }) => {
  return (
    <Box className={styles.left_main_box} w={["100%", "100%", "75vw"]}>
      {/* Flow of page from home to hotel id  */}
      <Text className={styles.flow_from_home}>
        Home/{hotelData.country}/
        {hotelData.state_slug === "goa-11" ? "Goa" : "Goa"}/{hotelData.city}/#
        {hotelData.id}
      </Text>
      <HStack className={styles.left_box_line}></HStack>

      <Box
        className={styles.left_image_and_title_box}
        flexDirection={["column", "column", "inherit"]}
      >
        {/* Hotels images */}
        <Box w={["100%", "100%", "55%"]} className={styles.left_image_box}>
          <Img
            src={hotelData.images_large[0] ? hotelData.images_large[0] : ""}
          ></Img>
          <HStack className={styles.left_small_image_hstack}>
            <Img
              className={styles.left_small_image}
              src={hotelData.images_large[1]}
            ></Img>
            <Img
              className={styles.left_small_image}
              src={hotelData.images_large[2]}
            ></Img>
          </HStack>
        </Box>

        {/* Hotel Title description Key Ammenities */}
        <Box w={["100%", "100%", "45%"]} className={styles.right_title_box}>
          <Heading fontWeight="medium" fontSize="24px">
            {hotelData.title}
          </Heading>

          <Text className={styles.right_side_desc}>
            {hotelData.city},{" "}
            {hotelData.state_slug == "goa-11" ? "Goa" : hotelData.state_slug},{" "}
            {hotelData.country} | {hotelData.city}
          </Text>

          <HStack className={styles.right_side_line}></HStack>

          <Box className={styles.props_tag_box}>
            {hotelData.prop_tags.map((el) => {
              return <Box className={styles.prop_tag_box_single}>{el}</Box>;
            })}
          </Box>
        </Box>
      </Box>

      <HStack className={styles.left_box_line}></HStack>

      {/* Hotel overview and type of property */}
      <Box display={["","flex"]} >
        <Box className={styles.left_box_overview_section_left_box} w={["100%","50%"]}>
          <Box className={styles.left_box_overview_section_left_box_single_box}>
            {hotelData.property_type}
          </Box>

          <HStack width={"80%"} margin="auto">
            <Box
              className={styles.left_box_overview_section_left_box_single_box}
            >
              {hotelData.number_of_bathrooms} <br/> Bathrooms
            </Box>

            <Box
              className={styles.left_box_overview_section_left_box_single_box}
            >
              {hotelData.number_of_rooms} <br/> Bedrooms
            </Box>
          </HStack>

          <Box className={styles.left_box_overview_section_left_box_single_box}>
            {hotelData.occupancy} Max Guests
          </Box>
        </Box>

        <Box className={styles.left_box_overview_section_right_box} w={["100%","50%"]}>
          <Text fontSize="12px" fontWeight={"medium"}>
            Overview:-
            <br />
            <br />
            Located on a quiet hilltop, away from the hustle and bustle of the
            tourist areas, yet close enough to enjoy the trimmings of beaches,
            shopping, tours, restaurants etc. It is a 4 bed villa, all the rooms
            air conditioned with ceiling fans and en-suite bathrooms with
            showers. A fully functional kitchen with kettle, gas hob, fridge
            freezer, utensils and crockery and cutlery.
            <br></br>
            The villa has great views of the Candolim Valley and the Arabian sea
            from the roof top terrace and large window of the Master bedroom.
            There is also a 6 place dining table and a large lounge area to
            relax in. There is also a large basement which in the near future
            will have a pool/billiards table. Bed linen and towels are provided.
            <br></br>
            There are numerous excellent restaurants, bars, supermarkets and
            shops offering a variety of goods, cuisines, curios and services.
            From massages, trinkets, exotic teas, handicrafts, to day trips and
            tours to various tourist attractions in and around Goa, all within
            walking distance.
            <br></br>
            The villa is only an hours drive from Dabolim international airport
            and just 14 km from the state capital Panjim.
            <br></br>
            Try out the public transportation in the form of a bus ride to
            Panjim like the locals, or alternatively rent a bike for two or a
            car.
          </Text>
        </Box>
      </Box>

      <HStack className={styles.left_box_line}></HStack>
      {/* Key Amenities Section  */}
      <Heading fontSize="24px" marginTop="20px">
        Key Amenities
      </Heading>

      <Box className={styles.props_tag_box}>
        {hotelData.prop_tags.map((el) => {
          return <Box className={styles.prop_tag_box_single}>{el}</Box>;
        })}
      </Box>
    </Box>
  );
};

export default LeftSideBox;

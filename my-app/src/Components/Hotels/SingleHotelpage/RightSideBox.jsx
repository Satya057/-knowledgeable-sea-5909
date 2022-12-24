import { Box, Button, Heading, Input, Text } from "@chakra-ui/react"
import styles from "./RightSideBox.module.css"

// Distructuring props (isAuth,hotelData) which is comming from HotelPage(Main page)
const RightSideBox=({hotelData,isAuth})=>{

  return (
    <Box className={styles.right_side_main_box}
        position={["-moz-initial","-moz-initial","relative"]}
        w={["100%","100%","25vw"]}
      >
          <Text className={styles.right_side_text}>Staring</Text>
          <Heading>₹{hotelData.starting_price_in_usd}.00</Heading>
          <Text  marginLeft={"130px"} color={"grey"} fontSize={"10px"}>Per Night</Text>
          <Input marginTop={"10px"} placeholder="Check In" borderRadius={"0"} borderColor="grey"></Input>
          <Input marginTop={"10px"} placeholder="Check Out" borderRadius={"0"} borderColor="grey" ></Input>
          <Input marginTop={"10px"} placeholder="Guest" borderRadius={"0"} borderColor="grey"></Input>
          <Button className={styles.right_side_button} disabled={!isAuth} backgroundColor="#4780b8"  borderRadius={"0"}>REQUIST TO CHECK</Button>
      </Box>
  )
}

export default RightSideBox
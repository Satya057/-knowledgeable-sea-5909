import { Box, Heading, Img, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const HotelCard = ({ hotelsData }) => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Map Hotels data and Render Hotels card in to UI */}
      {hotelsData.map((el) => {
        if (el.state_slug == "goa-11") {
          return (
            // Responsive Hotels Card Using Chakra
            <Box
              onClick={() => {
                //If user click on Hotel card then it will redirect to single Hotel page
                navigate(`/search/${el.id}`);             
              }}
              w={"100%"}
              display="flex"
              marginTop="40px"
              marginBottom={"15px"}
              shadow="md"
            >
              <Box w={["50%", "40%", "35%", "30%"]}>
                <Img src={el.images_large[0]}></Img>
              </Box>

              <Box w={"60%"} p={["5px", "7px", "10px"]}>
                <Heading fontSize={["7px", "12px", "18px", "20px", "22px"]}>
                  {el.title}
                </Heading>
                <Text
                  marginTop={["1px", "2px", "3px", "5px"]}
                  color={"blue.400"}
                  fontSize={["7px", "10px", "14px", "18px", "20px"]}
                >
                  {el.city}, {el.state_slug == "goa-11" ? "Goa" : "Goa"},
                  {el.country}
                </Text>

                <Box
                  marginTop={["2px", "4px", "6px", "8px", "10px"]}
                  display={"flex"}
                  gap="10px"
                  flexWrap={"wrap"}
                >
                  {el.prop_tags.map((el) => {
                    return (
                      <Box
                        fontSize={["5px", "6px", "8px", "10px", "12px"]}
                        border={"1px solid grey"}
                        borderRadius={"10%"}
                        p={["1px", "2px", "4px", "5px"]}
                      >
                        {el}
                      </Box>
                    );
                  })}
                </Box>

                <Box display={"flex"} gap="2px">
                  <Text
                    fontWeight="bold"
                    marginTop={["8px", "15px", "20px", "30px"]}
                    fontSize={["7px", "10px", "14px", "16px", "18px"]}
                  >
                    Rs {el.starting_price_in_usd}.00{" "}
                  </Text>

                  <Text
                    marginTop={["8px", "15px", "20px", "30px"]}
                    fontSize={["3px", "4px", "6px", "8px", "10px"]}
                    color="grey"
                  >
                    Per Night{" "}
                  </Text>
                </Box>
              </Box>
            </Box>
          );
        }
      })}
    </div>
  );
};

export default HotelCard;

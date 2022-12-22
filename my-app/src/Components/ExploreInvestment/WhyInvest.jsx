import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

function WhyInvest() {
  // Static page explaining about how to invest 
  return (
    <Box maxW="80vw" margin="auto">
      <Heading>Why Invest In A Holiday Home Through Tripvillas?</Heading>
      <Text>
        Tripvillas is the leading specialist in Resort Real estate investments.
        We are strong believers that vacation homes offer both strong
        appreciation and significant yield. Please see below some options or
        feel free to write to us on passiveincome@tripvillas.com to get further
        information on currently open opportunities.
      </Text>
      <Divider my="20px" />
      <Flex
        gap="50px"
        justifyContent="space-evenly"
        textAlign="center"
        flexDir={{ lg: "row", md: "column", sm: "column", base: "column" }}
      >
        <Box>
          <Image
            m="auto"
            w="60px"
            mb="15px"
            src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/growth.svg"
          />
          <Text fontWeight="bold">Low Cost High Appreciation</Text>
          <Text>
            Vacation Homes start at $30,000 - (~20Lakhs Indian Rupees). Given
            that these are upcoming towns or well established holiday
            destinations they offer significant potential for capital
            appreciation.
          </Text>
        </Box>
        <Box>
          <Image
            m="auto"
            w="60px"
            mb="15px"
            src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/maids.svg"
          />
          <Text fontWeight="bold">Professionally Managed</Text>
          <Text>
            All Communities have highly skilled on-site teams to ensure the
            community is well managed, your investment is easy to monitor and
            the asset is performing.
          </Text>
        </Box>
        <Box>
          <Image
            m="auto"
            w="60px"
            mb="15px"
            src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/give-money.svg"
          />
          <Text fontWeight="bold">Guaranteed To Produce Income</Text>
          <Text>
            Primarily through short term rentals. We generate bookings through
            75+ of the worlds largest online travel agents.
          </Text>
        </Box>
        <Box>
          <Image
            m="auto"
            w="60px"
            mb="15px"
            src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/shield.svg"
          />
          <Text fontWeight="bold">Safe And Secure</Text>
          <Text>
            All Opportunities are in Gated Communities with top quality security
            and detailed documented agreements and governance processes.
          </Text>
        </Box>
      </Flex>
      <Divider my="20px" />
    </Box>
  );
}

export default WhyInvest;

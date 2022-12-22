import { Box, Flex, Image, Text } from "@chakra-ui/react";

function Whatis() {
  //  static page
  return (
    <>
      <Flex
        maxW="80vw"
        m="auto"
        my="50px"
        gap="50px"
        flexDir={{ lg: "row", md: "column", sm: "column", base: "column" }}
      >
        <Box
          p="10px"
          boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
        >
          <Image
            m="auto"
            w="60px"
            mb="15px"
            src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/irr.svg"
          />
          <Text fontWeight="bold">What Is IRR?</Text>
          <Text>
            The total return from the property on an annual basis considering
            the property is sold after 7 years of the initial investment - this
            captures the total income to you from both rentals and appreciation
            of the property.
          </Text>
        </Box>
        <Box
          p="10px"
          boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
        >
          <Image
            m="auto"
            w="60px"
            mb="15px"
            src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/interest.svg"
          />
          <Text fontWeight="bold">What Is Yield?</Text>
          <Text>
            The rental income generated from the property as a %age of its total
            purchase price inclusive of Interior Costs, Registration and Stamp
            Duties after deducting all Operating costs, Commissions and Home
            Owner Association Fees.
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default Whatis;

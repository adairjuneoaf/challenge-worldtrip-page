// Main Dependencies
import React from "react";

// Chakra UI Dependencies
import { Box, Flex, Heading, Image as ChakraImage, VStack, Text } from "@chakra-ui/react";

const CityCardComponent: React.FC = () => {
  return (
    <React.Fragment>
      <Flex maxWidth={"256px"} height={"auto"} width={"100%"} flexDirection={"column"}>
        <ChakraImage src={"/assets/images/london.jpg"} width={"100%"} height={"auto"} />
        <Box
          padding={"6"}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          borderBottom={"1px"}
          borderLeft={"1px"}
          borderRight={"1px"}
          borderBottomRadius={"4px"}
          borderStyle={"solid"}
          borderColor={"yellow.500"}
        >
          <VStack spacing={"2"} flex={"10"} alignItems={"flex-start"}>
            <Heading fontFamily={"Barlow"} fontSize={"20"} fontWeight={"600"}>
              Londres
            </Heading>
            <Text fontFamily={"Barlow"} fontSize={"16"} fontWeight={"500"}>
              Reino Unido
            </Text>
          </VStack>
          <ChakraImage
            flex={"1"}
            src={"/assets/images/united_kingdom.png"}
            width={"24px"}
            height={"24px"}
            borderRadius={"12px"}
          />
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default CityCardComponent;

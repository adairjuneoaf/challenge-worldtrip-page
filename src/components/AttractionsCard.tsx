// Main Dependencies
import React from "react";

// Chakra UI Dependencies
import { Flex, Heading, Image as ChakraImage } from "@chakra-ui/react";

// Typings[TypeScript]
type AttractionsCardTypeProps = {
  icon: string;
  title: string;
};

const AttractionsCardComponent: React.FC<AttractionsCardTypeProps> = ({ icon, title }) => {
  return (
    <React.Fragment>
      <Flex
        width={"100%"}
        height={"100%"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"5"}
        maxWidth={"60"}
        maxHeight={"60"}
      >
        <ChakraImage src={`/assets/svg/${icon}.svg`} width={"80px"} height={"auto"} />
        <Heading fontWeight={"600"} fontSize={"20"}>
          {title}
        </Heading>
      </Flex>
    </React.Fragment>
  );
};

export default AttractionsCardComponent;

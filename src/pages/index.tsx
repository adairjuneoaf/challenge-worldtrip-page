// Main Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// Chakra UI Dependencies
import { Box, Divider, Flex, Heading, Image as ChakraImage, Text } from "@chakra-ui/react";
import AttractionsCardComponent from "../components/AttractionsCard";
import SlideContinentsComponent from "../components/SlideContinents";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>worldtrip | O seu guia de viagens!</title>
      </Head>
      <Flex flexDirection={"column"} width={"100%"} height={"auto"} margin={"auto"}>
        <Box
          width={"100%"}
          height={"336px"}
          backgroundImage={"/assets/images/head_background.jpg"}
          backgroundRepeat={"no-repeat"}
          backgroundSize={"cover"}
        >
          <Flex
            width={"100%"}
            height={"100%"}
            margin={"auto"}
            maxWidth={"1640px"}
            position={"relative"}
            alignItems={"flex-start"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Heading as={"h2"} fontWeight={"500"} fontSize={"3xl"} color={"white.100"} lineHeight={"tall"}>
              5 Continentes,
              <br />
              infinitas possibilidades.
            </Heading>
            <Text as={"p"} fontSize={"medium"} fontWeight={"400"} color={"white.100"} marginTop={"4"}>
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
            <ChakraImage src="/assets/svg/airplane.svg" position={"absolute"} bottom={"-36px"} right={"0"} />
          </Flex>
        </Box>

        <Box maxWidth={"1640px"} width={"100%"} height={"auto"} margin={"auto"}>
          <Flex
            marginY={"20"}
            flexDirection={"row"}
            justifyContent={"space-around"}
            alignItems={"center"}
            gap={"16"}
            wrap={"wrap"}
          >
            <AttractionsCardComponent title="Vida Noturna" icon="cocktail" />
            <AttractionsCardComponent title="Praia" icon="surf" />
            <AttractionsCardComponent title="Moderno" icon="museum" />
            <AttractionsCardComponent title="Clássico" icon="building" />
            <AttractionsCardComponent title="e mais..." icon="earth" />
          </Flex>
        </Box>

        <Divider width={"32"} height={"3"} color={"blue.200"} margin={"auto"} marginBottom={"16"} />

        <Box maxWidth={"1640px"} width={"100%"} height={"auto"} margin={"auto"}>
          <Heading fontWeight={"500"} fontSize={"36"} textAlign={"center"}>
            Vamos nessa? Então escolha seu continente
          </Heading>
        </Box>

        <Box width={"100%"} marginY={"10"}>
          <SlideContinentsComponent />
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default Home;

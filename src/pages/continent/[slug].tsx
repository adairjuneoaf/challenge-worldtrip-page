// Main Dependencies
import React, { useState } from "react";
import Head from "next/head";
import { NextPage } from "next";

// Styled Dependencies
import { FiInfo } from "react-icons/fi";

// Chakra UI Dependencies
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
} from "@chakra-ui/react";
import CityCardComponent from "../../components/CityCard";

const PageContinent: NextPage = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <React.Fragment>
      <Head>
        <title>continent.name | worldtrip</title>
      </Head>
      <Flex flexDirection={"column"} width={"100%"} height={"auto"} margin={"auto"}>
        <Box
          width={"100%"}
          height={"500px"}
          backgroundImage={"/assets/images/europe_continent.jpg"}
          backgroundRepeat={"no-repeat"}
          backgroundPosition={"center"}
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
            justifyContent={"flex-end"}
          >
            <Heading
              as={"h2"}
              fontWeight={"600"}
              fontSize={"48"}
              color={"white.100"}
              lineHeight={"tall"}
              marginBottom={"15"}
            >
              Europa
            </Heading>
          </Flex>
        </Box>
        <Box width={"100%"} height={"100%"} margin={"auto"} maxWidth={"1640px"}>
          <Flex flexDirection={"row"} justifyContent={"center"} alignItems={"center"} gap={"24"}>
            <Box flex={"1"} marginY={"10"}>
              <Text fontWeight={"400"} fontSize={"24px"} lineHeight={"tall"} textAlign={"justify"}>
                A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da
                Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio
                Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
              </Text>
            </Box>
            <HStack flex={"1"} width={"100%"} justifyContent="space-around" alignItems={"center"}>
              <VStack spacing={"0"} fontWeight={"600"}>
                <Heading color={"yellow.500"}>50</Heading>
                <Text>países</Text>
              </VStack>
              <VStack spacing={"0"} fontWeight={"600"}>
                <Heading color={"yellow.500"}>60</Heading>
                <Text>idiomas</Text>
              </VStack>
              <VStack spacing={"0"} fontWeight={"600"}>
                <Heading color={"yellow.500"}>27</Heading>
                <Popover isOpen={popoverOpen}>
                  <PopoverTrigger>
                    <Text display={"flex"} alignItems={"center"} gap={"1"}>
                      cidades +100
                      <Icon
                        as={FiInfo}
                        fontSize={16}
                        color={"gray.200"}
                        opacity={"0.5"}
                        cursor={"pointer"}
                        _hover={{ opacity: "1" }}
                        onClick={() => {
                          setPopoverOpen(!popoverOpen);
                        }}
                      />
                    </Text>
                  </PopoverTrigger>
                  <PopoverContent background={"white.100"} borderColor={"gray.100"}>
                    <PopoverCloseButton
                      onClick={() => {
                        setPopoverOpen(false);
                      }}
                    />
                    <PopoverHeader borderColor={"gray.100"} color={"blue.200"} fontSize={"16"}>
                      Mais cidades
                    </PopoverHeader>
                    <PopoverBody color={"blue.200"} fontSize={"14"}>
                      Cidades Cidades Cidades Cidades Cidades Cidades Cidades Cidades Cidades Cidades Cidades Cidades
                      Cidades Cidades Cidades Cidades Cidades Cidades Cidades Cidades Cidades Cidades Cidades Cidades
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </VStack>
            </HStack>
          </Flex>

          <Box marginY={"12"} width={"100%"} height={"auto"}>
            <Heading fontWeight={"500"}>Cidades +100</Heading>

            <Flex marginTop={"10"} gap={"16"} wrap={"wrap"} justifyContent={"flex-start"}>
              <CityCardComponent />
              <CityCardComponent />
              <CityCardComponent />
              <CityCardComponent />
              <CityCardComponent />
              <CityCardComponent />
              <CityCardComponent />
            </Flex>
          </Box>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default PageContinent;

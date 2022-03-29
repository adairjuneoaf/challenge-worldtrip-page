// Main Dependencies
import React from "react";
import Link from "next/link";

// Other Dependencies
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

// Styled Dependencies
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Chakra UI Dependencies
import { Box, Flex, Heading, Image as ChakraImage, Text } from "@chakra-ui/react";

const SlideContinentsComponent: React.FC = () => {
  return (
    <React.Fragment>
      <Box
        maxWidth={"1740px"}
        height={"550"}
        width={"100%"}
        margin={"auto"}
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Swiper
          navigation={true}
          pagination={{
            clickable: false,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 4500 }} // Autoplay com 4.5 Segundos de delay.
          className="mySwiper"
        >
          <SwiperSlide>
            <ChakraImage src={"/assets/images/europe_continent.jpg"} />
            <Flex position={"absolute"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
              <Link href={"/continent/europe"} passHref>
                <Heading
                  width={"fit-content"}
                  height={"auto"}
                  fontWeight={"700"}
                  fontSize={"48"}
                  color={"white.100"}
                  cursor={"pointer"}
                  _hover={{ color: "yellow.500" }}
                >
                  Europa
                </Heading>
              </Link>
              <Text fontWeight={"700"} fontSize={"24"} color={"white.100"}>
                O continente mais antigo.
              </Text>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <ChakraImage src={"/assets/images/north_america_continent.jpg"} />
            <Flex position={"absolute"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
              <Link href={"/continent/north-america"} passHref>
                <Heading
                  width={"fit-content"}
                  height={"auto"}
                  fontWeight={"700"}
                  fontSize={"48"}
                  color={"white.100"}
                  cursor={"pointer"}
                  _hover={{ color: "yellow.500" }}
                >
                  América
                </Heading>
              </Link>
              <Text fontWeight={"700"} fontSize={"24"} color={"white.100"}>
                Viva algo inesquecível.
              </Text>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <ChakraImage src={"/assets/images/oceania_continent.jpg"} />
            <Flex position={"absolute"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
              <Link href={"/continent/oceania"} passHref>
                <Heading
                  width={"fit-content"}
                  height={"auto"}
                  fontWeight={"700"}
                  fontSize={"48"}
                  color={"white.100"}
                  cursor={"pointer"}
                  _hover={{ color: "yellow.500" }}
                >
                  Oceania
                </Heading>
              </Link>
              <Text fontWeight={"700"} fontSize={"24"} color={"white.100"}>
                Diversidade única e belas paisagens.
              </Text>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <ChakraImage src={"/assets/images/africa_continent.jpg"} />
            <Flex position={"absolute"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
              <Link href={"/continent/africa"} passHref>
                <Heading
                  width={"fit-content"}
                  height={"auto"}
                  fontWeight={"700"}
                  fontSize={"48"}
                  color={"white.100"}
                  cursor={"pointer"}
                  _hover={{ color: "yellow.500" }}
                >
                  África
                </Heading>
              </Link>
              <Text fontWeight={"700"} fontSize={"24"} color={"white.100"}>
                Explore cada centímetro da Savana africana e conheça a beleza de seu povo.
              </Text>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <ChakraImage src={"/assets/images/asia_continent.jpg"} />
            <Flex position={"absolute"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
              <Link href={"/continent/asia"} passHref>
                <Heading
                  width={"fit-content"}
                  height={"auto"}
                  fontWeight={"700"}
                  fontSize={"48"}
                  color={"white.100"}
                  cursor={"pointer"}
                  _hover={{ color: "yellow.500" }}
                >
                  Ásia
                </Heading>
              </Link>
              <Text fontWeight={"700"} fontSize={"24"} color={"white.100"}>
                Sabedoria, paciência, criatividade e inteligência em um só lugar.
              </Text>
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Box>
    </React.Fragment>
  );
};

export default SlideContinentsComponent;

// Main Dependencies
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Styled Dependencies
import { FiChevronLeft } from "react-icons/fi";

// Chakra UI Dependencies
import { Box, Center, Flex, Icon, Image as ChakraImage, Link as ChakraLink } from "@chakra-ui/react";

const HeaderComponent: React.FC = () => {
  const { asPath } = useRouter();

  return (
    <React.Fragment>
      <Flex
        width={"100%"}
        height={"auto"}
        margin={"auto"}
        maxWidth={"1640px"}
        paddingY={"4"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {asPath.includes("continent") && (
          <Link href={"/"} passHref>
            <ChakraLink
              as={"a"}
              flex={"1"}
              maxWidth="32px"
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              title="Voltar a página inicial"
            >
              <Icon as={FiChevronLeft} fontSize={"24"} />
            </ChakraLink>
          </Link>
        )}

        <Box width={"160"} flex={"10"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <ChakraImage src="/assets/svg/logo.svg" />
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default HeaderComponent;

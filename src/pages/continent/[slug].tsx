// Main Dependencies
import React from "react";
import Head from "next/head";
import { NextPage } from "next";

// Chakra UI Dependencies
import { Flex, Heading } from "@chakra-ui/react";

const PageContinent: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>continent.name | worldtrip</title>
      </Head>
      <Flex>
        <Heading>page of continent.name</Heading>
      </Flex>
    </React.Fragment>
  );
};

export default PageContinent;

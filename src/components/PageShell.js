import React from "react";
import { Flex } from "@chakra-ui/react";

import Navbar from "./Navbar";

const PageShell = ({ children }) => {
  return (
    <Flex flexDirection="column" backgroundColor="gray.50" h="100vh">
      {/* NavBar */}
      <Navbar />

      {/* Content */}
      <Flex
        flexDirection="column"
        maxWidth="1500px"
        w="full"
        alignItems="center"
        p={4}
        px={8}
        ml="auto"
        mr="auto"
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default PageShell;

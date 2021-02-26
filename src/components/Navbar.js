import { Flex, Stack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import LogoIcon from "./LogoIcon";

const Navbar = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      py={4}
      px={12}
      w="full"
      backgroundColor="white"
      borderTop="5px solid #0AF5F4"
    >
      <Stack spacing={8} isInline alignItems="center" justifyContent="center">
        <LogoIcon />
        <Link as={RouterLink} to="/">
          Exercises
        </Link>
        <Link as={RouterLink} to="/create">
          Create Exercise Log
        </Link>
        <Link as={RouterLink} to="/user">
          Create User
        </Link>
      </Stack>
      <Stack spacing={8} isInline alignItems="center" justifyContent="center">
        <Link>Account</Link>
      </Stack>
    </Flex>
  );
};

export default Navbar;

import {
  Box,
  Flex,
  Link,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  useColorMode,
  useColorModeValue,
  Spacer,
  AbsoluteCenter,
  Center,
} from "@chakra-ui/react";
import { SearchIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
    <Box
    m={0}
    // height={20}
    bgColor="blue.100"
    >
      <Flex align="center">
      <Button
        ml={4}
        colorScheme="teal"
        size="sm"
        as="a"
        href="/components/login/login"
      >
        Login
      </Button>
      <Button
        ml={4}
        colorScheme="teal"
        size="sm"
        as="a"
        href="/components/Enquiry/Enquiry"
      >
        Enquiry
      </Button>
      </Flex>
      

      </Box>
    </>
  );
}

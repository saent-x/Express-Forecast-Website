import {
  Flex,
  Text,
  Stack,
  Divider,
  Center,
  Image,
  Spacer,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      direction="column"
      bg="red"
      w="100%"
      h={{ base: "auto", md: "vertical", lg: "vertical" }}
      mt="10px"
    >
      <Flex direction="row" wrap={{ base: "wrap" , md: "nowrap", lg: "nowrap"}}>
        <Stack spacing={3} padding="30px" wrap="wrap">
          <Text color="white" fontSize="25px" fontWeight="bolder">
            Our Story
          </Text>
          <Text fontSize="20px" fontWeight="thin" color="white">
            Join the fun and say good bye to just playing random numbers.
            Expressforecast offers refined forecast numbers through our super
            algorithm to help you win your favorite lotto games easily. Baba
            Ijebu, Golden chance, Lottomania, Ghana Lotto and many more
            lotteries from around the world are available for you 24/7.
          </Text>
        </Stack>
        <Divider
          orientation={{ base: "horizontal", md: "vertical", lg: "vertical" }}
          h={{ base: "0px", md: "400px", lg: "400px" }}
          w={{ base: "400px", md: "0px", lg: "0px" }}
          ml={{ base: "50px", md: "0px", lg: "0px" }}
          mr={{ base: "50px", md: "0px", lg: "0px" }}
          mt="50px"
          borderWidth="1px"
          borderColor="white"
        />
        <Stack spacing={3} padding="30px" wrap="wrap">
          <Text color="white" fontSize="25px" fontWeight="bolder">
            Our Story
          </Text>
          <Text fontSize="20px" fontWeight="thin" color="white">
            Join the fun and say good bye to just playing random numbers.
            Expressforecast offers refined forecast numbers through our super
            algorithm to help you win your favorite lotto games easily. Baba
            Ijebu, Golden chance, Lottomania, Ghana Lotto and many more
            lotteries from around the world are available for you 24/7.
          </Text>
        </Stack>
        <Divider
          orientation={{ base: "horizontal", md: "vertical", lg: "vertical" }}
          h={{ base: "0px", md: "400px", lg: "400px" }}
          w={{ base: "400px", md: "0px", lg: "0px" }}
          ml={{ base: "50px", md: "0px", lg: "0px" }}
          mr={{ base: "50px", md: "0px", lg: "0px" }}
          mt="50px"
          borderWidth="0.5px"
          borderColor="white"
        />
        <Stack spacing={3} padding="30px" wrap="wrap">
          <Text color="white" fontSize="25px" fontWeight="bolder">
            Our Story
          </Text>
          <Text fontSize="20px" fontWeight="thin" color="white">
            Join the fun and say good bye to just playing random numbers.
            Expressforecast offers refined forecast numbers through our super
            algorithm to help you win your favorite lotto games easily. Baba
            Ijebu, Golden chance, Lottomania, Ghana Lotto and many more
            lotteries from around the world are available for you 24/7.
          </Text>
        </Stack>
      </Flex>

      <Center>
        <Stack wrap="wrap">
          <Text
            color="white"
            fontSize={{ base: "25px", md: "30px", lg: "30px" }}
            marginTop="10px"
            fontWeight="bolder"
          >
            Join Our Community
          </Text>
          <Flex direction="row" wrap="wrap">
            <Image src="../t.png" />
            <Spacer />
            <Image src="../I.png" />
            <Spacer />
            <Image src="../F.png" />
          </Flex>
        </Stack>
      </Center>

      <Flex justify="center" align="center" direction="row" mt="30px">
        <ul className="ulist2">
          <li style={{ marginLeft: "0px" }}>
            <a href="#" fontSize="30px">
              Terms {"&"} Conditions
            </a>
          </li>
          |
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          |
          <li>
            <a href="#">Site Map</a>
          </li>
          |
          <li>
            <a href="#">Disclaimer</a>
          </li>
          |
          <li>
            <a href="#">Customer Support</a>
          </li>
          |
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </Flex>
    </Flex>
  );
}

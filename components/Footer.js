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
    <Flex direction="column" bg="red" w="100%" h="720px" mt="10px">
      <Flex direction="row">
        <Stack spacing={3} padding="30px">
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
          orientation="vertical"
          h="400px"
          mt="50px"
          borderWidth="1px"
          borderColor="white"
        />
        <Stack spacing={3} padding="30px">
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
          orientation="vertical"
          h="400px"
          mt="50px"
          borderWidth="0.5px"
          borderColor="white"
        />
        <Stack spacing={3} padding="30px">
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
        <Stack>
          <Text
            color="white"
            fontSize="30px"
            marginTop="10px"
            fontWeight="bolder"
          >
            Join Our Community
          </Text>
          <Flex direction="row">
            <Image src="../t.png" />
            <Spacer />
            <Image src="../I.png" />
            <Spacer />
            <Image src="../F.png" />
          </Flex>
        </Stack>
      </Center>

      <Center mt="30px">
        <ul className="ulist2">
          <li>
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
      </Center>
    </Flex>
  );
}

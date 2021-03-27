import {
  Flex,
  Text,
  Stack,
  Divider,
  Center,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

const QUERY = gql`
  {
    footerHeadline1 {
      header
      content
    }
    footerHeadline2 {
      header
      content
    }
    footerHeadline3 {
      header
      content
    }
    socials {
      image {
        url
      }
    }
  }
`;

export default function Footer() {
  const { loading, error, data } = useQuery(QUERY);
  if (error) return "Error loading... contact Admin";
  if (loading) return <h1>...</h1>;

  return (
    <Flex
      direction="column"
      bg="red"
      w="100%"
      h={{ base: "auto", md: "vertical", lg: "vertical" }}
      mt="10px"
    >
      <Flex direction="row" wrap={{ base: "wrap", md: "nowrap", lg: "nowrap" }}>
        <Stack spacing={3} padding="30px" wrap="wrap">
          <Text color="white" fontSize="25px" fontWeight="bolder">
            {data.footerHeadline1.header}
          </Text>
          <Text fontSize="20px" fontWeight="thin" color="white">
            {data.footerHeadline1.content}
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
            {data.footerHeadline1.header}
          </Text>
          <Text fontSize="20px" fontWeight="thin" color="white">
            {data.footerHeadline1.content}
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
            {data.footerHeadline1.header}
          </Text>
          <Text fontSize="20px" fontWeight="thin" color="white">
            {data.footerHeadline1.content}
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
            <Spacer />
            {data.socials.map((x, i) => (
              <>
                <MotionImage
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  cursor="pointer"
                  src={`http://localhost:1337${x.image.url}`}
                />
                <Spacer />
              </>
            ))}
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

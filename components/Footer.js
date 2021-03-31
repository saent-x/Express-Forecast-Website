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
import Link from "next/link";

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
      link
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
          h={{ base: "0px", md: "300px", lg: "300px" }}
          w={{ base: "300px", md: "0px", lg: "0px" }}
          ml={{ base: "50px", md: "0px", lg: "0px" }}
          mr={{ base: "50px", md: "0px", lg: "0px" }}
          mt="50px"
          borderWidth="1px"
          borderColor="white"
        />
        <Stack spacing={3} padding="30px" wrap="wrap">
          <Text color="white" fontSize="25px" fontWeight="bolder">
            {data.footerHeadline2.header}
          </Text>
          <Text fontSize="20px" fontWeight="thin" color="white">
            {data.footerHeadline2.content}
          </Text>
        </Stack>
        <Divider
          orientation={{ base: "horizontal", md: "vertical", lg: "vertical" }}
          h={{ base: "0px", md: "300px", lg: "300px" }}
          w={{ base: "300px", md: "0px", lg: "0px" }}
          ml={{ base: "50px", md: "0px", lg: "0px" }}
          mr={{ base: "50px", md: "0px", lg: "0px" }}
          mt="50px"
          borderWidth="0.5px"
          borderColor="white"
        />
        <Stack spacing={3} padding="30px" wrap="wrap">
          <Text color="white" fontSize="25px" fontWeight="bolder">
            {data.footerHeadline3.header}
          </Text>
          <Text fontSize="20px" fontWeight="thin" color="white">
            {data.footerHeadline3.content}
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
          <Flex direction="row" wrap="wrap" align="center" justify="center">
            {data.socials.map((x, i) => (
              <div key={i}>
                <Link href={`${x.link}`}>
                  <MotionImage
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    cursor="pointer"
                    src={`${x.image.url}`}
                    m="10px"
                  />
                </Link>
              </div>
            ))}
          </Flex>
        </Stack>
      </Center>

      <Flex justify="center" align="center" direction="row" mt="30px" mb="10px">
        <ul className="ulist2">
          <li style={{ marginLeft: "0px" }}>
            <Link href="termsconditions">
              <a>Terms {"&"} Conditions</a>
            </Link>
          </li>
          |
          <li>
            <Link href="privacypolicy">
              <a>Privacy Policy</a>
            </Link>
          </li>
          |
          <li>
            <a href="#">Site Map</a>
          </li>
          |
          <li>
            <Link href="disclaimer">
              <a>Disclaimer</a>
            </Link>
          </li>
          |
          <li>
            <a href="#">Customer Support</a>
          </li>
          |
          <li>
            <Link href="faqs">
              <a>FAQS</a>
            </Link>{" "}
          </li>
        </ul>
      </Flex>
    </Flex>
  );
}

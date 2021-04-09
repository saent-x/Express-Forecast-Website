import {
  Flex,
  Image,
  Spacer,
  Center,
  Text,
  Stack,
  Divider,
  HStack,
} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import { motion } from "framer-motion";
import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useBreakpointValue } from "@chakra-ui/react";

const QUERY = gql`
  {
    slideShows {
      image {
        url
      }
      mobile{
        url
      }
    }
    primaryBanner{
    banner_background{
      url
    }
  }
  }
`;

const MotionImage = motion(Image);
const MotionText = motion(Text);

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Jumbotron() {
  const value = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg",
    sm: "sm",
  });

  const { loading, error, data } = useQuery(QUERY);
  if (error) return "Error loading... contact Admin";
  if (loading) return <h1>...</h1>;

  const view = (x) => {
    console.log(value);
    return value === "sm" ? `${x.mobile.url}` : `${x.image.url}`;
  }

  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      showDots={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div>
        <Flex
          direction="row"
          w="100%"
          wrap={{ base: "wrap", md: "nowrap", lg: "nowrap" }}
        >
          <Center
            mr={{ base: "0px", md: "5px", lg: "5px" }}
            mt={{ base: "0px", md: "10px", lg: "10px" }}
            boxShadow="sm"
            bg="red"
            w="100%"
            h="350px"
            borderRadius={{ base: "0px", md: "0px", lg: "56px", sm: "0px" }}
            backgroundImage={`url('${data.primaryBanner.banner_background.url}')`}
          >
            <Stack spacing={3} align="center">
              <Text
                padding="5px"
                backgroundColor="white"
                color="red"
                fontSize="3xl"
                fontWeight="bold"
              >
                GET BABA IJEBU
              </Text>
              <Text
                padding="5px"
                backgroundColor="white"
                color="red"
                fontSize="3xl"
                fontWeight="bold"
              >
                RESULTS
              </Text>

              <Text color="white" fontSize="3xl">
                Dial *966*000*59000#
              </Text>
            </Stack>
          </Center>
         
        </Flex>
      </div>
      <div>
         <Center
            ml={{ base: "0px", md: "5px", lg: "5px" }}
            mt={{ base: "0px", md: "10px", lg: "10px" }}
            boxShadow="sm"
            bg="white"
            w="100%"
            h="350px"
          >
            <Stack spacing={3} align="center">
              <Text
                p="5px"
                color="white"
                bg="red"
                fontSize="3xl"
                fontWeight="bold"
              >
                Know your lotto Terms
              </Text>
              <Divider borderColor="red" />
              <Flex>
                <HStack spacing={6}>
                  <Link href="/howtoplay#perming">
                    <a style={{ color: "red" }}>
                      <MotionText
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        cursor="pointer"
                        fontSize="xl"
                        color="red"
                      >
                        Perming
                      </MotionText>
                    </a>
                  </Link>

                  <Link href="/howtoplay#2sure">
                    <a style={{ color: "red" }}>
                      <MotionText
                        fontSize="xl"
                        color="red"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        cursor="pointer"
                      >
                        2Sure
                      </MotionText>
                    </a>
                  </Link>

                  <Link href="/howtoplay#against">
                    <a style={{ color: "red" }}>
                      <MotionText
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        cursor="pointer"
                        fontSize="xl"
                        color="red"
                      >
                        Against
                      </MotionText>
                    </a>
                  </Link>
                </HStack>
              </Flex>
              <Divider borderColor="red" />
              <HStack spacing={6}>
                <MotionImage
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  cursor="pointer"
                  src="../1.png"
                />
                <MotionImage
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  cursor="pointer"
                  src="../2.png"
                />
                <MotionImage
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  cursor="pointer"
                  src="../3.png"
                />
              </HStack>
            </Stack>
          </Center>
      </div>
      {data.slideShows.map((x, i) => (
        <Image key={i} src={view(x)} h="350px" w="100%" />
      ))}
    </Carousel>
  );
}

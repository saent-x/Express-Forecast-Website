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
  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      showDots={true}
      // autoPlay={true}
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
          wrap={{ base: "wrap", md: "nowrap", lg: "nowrap" }}
        >
          <Center
            mr={{ base: "0px", md: "5px", lg: "5px" }}
            mt={{ base: "0px", md: "10px", lg: "10px" }}
            bg="red"
            w="100%"
            h="350px"
            borderRadius={{ base: "0px", md: "0px", lg: "56px", sm: "0px" }}
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
          <Spacer />

          <Center
            ml={{ base: "0px", md: "5px", lg: "5px" }}
            mt={{ base: "0px", md: "10px", lg: "10px" }}
            borderColor="grey"
            borderWidth="1px"
            bg="white"
            w="100%"
            h="350px"
          >
            <Stack spacing={3} align="center">
              <Text p="5px" color="white" bg="red" fontSize="3xl" fontWeight="bold">
                Know your lotto Terms
              </Text>
              <Divider borderColor="red" />
              <Flex>
                <HStack spacing={6}>
                  <a href="#">
                    <Text fontSize="xl" color="red">
                      Perming
                    </Text>
                  </a>
                  <a href="#">
                    <Text fontSize="xl" color="red">
                      2Sure
                    </Text>
                  </a>
                  <a href="#">
                    <Text fontSize="xl" color="red">
                      Against
                    </Text>
                  </a>
                </HStack>
              </Flex>
              <Divider borderColor="red" />
              <HStack spacing={6}>
                <Image src="../1.png" />
                <Image src="../2.png" />
                <Image src="../3.png" />
              </HStack>
            </Stack>
          </Center>
        </Flex>
      </div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </Carousel>
  );
}

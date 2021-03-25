import {
  Flex,
  Image,
  Spacer,
  Center,
  Text,
  Stack,
  Divider,
  HStack,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import styles from "../styles/TimetableAndInfo.module.css";

export default function TimetableAndInfo() {
    const list = [
      {
        url1: "../1.png",
        url2: "../2.png",
        url3: "../3.png",
      },
    ];
  return (
    <Flex direction="row" marginTop="10px" wrap="wrap">
      <Center
        bg="white"
        w={{ base: "100%", md: "59%", lg: "59%" }}
        borderColor="black"
        borderWidth="1px"
        padding="25px"
      >
        <Stack spacing={3}>
          <Text color="red" fontSize="25px" fontWeight="bolder">
            Play Lotto Smarter using Expressforecast
          </Text>
          <Text fontSize="20px" fontWeight="thin">
            Tired of losing tickets everytime you play lotto or getting late
            lotto results? What about the stress of losing your precious ticket
            in the lead-up to a big draw? Well, why not opt for an SMS results
            and forecast instead? It is a more comfortable and easier way to
            reduce your risk of losing that ticket. Subscribe to Expressforecast
            today to win on the biggest and most lucrative lotteries in Nigeria,
            all from the comfort of your very own living room. Baba Ijebu,Golden
            chance Lotto, Ghana Lotto, Lottomania, are just some of the many
            massive draws on offer.
          </Text>
          <Center>
            <Center
              backgroundColor="grey"
              h="50px"
              width="300px"
              color="white"
              cursor="pointer"
              className={styles.btn}
            >
              <Text>MORE {"..."}</Text>
            </Center>
          </Center>
        </Stack>
      </Center>
      <Spacer />
      <Center
        borderColor="grey"
        borderWidth="1px"
        bg="white"
        w={{ base: "100%", md: "39%", lg: "39%" }}
        h="500px"
        borderColor="black"
        borderWidth="1px"
        padding="15px"
        paddingTop="0px"
      >
        <Table variant="simple" w="100%">
          <Thead backgroundColor="red">
            <Tr>
              <Th
                color="white"
                style={{ textTransform: "capitalize", fontWeight: "unset" }}
              >
                <Flex direction="column" align="center">
                  <Text
                    fontSize="2xl"
                    color="white"
                    fontWeight="bold !important"
                    marginBottom="10px"
                  >
                    View Timetable
                  </Text>
                  <Text
                    fontSize="xl"
                    color="white"
                    fontWeight="bold !important"
                  >
                    Select Operator
                  </Text>
                </Flex>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {list.map((x, i) => (
              <Tr key={i}>
                <Td>
                  <Flex direction="row" align="center">
                    <Image src={x.url1} />
                    <Spacer />
                    <Image src={x.url2} />
                    <Spacer />
                    <Image src={x.url3} />
                  </Flex>
                  <Flex direction="row" align="center">
                    <Image src={x.url1} />
                    <Spacer />
                    <Image src={x.url2} />
                    <Spacer />
                    <Image src={x.url3} />
                  </Flex>
                  <Flex direction="row" align="center">
                    <Image src={x.url1} />
                    <Spacer />
                    <Image src={x.url2} />
                    <Spacer />
                    <Image src={x.url3} />
                  </Flex>
                  <Flex direction="row" align="center">
                    <Image src={x.url1} />
                    <Spacer />
                    <Image src={x.url2} />
                    <Spacer />
                    <Image src={x.url3} />
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Center>
              <Center
                backgroundColor="red"
                h="50px"
                width="300px"
                color="white"
                cursor="pointer"
                className={styles.btn}
              >
                <Text>MORE ...</Text>
              </Center>
            </Center>
          </Tfoot>
        </Table>
      </Center>
    </Flex>
  );
}

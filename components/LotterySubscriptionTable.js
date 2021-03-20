import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Flex,
  Image,
  Text,
  Center,
} from "@chakra-ui/react";
import styles from "../styles/LotterySubscriptionTable.module.css";

export default function LotterySuscriptionTable() {
  const list = [
    {
      url: "../1.png",
      text: "GET BABA IJEBU RESULTS",
      code: "Dial *Bankcode*000*59000#",
    },
  ];

  const fullList = [];

  const showFullList = () => {};

  return (
    <Table variant="simple" marginTop="10px">
      <Thead backgroundColor="red">
        <Tr>
          <Th color="white">LOTTERY</Th>
          <Th color="white">SUBSCRIPTION CODE</Th>
        </Tr>
      </Thead>
      <Tbody>
        {list.map((x, i) => (
          <Tr key={i}>
            <Td>
              <Flex direction="row" align="center">
                <Image src={x.url} />
                <Text
                  marginLeft="15px"
                  fontSize="xl"
                  color="red"
                  fontWeight="bold"
                >
                  {x.text}
                </Text>
              </Flex>
            </Td>
            <Td>
              <Text
                marginLeft="15px"
                fontSize="xl"
                color="red"
                fontWeight="bold"
              >
                {x.code}
              </Text>
            </Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot>
        <Center
          backgroundColor="grey"
          h="50px"
          width="300px"
          color="white"
                  cursor="pointer"
                  className={styles.btn}
        >
          <Text>CLICK HERE FOR MORE CODES {">>"}</Text>
        </Center>
      </Tfoot>
    </Table>
  );
}

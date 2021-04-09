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
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const QUERY = gql`
  {
    lotterySubscriptionCodes {
      lottery
      logo {
        url
      }
      subscription_code
    }
  }
`;

export default function LotterySuscriptionTable() {
  const { loading, error, data } = useQuery(QUERY);
  if (error) return "Error loading... contact Admin";
  if (loading) return <h1>...</h1>;

  const list = data.lotterySubscriptionCodes;

  return (
    <div style={{ overflowX: "auto" }}>
      <Table variant="simple" marginTop="10px" bg="white">
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
                  <Image src={`${x.logo.url}`} />
                  <Text
                    marginLeft="15px"
                  fontSize={{base: "xl", md: "xl", lg: "lg", sm: "sm"}}
                    color="red"
                    fontWeight="bold"
                  >
                    {x.lottery}
                  </Text>
                </Flex>
              </Td>
              <Td>
                <Text
                  marginLeft="15px"
                  fontSize={{base: "xl", md: "xl", lg: "lg", sm: "sm"}}
                  color="red"
                  fontWeight="bold"
                >
                  {x.subscription_code}
                </Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          {/* <Center
            backgroundColor="grey"
            h="50px"
            width="300px"
            color="white"
            cursor="pointer"
            className={styles.btn}
          >
            <Text>CLICK HERE FOR MORE CODES {">>"}</Text>
          </Center> */}
        </Tfoot>
      </Table>
    </div>
  );
}

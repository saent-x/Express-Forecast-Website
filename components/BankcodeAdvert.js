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
} from "@chakra-ui/react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const QUERY = gql`
  {
    bankCodes {
      code
    }
    advertGif {
      Advert {
        url
      }
    }
  }
`;

export default function BankcodeAdvert() {
  const { loading, error, data } = useQuery(QUERY);
  if (error) return "Error loading... contact Admin";
  if (loading) return <h1>...</h1>;

  const codeList = data.bankCodes;
  return (
    <Flex direction="row" marginTop="10px" wrap="wrap">
      <Box bg="red" w={{ base: "100%", md: "59%", lg: "59%" }} h="316.88px">
        <Stack spacing={3}>
          <Flex direction="row">
            <Center
              bg="white"
              h="50px"
              w={{ base: "0px", md: "60%", lg: "60%" }}
              justifySelf="flex-start"
            ></Center>
            <Center
              bg="red"
              h="50px"
              w={{ base: "100%", md: "40%", lg: "40%" }}
            >
              <Text
                p="5px"
                bg="white"
                fontWeight="bold"
                fontSize="lg"
                color="red"
              >
                KNOW YOUR BANK CODES
              </Text>
            </Center>
          </Flex>

          <div style={{ padding: "20px", paddingTop: "10px" }}>
            {codeList.map((x, i) => (
              <Text
                fontWeight="bold"
                fontSize="lg"
                color="white"
                key={i}
                marginLeft="10px"
              >
                {x.code}
              </Text>
            ))}
          </div>
        </Stack>
      </Box>
      <Spacer />
      <Center
        bg="transparent"
        w={{ base: "100%", md: "39%", lg: "39%" }}
        h="316.88px"
      >
        <Image src={`http://localhost:1337${data.advertGif.Advert.url}`} />
      </Center>
    </Flex>
  );
}

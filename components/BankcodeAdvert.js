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

export default function BankcodeAdvert() {
    const codeList = [
      "UBA - *919#",
      "UBA - *919#",
      "UBA - *919#",
      "UBA - *919#",
      "UBA - *919#",
      "UBA - *919#",
      "UBA - *919#",
      "UBA - *919#",
    ];
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
            <Center bg="red" h="50px" w={{ base: "100%", md: "40%", lg: "40%" }}>
              <Text p="5px" bg="white" fontWeight="bold" fontSize="lg" color="red">
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
                {x}
              </Text>
            ))}
          </div>
        </Stack>
      </Box>
      <Spacer />
      <Center
        borderColor="grey"
        borderWidth="1px"
        bg="white"
        w={{ base: "100%", md: "39%", lg: "39%" }}
        h="316.88px"
      >
        <Image src="../4.png" />
      </Center>
    </Flex>
  );
}

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
    <Flex direction="row" marginTop="10px">
      <Box bg="red" w="59%" h="316.88px">
        <Stack spacing={3}>
          <Flex direction="row">
            <Center
              bg="white"
              h="50px"
              w="60%"
              justifySelf="flex-start"
            ></Center>
            <Center bg="red" h="50px" w="40%">
              <Text fontWeight="bold" fontSize="lg" color="white">
                Know Your Bank Codes
              </Text>
            </Center>
          </Flex>

          <div style={{ padding: "20px" }}>
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
        w="39%"
        h="316.88px"
      >
        <Image src="../4.png" />
      </Center>
    </Flex>
  );
}

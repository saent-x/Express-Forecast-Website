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

export default function Jumbotron() {
  return (
    <Flex direction="row" marginTop="10px">
      <Center bg="red" w="49%" h="250px" borderRadius="20px">
        <Stack spacing={3} align="center">
          <Text color="white" fontSize="3xl" fontWeight="bold">
            GET BABA IJEBU RESULTS
          </Text>
          <Text color="white" fontSize="3xl">
            Dial *966*000*59000#
          </Text>
        </Stack>
      </Center>
      <Spacer />
      <Center borderColor="grey" borderWidth="1px" bg="white" w="49%" h="250px">
        <Stack spacing={3} align="center">
          <Text color="red" fontSize="3xl" fontWeight="bold">
            Know your lotto Terms
          </Text>
          <Divider borderColor="red" />
          <Flex>
            <HStack spacing={6}>
              <Text fontSize="xl" color="red">
                Perming
              </Text>
              <Text fontSize="xl" color="red">
                2Sure
              </Text>
              <Text fontSize="xl" color="red">
                Against
              </Text>
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
  );
}

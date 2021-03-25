import { Flex, Center, Image, Divider, Text, VStack, Button, HStack } from "@chakra-ui/react";

export default function GameTimer() {

    const gameTimes = [
      {
        url: "../1.png",
        text: "NEXT BABA IJEBU GAME",
        award: "GOLD",
        time: "00:00:00:00",
      },
      {
        url: "../1.png",
        text: "NEXT BABA IJEBU GAME",
        award: "GOLD",
        time: "00:00:00:00",
      },
      {
        url: "../1.png",
        text: "NEXT BABA IJEBU GAME",
        award: "GOLD",
        time: "00:00:00:00",
      },
    ];
    
    return (
      <Flex direction="row" marginTop="10px" justify="center" spacing={8} wrap="wrap">
        {gameTimes.map((x, i) => (
          <Center
            borderColor="grey"
            borderWidth="1px"
            bg="white"
            flexWrap="wrap"
            w="300px"
                h="100%"
            key={i}
            margin="10px"
            paddingBottom="20px"
          >
            <VStack>
              <Image src={x.url} />
              <Divider marginTop="10px" borderColor="red" w="70%" />
              <Text fontSize="lg" fontWeight="bold" color="red">
                {x.text}
              </Text>
              <Divider borderColor="red" w="70%" />
              <Text fontSize="4xl" fontWeight="extrabold" color="red">
                {x.award}
              </Text>
              <Text fontSize="xl" fontWeight="bold" color="black">
                TIME TO DRAW
              </Text>
              <Text fontSize="xl" fontWeight="bold" color="black">
                {x.time}
              </Text>
              <Button colorScheme="red" size="lg">
                Play Now
              </Button>
            </VStack>
          </Center>
        ))}
      </Flex>
    );
}
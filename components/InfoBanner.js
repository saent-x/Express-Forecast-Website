import { Center, Text } from "@chakra-ui/react";

export default function InfoBanner() {
    
    return (
      <Center color="white" bg="gray" h="100px" marginTop="10px" w="100%" padding="20px">
        <Text fontSize={{ base: "18px", md: "2xl", lg: "2xl" }}>
          * Please kind note that subscribed forecast sms only drops every 8am
          daily for 7days
        </Text>
      </Center>
    );
}
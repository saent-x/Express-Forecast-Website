import {
  Flex,
  Center,
  Image,
  Divider,
  Text,
  VStack,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { motion } from "framer-motion";
import moment from "moment";

const MotionButton = motion(Button);
const MotionCenter = motion(Center);

const QUERY = gql`
  {
    games {
      game_logo {
        url
      }
      name
      type
      game_time
    }
  }
`;

export default function GameTimer() {
  const { loading, error, data } = useQuery(QUERY);
  if (error) return "Error loading... contact Admin";
  if (loading) return <h1>...</h1>;

  const gameTimes = data.games;

//   console.log(
//     "Time: ",
//     moment.duration(gameTimes[0].game_time, "HH:mm:ss: A").asSeconds()
//   );

//   const now = moment().format("HH:mm:ss: A");
// console.log(now)
//   console.log(
//     "Now: ",
//     moment.duration(now, "HH:mm:ss: A").asSeconds()
//   );

  return (
    <Flex
      direction="row"
      marginTop="10px"
      justify="center"
      spacing={8}
      wrap="wrap"
    >
      {gameTimes.map((x, i) => (
        <MotionCenter
          whileHover={{ scale: 1.1 }}
          cursor="pointer"
          borderRadius="10px"
          boxShadow="sm"
          bg="white"
          flexWrap="wrap"
          w="300px"
          h="100%"
          key={i}
          margin="10px"
          paddingBottom="20px"
        >
          <VStack>
            <Image src={`${x.game_logo.url}`} />
            <Divider marginTop="10px" borderColor="red" w="70%" />
            <Text fontSize="lg" fontWeight="bold" color="red">
              {x.name}
            </Text>
            <Divider borderColor="red" w="70%" />
            <Text fontSize="4xl" fontWeight="extrabold" color="red">
              {x.type}
            </Text>
            <Text fontSize="xl" fontWeight="bold" color="black">
              TIME TO DRAW
            </Text>
            <Text fontSize="xl" fontWeight="bold" color="black">
              {x.game_time}
            </Text>
            <MotionButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              colorScheme="red"
              size="lg"
            >
              Play Now
            </MotionButton>
          </VStack>
        </MotionCenter>
      ))}
    </Flex>
  );
}

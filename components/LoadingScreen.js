import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import { Center } from "@chakra-ui/layout";

export default function Loading(props) {
  return (
    <Center
      margin={0}
      padding={0}
      top={0}
      left={0}
      zIndex={99999999}
      h="100vh"
      m="0"
      bg="black"
      pos="absolute"
      w="100%"
    >
      <FadeIn>
        <ReactLoading type={"bars"} color={"white"} />
      </FadeIn>
    </Center>
  );
}

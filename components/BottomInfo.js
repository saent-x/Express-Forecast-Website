import { Text, Center } from "@chakra-ui/layout";

export default function BottomInfo() {
    
  return (
    <>
      <Text
        w="100%"
        fontSize="sm"
        ml="5px"
        mr="5px"
        mt="10px"
        mb="10px"
        textAlign="center"
        letterSpacing="widest"
      >
        Expressforecast.com is not connected to or affiliated by any of the
        lotteries, organisations, or any bodies listed on this site.
      </Text>
      <a href="http://www.scitylanang.com/">
        <Text
          w="100%"
          fontSize="sm"
          ml="5px"
          mr="5px"
          mt="10px"
          mb="5px"
          textAlign="center"
          letterSpacing="widest"
          textDecor="underline"
        >
          powered by scitylana
        </Text>
      </a>
    </>
  );
}
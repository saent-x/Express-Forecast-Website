import { Flex, Box, Image, Spacer, Button } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex direction="column">
      <Box bg="red" w="100%" h="100px">
        <Flex
          direction="row"
          align="center"
          height="100%"
          paddingLeft="10px"
          paddingRight="10px"
        >
          <Image
            w="150px"
            h="60px"
            objectFit="contain"
            src="../logo.png"
            alt="Logo"
          />
          <Spacer />
          <div>
            <ul className="ulist">
              <li>
                <a href="#">HOME</a>
              </li>
              |
              <li>
                <a href="#">TIMETABLE</a>
              </li>
              |
              <li>
                <a href="#">ABOUT US</a>
              </li>
              |
              <li>
                <a href="#">HOW TO PLAY LOTTO</a>
              </li>
              |
              <li>
                <a href="#">CONTACT US</a>
              </li>
            </ul>
          </div>
          <Spacer />
          <Button backgroundColor="white" variant="ghost" color="red" size="xs">
            SUBSCRIBE TO NEWSLETTER
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}

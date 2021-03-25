import { Nav, Navbar, Form } from "react-bootstrap";
import { Button } from "@chakra-ui/react";
import styles from "../styles/Header.module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormLabel,
  FormControl,
  Input,
  Image,
} from "@chakra-ui/react";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Image src="/sbg.png" h="100%" w="100%" position="absolute" />
          <ModalHeader color="black">Subscribe</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} pt="100px">
            <FormControl>
              <Input bg="white" placeholder="name" />
            </FormControl>
            <br/>
            <FormControl>
              <Input bg="white" placeholder="email" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3}>
              Subscribe
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Navbar
        className={styles.navbar1}
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.png"
            width="150"
            height="100"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className={styles.black} href="#home">
              Home
            </Nav.Link>
            <Nav.Link className={styles.black} href="#features">
              Timetable
            </Nav.Link>
            <Nav.Link className={styles.black} href="#pricing">
              About us
            </Nav.Link>
            <Nav.Link className={styles.black} href="#pricing">
              How to play
            </Nav.Link>
            <Nav.Link className={styles.black} href="#pricing">
              Contact us
            </Nav.Link>
          </Nav>
          <Nav>
            <Form inline>
              <Button
                backgroundColor="white"
                variant="ghost"
                color="red"
                size="md"
                onClick={() => onOpen()}
              >
                SUBSCRIBE TO NEWSLETTER
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

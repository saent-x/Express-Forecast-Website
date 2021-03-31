import styles from "../styles/Layout.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomInfo from "../components/BottomInfo";
import { ChakraProvider } from "@chakra-ui/react";

export default function Layout(props) {
  return (
    <ChakraProvider>
      <div className={styles.layout}>
        <Header />
        {props.children}
        <footer className={styles.footer}>
          <Footer />
          <BottomInfo />
          <br />
        </footer>
      </div>
    </ChakraProvider>
  );
}

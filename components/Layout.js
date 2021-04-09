import styles from "../styles/Layout.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomInfo from "../components/BottomInfo";
import { ChakraProvider } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

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

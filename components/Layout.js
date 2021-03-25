import styles from "../styles/Layout.module.css";
import { Container } from "@chakra-ui/react";

export default function Layout(props) {
  return (
    <div className={styles.layout}>
      {props.children}
    </div>
  );
}

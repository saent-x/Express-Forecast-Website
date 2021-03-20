import styles from "../styles/Layout.module.css";
import { Container } from "@chakra-ui/react";

export default function Layout(props) {
  return (
    <div style={{ marginLeft:"200px", marginRight:"200px", height:"100vh", marginTop:"30px" }}>
      {props.children}
    </div>
  );
}

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import "react-toastify/dist/ReactToastify.css";
import withData from "../lib/apollo";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withData(MyApp);

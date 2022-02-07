import "../commons/styles/globals.css";
import Head from "next/head";
import Script from "next/script";
// import { Provider } from "react-redux";
// import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* <Provider store={store}></Provider> */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        Crossorigin="anonymous"
      />
    </>
  );
}

export default MyApp;

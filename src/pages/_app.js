import "../commons/styles/globals.css";
import Script from "next/script";
// import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { store, persistor } from "src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider> */}

      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>

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

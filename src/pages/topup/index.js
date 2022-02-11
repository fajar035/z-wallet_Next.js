import Layout from "src/commons/components/Layout";
import Card from "src/commons/components/Card/CardHistory";
import { useState, useEffect } from "react";
import styles from "src/commons/styles/History.module.css";
import Header from "src/commons/components/Header";
import Footer from "src/commons/components/Footer/Footer";
import MenuSide from "src/commons/components/MenuSide";
import parseCookies from "src/commons/helpers";
import getUser from "src/modules/user";
import getHistoryTransaction from "src/modules/history";
import Loading from "src/commons/components/Loading";

function TopUp(props) {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {/* {dataHistory.length == 0 ? (
        <Loading />
      ) : ( */}
      <Layout title="Zwallet | Top Up">
        <div className={`container-fluid p-0 ${styles.main}`}>
          {/* <Header user={dataUser} /> */}

          <main className={`container-fluid ${styles["main-home"]}`}>
            <div className="row">
              <MenuSide />
              <div className={`col-lg-9 ${styles["wrapper-history"]}`}>
                <div className={styles.history}>
                  <div className="row">
                    <div className="col-lg-12 d-flex justify-content-between align-items-center">
                      <p className="m-0 p-2">Top Up</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <Footer login={isLogin} />
        </div>
      </Layout>
      {/* )} */}
    </>
  );
}

TopUp.getInitialProps = async ({ req, res }) => {
  const data = parseCookies(req);
  // console.log(req);
  if (res) {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      res.writeHead(301, { Location: "/" });
      res.end();
    }
  }

  return {
    data: data && data
  };
};

export default TopUp;

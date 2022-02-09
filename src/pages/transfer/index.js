import Layout from "src/commons/components/Layout";
import MenuSide from "src/commons/components/MenuSide";
import Header from "src/commons/components/Header.js";
import Footer from "src/commons/components/Footer/Footer";
import { useState, useEffect } from "react";
import styles from "src/commons/styles/transfer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CardHistory from "src/commons/components/Card/CardHistory";
import parseCookies from "src/commons/helpers";
import getUser from "src/modules/user";
import Loading from "src/commons/components/Loading";
import Link from "next/link";

function transfer(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [dataUser, setDataUser] = useState({});

  const user = JSON.parse(props.data.user);
  const id = user.id;
  const token = user.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  useEffect(() => {
    setIsLogin(true);
    getDataUser();
  }, []);

  const getDataUser = () => {
    getUser(id, config)
      .then((res) => {
        console.log(res.data.data);
        setDataUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(dataUser);
  return (
    <>
      {Object.keys(dataUser).length == 0 ? (
        <Loading />
      ) : (
        <Layout title="Zwallet | Transfer">
          <Header user={dataUser} />
          <main className={`container-fluid ${styles["main-home"]}`}>
            <div className="row">
              <MenuSide />
              <div className={`col-lg-9 ${styles["wrapper"]}`}>
                <div className={styles["main"]}>
                  <label className={styles.label}>Search Receiver</label>
                  <div className={styles["wrapper-search"]}>
                    <FontAwesomeIcon icon={faSearch} className={styles.icon} />
                    <input type="text" placeholder="Search receiver here" />
                  </div>

                  {/* <CardHistory />

              <CardHistory />
              <CardHistory />
              <CardHistory /> */}
                </div>
              </div>
            </div>
          </main>
          <Footer login={isLogin} />
        </Layout>
      )}
    </>
  );
}

transfer.getInitialProps = async ({ req, res }) => {
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

export default transfer;

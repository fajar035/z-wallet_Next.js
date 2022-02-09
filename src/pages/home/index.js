import Layout from "src/commons/components/Layout";
import Link from "next/link";
import Card from "src/commons/components/Card/CardHistory";
import { useState, useEffect } from "react";
import styles from "src/commons/styles/Home.module.css";
import Header from "src/commons/components/Header";
import Footer from "src/commons/components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Menu from "src/commons/components/MenuSide";
import parseCookies from "src/commons/helpers";
import getUser from "src/modules/user";
import getHistoryTransaction from "src/modules/history";
import Loading from "src/commons/components/Loading";

function Home(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [dataUser, setDataUser] = useState({});
  const [dataHistory, setDataHistory] = useState([]);

  const user = JSON.parse(props.data.user);
  const id = user.id;
  const token = user.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  useEffect(() => {
    setIsLogin(true);
    getDataUser();
    getDataHistory();
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

  const getDataHistory = () => {
    getHistoryTransaction(config)
      .then((res) => {
        // console.log(res.data.data);
        setDataHistory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log("DATA-USER", dataUser);
  console.log("DATA-HISTORY", dataHistory);
  return (
    <>
      {dataHistory.length === 0 ? (
        <Loading />
      ) : (
        <Layout title="Zwallet | Home">
          <div className={`container-fluid p-0 ${styles.main}`}>
            <Header user={dataUser} />

            <main className={`container-fluid ${styles["main-home"]}`}>
              <div className="row">
                <Menu user={user} />
                <div className="col-lg-9">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row ">
                        <div className={styles["wrapper-deposite"]}>
                          <div className="row">
                            <div className={`col-lg-9 ${styles["deposite"]}`}>
                              <p className={styles.title}>Balance</p>
                              <p className={styles.price}>
                                Rp. {dataUser.balance}
                              </p>
                              <p className={styles.title}>{dataUser.noTelp}</p>
                            </div>
                            <div
                              className={`col-lg-3 ${styles["main-wrapper-btn"]}`}>
                              <button className={`${styles["btn-transfer"]}`}>
                                {" "}
                                <FontAwesomeIcon
                                  icon={faArrowUp}
                                  className={styles["icon-btn"]}
                                />{" "}
                                Transfer
                              </button>
                              <button className={`${styles["btn-transfer"]}`}>
                                {" "}
                                <FontAwesomeIcon
                                  icon={faPlus}
                                  className={styles["icon-btn"]}
                                />{" "}
                                Top Up
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-7 ">
                      <div className={`${styles["wrapper-chart"]}`}>chart</div>
                    </div>

                    <div className="col-lg-5 ">
                      <div className={`${styles["wrapper-history"]}`}>
                        <div className={styles["wrapper-title"]}>
                          <p>Transaction History</p>
                          <Link
                            href={"/history"}
                            className={`${styles["link-seeall"]}`}>
                            See all
                          </Link>
                        </div>
                        {Array.isArray(dataHistory) &&
                          dataHistory.length > 0 &&
                          dataHistory.map((data, index) => {
                            return <Card history={data} key={index} />;
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            <Footer login={isLogin} />
          </div>
        </Layout>
      )}
    </>
  );
}

Home.getInitialProps = async ({ req, res }) => {
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

export default Home;

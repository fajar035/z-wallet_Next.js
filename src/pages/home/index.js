import Layout from "src/commons/components/Layout";
import Image from "next/image";
import Link from "next/link";
import Card from "src/commons/components/Card/CardHistory";
import { useState, useEffect } from "react";
import styles from "src/commons/styles/Home.module.css";
import Header from "src/commons/components/Header";
import Footer from "src/commons/components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderAll,
  faPlus,
  faArrowUp,
  faSignInAlt
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function Home(pageTitle) {
  console.log("PROPS", pageTitle);

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(true);
  }, []);
  return (
    <>
      <Layout title="Zwallet | Home">
        <div className={`container-fluid p-0 ${styles.main}`}>
          <Header />

          <main className={`container-fluid mt-5 ${styles["main-home"]}`}>
            <div className="row">
              <div className={`col-lg-3 ${styles["wrapper-menu"]}`}>
                <div className={`${styles["menu"]}`}>
                  <Link href={"/home"}>
                    <p className={`${styles["menu-item"]}`}>
                      <FontAwesomeIcon
                        icon={faBorderAll}
                        className={`${styles["icon"]}`}
                      />
                      Dashboard
                    </p>
                  </Link>
                  <Link href={"/transfer"}>
                    <p className={`${styles["menu-item"]}`}>
                      <FontAwesomeIcon
                        icon={faArrowUp}
                        className={`${styles["icon"]}`}
                      />
                      Transfer
                    </p>
                  </Link>
                  <Link href={"/topup"}>
                    <p className={`${styles["menu-item"]}`}>
                      <FontAwesomeIcon
                        icon={faPlus}
                        className={`${styles["icon"]}`}
                      />
                      Top Up
                    </p>
                  </Link>
                  <Link href={"/profile"}>
                    <p
                      className={`${styles["menu-item"]}`}
                      style={{ "margin-bottom": "315px" }}>
                      <FontAwesomeIcon
                        icon={faUser}
                        className={`${styles["icon"]}`}
                      />
                      Profile
                    </p>
                  </Link>
                  <Link href={"/"}>
                    <p className={`${styles["menu-item"]}`}>
                      <FontAwesomeIcon
                        icon={faSignInAlt}
                        className={`${styles["icon"]}`}
                        style={{ "margin-bottom": 0 }}
                      />
                      Log Out
                    </p>
                  </Link>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row ">
                      <div className={styles["wrapper-deposite"]}>
                        <div className="row">
                          <div className={`col-lg-9 ${styles["deposite"]}`}>
                            <p className={styles.title}>Balance</p>
                            <p className={styles.price}>Rp. 120.000</p>
                            <p className={styles.title}>081213971331</p>
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
                  <div className="col-lg-7 bg-secondary">graph</div>
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
                      <Card />
                      <Card />
                      <Card />
                      <Card />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <Footer login={isLogin} />
        </div>
      </Layout>
    </>
  );
}
export default Home;

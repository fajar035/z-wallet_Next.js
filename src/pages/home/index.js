import Layout from "src/commons/components/Layout";
import Link from "next/link";
import Card from "src/commons/components/Card/CardHistory";
import { useState, useEffect, useCallback } from "react";
import styles from "src/commons/styles/Home.module.css";
import Header from "src/commons/components/Header";
import Footer from "src/commons/components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Menu from "src/commons/components/MenuSide";
import { useSelector } from "react-redux";
import Loading from "src/commons/components/Loading";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getHistoryHomeApi } from "src/modules/history";

function Home() {
  const router = useRouter();
  const user = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.user);
  const pin = user.authUser.pin;
  const token = user.authUser.token;
  const alert = withReactContent(Swal);

  // State
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("USER >>>", user);
  console.log("USER PROFILE >>>", profile);

  const getHistory = useCallback(() => {
    setLoading(true);
    getHistoryHomeApi(token)
      .then((res) => {
        setHistory(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const formatBalanceUser = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  })
    .format(profile.user.balance)
    .replace(/(\.|,)00$/g, "");

  useEffect(() => {
    getHistory();
    // if (!pin)
    //   return alert
    //     .fire({
    //       title: "You don't have a pin code yet",
    //       text: "Please create a pin code first",
    //       icon: "question"
    //     })
    //     .then((res) => {
    //       if (res.isConfirmed) return router.push("/auth/pin/create");
    //     });
    // if (user.isFulfilled === false) {
    //   alert
    //     .fire({
    //       icon: "error",
    //       title: "You are not logged in",
    //       text: "Please login first"
    //     })
    //     .then((result) => {
    //       if (result.isConfirmed) {
    //         router.push("/");
    //       }
    //     });
    // }
  }, [getHistory]);

  return (
    <>
      {loading && !profile.user.image ? (
        <Loading />
      ) : (
        <Layout title="Zwallet | Home">
          <div className={`container-fluid p-0 ${styles.main}`}>
            <Header user={profile.user} />

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
                                {formatBalanceUser}
                              </p>
                              <p className={styles.title}>
                                {profile.user.noTelp}
                              </p>
                            </div>
                            <div
                              className={`col-lg-3 ${styles["main-wrapper-btn"]}`}>
                              <button
                                className={`${styles["btn-transfer"]}`}
                                onClick={() => router.push("/transfer")}>
                                {" "}
                                <FontAwesomeIcon
                                  icon={faArrowUp}
                                  className={styles["icon-btn"]}
                                />{" "}
                                Transfer
                              </button>
                              <button
                                className={`${styles["btn-transfer"]}`}
                                data-bs-toggle="modal"
                                data-bs-target="#modalTopUp">
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
                          <Link href={"/history"} passHref>
                            <p className={`${styles["link-seeall"]}`}>
                              See all
                            </p>
                          </Link>
                        </div>
                        {Array.isArray(history) &&
                          history.length > 0 &&
                          history.map((data, index) => {
                            return <Card history={data} key={index} />;
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            <Footer login={user.isFulfilled} />
          </div>
        </Layout>
      )}
    </>
  );
}

export default Home;

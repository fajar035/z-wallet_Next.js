import Layout from "src/commons/components/Layout";
import Card from "src/commons/components/Card/CardHistory";
import { useState, useEffect, useCallback } from "react";
import styles from "src/commons/styles/History.module.css";
import Header from "src/commons/components/Header";
import Footer from "src/commons/components/Footer/Footer";
import MenuSide from "src/commons/components/MenuSide";
import { useSelector } from "react-redux";
import getUser from "src/modules/user";
import { getHistoryHomeApi } from "src/modules/history";
import Loading from "src/commons/components/Loading";

function History() {
  const isLogin = true;
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const dataUser = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.auth.authUser.token);

  const getHistory = useCallback(() => {
    setLoading(true);
    getHistoryHomeApi(token)
      .then((res) => {
        setHistory(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.group(err);
      });
  }, [token]);

  useEffect(() => {
    getHistory();
  }, [getHistory]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Layout title="Zwallet | History">
          <div className={`container-fluid p-0 ${styles.main}`}>
            <Header user={dataUser} />

            <main className={`container-fluid ${styles["main-home"]}`}>
              <div className="row">
                <MenuSide />
                <div className={`col-lg-9 ${styles["wrapper-history"]}`}>
                  <div className={styles.history}>
                    <div className="row">
                      <div className="col-lg-12 d-flex justify-content-between align-items-center">
                        <p className={`m-0 p-2 ${styles["title"]}`}>
                          Transaction History
                        </p>

                        <select
                          className={`${styles.filter} dropdown-toggle p-2 ms-3`}
                          // value={this.state.selectValue}
                          // onChange={this.handleDropdownChange}
                          name="filter">
                          <option value="">-- Select Filter --</option>
                          <option value="WEEK">Week</option>
                          <option value="MONTH">Month</option>
                          <option value="YEAR">Year</option>
                        </select>
                      </div>
                      <div className={styles["wrapper-card"]}>
                        {Array.isArray(history) &&
                          history.length > 0 &&
                          history.map((data, index) => {
                            return <Card history={data} key={index} />;
                          })}
                        {/* <Card />
                      <Card />
                      <Card />
                      <Card /> */}
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

export default History;

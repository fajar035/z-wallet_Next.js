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

function History(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [dataUser, setDataUser] = useState({});
  const [dataHistory, setDataHistory] = useState([]);

  const user = JSON.parse(props.data.user);
  const id = user.id;
  const token = user.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  console.log("PRPS-HISTORY", props);

  useEffect(() => {
    setIsLogin(true);
    getDataUser();
    getDataHistory();
  }, [getDataUser, getDataHistory]);

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
  console.log("OK", dataHistory);
  return (
    <>
      {dataHistory.length == 0 ? (
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
                        <p className="m-0 p-2">Transaction History</p>

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
                        {Array.isArray(dataHistory) &&
                          dataHistory.length > 0 &&
                          dataHistory.map((data, index) => {
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

History.getInitialProps = async ({ req, res }) => {
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

export default History;

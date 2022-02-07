import Layout from "src/commons/components/Layout";
import Card from "src/commons/components/Card/CardHistory";
import { useState, useEffect } from "react";
import styles from "src/commons/styles/History.module.css";
import Header from "src/commons/components/Header";
import Footer from "src/commons/components/Footer/Footer";
import MenuSide from "src/commons/components/MenuSide";

function History() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(true);
  }, []);
  return (
    <>
      <Layout title="Zwallet | Home">
        <div className={`container-fluid p-0 ${styles.main}`}>
          <Header />

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

export default History;

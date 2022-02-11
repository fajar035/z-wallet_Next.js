import Layout from "src/commons/components/Layout";
import MenuSide from "src/commons/components/MenuSide";
import Header from "src/commons/components/Header.js";
import Footer from "src/commons/components/Footer/Footer";
import { useState, useEffect } from "react";
import styles from "src/commons/styles/transfer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CardReceiver from "src/commons/components/Card/CardReceiver";
import { getAllUserAPi } from "src/modules/user";
import Loading from "src/commons/components/Loading";
import { useSelector } from "react-redux";
// import Link from "next/link";

function Transfer() {
  const isLogin = true;
  const token = useSelector((state) => state.auth.authUser.token);

  // state
  const [loading, setLoading] = useState(false);
  const [allUser, setAllUser] = useState([]);

  const getAllUser = () => {
    setLoading(true);
    getAllUserAPi(token)
      .then((res) => {
        setAllUser(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <>
      {Object.keys(allUser).length == 0 ? (
        <Loading />
      ) : (
        <Layout title="Zwallet | Transfer">
          <Header />
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
                  {Array.isArray(allUser) &&
                    allUser.length > 0 &&
                    allUser.map((user, index) => {
                      // console.log(user);
                      return (
                        <CardReceiver
                          key={index}
                          firstName={user.firstName}
                          lastName={user.lastName}
                          noTelp={user.noTelp}
                        />
                      );
                    })}
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

export default Transfer;

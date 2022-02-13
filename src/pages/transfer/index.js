import Layout from "src/commons/components/Layout";
import MenuSide from "src/commons/components/MenuSide";
import Header from "src/commons/components/Header.js";
import Footer from "src/commons/components/Footer/Footer";
import CardReceiver from "src/commons/components/Card/CardReceiver";
import { getAllUserAPi } from "src/modules/user";
import styles from "src/commons/styles/Transfer.module.css";
import Loading from "src/commons/components/Loading";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
// import Link from "next/link";

function Transfer() {
  const isLogin = true;
  const router = useRouter();
  const token = useSelector((state) => state.auth.authUser.token);
  // state
  const [loading, setLoading] = useState(false);
  const [allUser, setAllUser] = useState([]);

  const getAllUser = useCallback(() => {
    setLoading(true);
    const params = "?limit=4";
    getAllUserAPi(token, params)
      .then((res) => {
        setAllUser(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getAllUser();
  }, [getAllUser]);

  const onClickHandler = (id) => {
    router.push(`/user/${id[0]}`);
  };

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
                          id={user.id}
                          firstName={user.firstName}
                          lastName={user.lastName}
                          noTelp={user.noTelp}
                          image={user.image}
                          onCLick={onClickHandler}
                        />
                      );
                    })}

                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Previous
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
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

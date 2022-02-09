import Layout from "src/commons/components/Layout";
import MenuSide from "src/commons/components/MenuSide";
import Header from "src/commons/components/Header";
import Footer from "src/commons/components/Footer/Footer";
import styles from "src/commons/styles/TransferDetail.module.css";
import { useState, useEffect } from "react";

function transferDetail() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(true);
  });
  return (
    <Layout title="Zwallet | User Detail">
      <Header />
      <main className={`container-fluid ${styles["main-home"]}`}>
        <div className="row">
          <MenuSide />
          <div className={`col-lg-9 ${styles["wrapper"]}`}>
            <div className={styles["main"]}>Detail</div>
          </div>
        </div>
      </main>
      <Footer login={isLogin} />
    </Layout>
  );
}

export default transferDetail;

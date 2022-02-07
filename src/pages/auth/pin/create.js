import ColumnLeft from "../../../commons/components/Auth/ColumnLeft";
import styles from "../../../commons/styles/Createpin.module.css";
import Layout from "../../../commons/components/Layout";

function createPin() {
  return (
    <Layout title="Zwallet | Create Pin">
      <div className="container-fluid p-0">
        <div className="row">
          <ColumnLeft />

          <div className={`col-lg-6 ${styles["col-right"]}`}>
            <div className={`${styles["wrapper-form"]}`}>
              <h1 className={`${styles["title-form"]}`}>
                Start Accessing Banking Needs With All Devices and All Platforms
                With 30.000+ Users
              </h1>
              <p className={`${styles["form-description"]}`}>
                Transfering money is eassier than ever, you can access Zwallet
                wherever you are. Desktop, laptop, mobile phone? we cover all of
                that for you!
              </p>
              <div className={`${styles["main-input"]}`}>
                <div className={`${styles["wrapper-input"]}`}>
                  <input
                    type="number"
                    className={`${styles["input"]}`}
                    maxLength="1"
                  />
                </div>
                <div className={`${styles["wrapper-input"]}`}>
                  <input
                    type="number"
                    className={`${styles["input"]}`}
                    maxLength="1"
                  />
                </div>
                <div className={`${styles["wrapper-input"]}`}>
                  <input
                    type="number"
                    className={`${styles["input"]}`}
                    maxLength="1"
                  />
                </div>
                <div className={`${styles["wrapper-input"]}`}>
                  <input
                    type="number"
                    className={`${styles["input"]}`}
                    maxLength="1"
                  />
                </div>
                <div className={`${styles["wrapper-input"]}`}>
                  <input
                    type="number"
                    className={`${styles["input"]}`}
                    maxLength="1"
                  />
                </div>
                <div className={`${styles["wrapper-input"]}`}>
                  <input
                    type="number"
                    className={`${styles["input"]}`}
                    maxLength="1"
                  />
                </div>
              </div>
              <button className={`${styles["btn-confirm"]}`}>Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default createPin;

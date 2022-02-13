// import Link from "next/link";
import Layout from "src/commons/components/Layout";
import ColumnLeft from "src/commons/components/Auth/ColumnLeft";
import styles from "src/commons/styles/Forgot.module.css";
import FormInputEmail from "src/commons/components/Auth/FormInputEmail";
import FormInputNewPassword from "src/commons/components/Auth/FormInputNewPassword";
// import { useState, useEffect } from "react";

function Forgot() {
  // const [emailInput, setEmailInput] = useState("");

  // useEffect(() => {
  //   setEmailInput("fajarp300@gmail.com");
  // }, []);

  return (
    <Layout title="Zwallet | Forgot Password">
      <div className="container-fluid p-0">
        <div className="row ">
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
              {!emailInput.length > 0 ? (
                <FormInputEmail />
              ) : (
                <FormInputNewPassword />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Forgot;

import Link from "next/link";
import ColumnLeft from "src/commons/components/Auth/columnLeft";
import styles from "src/commons/styles/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Layout from "src/commons/components/Layout";
import loginApi from "src/modules/auth";
// import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

function Login() {
  const { register, handleSubmit, errors } = useForm();
  const [cookie, setCookie] = useCookies(["user"]);
  const router = useRouter();
  const onSubmit = (data) => {
    loginApi(data)
      .then((res) => {
        const resData = res.data.data;
        setCookie("user", JSON.stringify(resData));
        router.push("/home");
        console.log(resData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(cookie);
  return (
    <Layout title="Zwallet | Login">
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={`${styles["wrapper-input"]} `}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={`${styles["icon"]}`}
                  />
                  <input
                    type="email"
                    name="email"
                    {...register("email")}
                    placeholder="Enter your e-mail"
                    className={`${styles["input"]}`}
                    autoComplete="off"
                  />
                </div>

                <div className={`${styles["wrapper-input"]}`}>
                  <FontAwesomeIcon
                    icon={faLock}
                    className={`${styles["icon"]}`}
                  />
                  <input
                    type="password"
                    name="password"
                    {...register("password")}
                    placeholder="Enter your password"
                    className={`${styles["input"]}`}
                  />
                </div>
                <Link href="/auth/forgot">
                  <p className={`${styles["forgot"]}`}>Forgot password?</p>
                </Link>
                <span className={`${styles["error-input"]}`}>
                  {/* {console.log(errors)} */}
                </span>
                <button type="submit" className={`${styles["btn-login"]}`}>
                  Login
                </button>
                <p className={`${styles["account"]}`}>
                  Don’t have an account? Let’s{" "}
                  <Link href="/auth/signup">
                    <p className={`${styles["link-signup"]}`}>Sign Up</p>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     auth: state.auth
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loginDispatch: (body) => {
//       dispatch(loginAction(body));
//     }
//   };
// };

export default Login;

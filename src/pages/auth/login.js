import Link from "next/link";
import ColumnLeft from "src/commons/components/Auth/ColumnLeft";
import styles from "src/commons/styles/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Layout from "src/commons/components/Layout";
import { loginAction } from "src/redux/actions/auth";
import { getUserAction } from "src/redux/actions/user";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Loading from "src/commons/components/Loading";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const alert = withReactContent(Swal);
  const { register, handleSubmit } = useForm();
  const loading = auth.isPending;
  const id = auth.authUser.id;
  const token = auth.authUser.token;

  const onSubmit = (data) => {
    dispatch(loginAction(data))
      .then((res) => {
        console.log("RESPONSE DISPATCH LOGIN ACTION", res);
        const pin = res.action.payload.data.data.pin;
        console.log("PIN", pin);
        if (!pin) return router.push("/auth/pin/create");
        router.push("/home");
      })
      .catch((err) => {
        const errorMsg = err.response.data.msg;
        if (errorMsg === "Wrong password")
          return alert.fire({
            title: "Wrong Username / Password",
            icon: "warning"
          });

        if (errorMsg === "Account not active")
          return alert.fire({
            title: "Account not Active",
            icon: "error",
            text: "Please activate your account first, check your email for activation"
          });
        if (errorMsg === "Email / Account not registed")
          return alert.fire({ title: "Email / Account not registed" });

        if (errorMsg === "Input your email & Password")
          return alert.fire({
            title: "Please fill in your email and password",
            icon: "warning"
          });
      });
  };

  useEffect(() => {
    if (auth.isFulfilled === true) {
      dispatch(getUserAction(id, token));
      alert.fire({
        position: "center",
        icon: "success",
        title: "Login Success",
        showConfirmButton: false,
        timer: 2700
      });
    }
  }, [auth.isFulfilled, auth.isPending, router, alert, dispatch, id, token]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Layout title="Zwallet | Login">
          <div className="container-fluid p-0">
            <div className="row ">
              <ColumnLeft />

              <div className={`col-lg-6 ${styles["col-right"]}`}>
                <div className={`${styles["wrapper-form"]}`}>
                  <h1 className={`${styles["title-form"]}`}>
                    Start Accessing Banking Needs With All Devices and All
                    Platforms With 30.000+ Users
                  </h1>
                  <p className={`${styles["form-description"]}`}>
                    Transfering money is eassier than ever, you can access
                    Zwallet wherever you are. Desktop, laptop, mobile phone? we
                    cover all of that for you!
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
                    <Link href="/auth/forgot" passHref={true}>
                      <p className={`${styles["forgot"]}`}>Forgot password?</p>
                    </Link>
                    <span className={`${styles["error-input"]}`}>
                      {/* {console.log(errors)} */}
                    </span>
                    <button type="submit" className={`${styles["btn-login"]}`}>
                      Login
                    </button>
                    <div className={`${styles["account"]}`}>
                      Don’t have an account? Let’s{" "}
                      <Link href="/auth/signup" passHref={true}>
                        <p className={`${styles["link-signup"]}`}>Sign Up</p>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
}

export default Login;

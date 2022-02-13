import Link from "next/link";
import ColumnLeft from "../../commons/components/Auth/columnLeft";
import styles from "../../commons/styles/Signup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../commons/components/Layout";
import { signupApi } from "src/modules/auth";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useRouter } from "next/router";

function Signup() {
  const router = useRouter();
  const alert = withReactContent(Swal);

  const submitSignup = (e) => {
    e.preventDefault();
    const body = {
      firstName: e.target.firstname.value,
      lastName: e.target.lastname.value,
      email: e.target.email.value,
      password: e.target.password.value
    };

    console.log("BODY", body);
    signupApi(body)
      .then((res) => {
        alert
          .fire({
            icon: "success",
            title: res.data.msg,
            text: "Check your email, and verify first to login your account",
            showConfirmButton: true
          })
          .then(() => {
            router.push("/auth/login");
          });
      })
      .catch((err) => {
        console.log(err.response.data.msg);
        alert.fire({
          icon: "error",
          title: err.response.data.msg,
          showConfirmButton: true
        });
      });
  };
  return (
    <Layout title="Zwallet | Sign Up">
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
              <form onSubmit={submitSignup}>
                <div className={`${styles["wrapper-input"]}`}>
                  <FontAwesomeIcon
                    icon={faUser}
                    className={`${styles["icon"]}`}
                  />
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Enter your firstname"
                    className={`${styles["input"]}`}
                  />
                </div>
                <div className={`${styles["wrapper-input"]}`}>
                  <FontAwesomeIcon
                    icon={faUser}
                    className={`${styles["icon"]}`}
                  />
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Enter your lastname"
                    className={`${styles["input"]}`}
                  />
                </div>
                <div className={`${styles["wrapper-input"]}`}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={`${styles["icon"]}`}
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your e-mail"
                    className={`${styles["input"]}`}
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
                    id="password"
                    placeholder="Enter your password"
                    className={`${styles["input"]}`}
                  />
                </div>

                <button type="submit" className={`${styles["btn-login"]}`}>
                  Sign Up
                </button>
                <div className={`${styles["account"]}`}>
                  Already have an account? Let&apos;s
                  <Link href="/auth/login" passHref={true}>
                    <p className={`${styles["link-signup"]}`}>Login</p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Signup;

import Link from "next/link";
import ColumnLeft from "../../commons/components/Auth/columnLeft";
import styles from "../../commons/styles/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

function login() {
  return (
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
            <form>
              <div className={`${styles["wrapper-input"]}`}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className={`${styles["icon"]}`}
                />
                <input
                  type="email"
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
                  placeholder="Enter your password"
                  className={`${styles["input"]}`}
                />
              </div>
              <Link href="/forgot">
                <p className={`${styles["forgot"]}`}>Forgot password?</p>
              </Link>
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
  );
}

export default login;

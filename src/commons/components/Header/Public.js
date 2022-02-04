import styles from "../../styles/Header.module.css";
import Link from "next/link";

function Public(props) {
  return (
    <div
      className="collapse navbar-collapse d-lg-flex justify-content-lg-end "
      id="navbarSupportedContent">
      <ul className={`navbar-nav mb-2 mb-lg-0 mt-lg-0 mt-md-5 mt-sm-5 `}>
        <li
          className={`nav-item d-md-flex justify-content-md-center ${styles["wrapper-button"]}`}>
          <Link href="/auth/login">
            <button
              className={`nav-item mb-md-2 mb-sm-2 mb-lg-0  ${styles["btn-login"]}`}>
              Login
            </button>
          </Link>
        </li>
        <li
          className={`nav-item d-md-flex justify-content-md-center ${styles["wrapper-button"]}`}>
          <Link href="/auth/signup">
            <button className={styles["btn-signup"]}>Sign Up</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Public;

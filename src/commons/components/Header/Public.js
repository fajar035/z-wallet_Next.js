import styles from "../../styles/Header.module.css";

function Public() {
  return (
    <div
      className="collapse navbar-collapse d-lg-flex justify-content-lg-end "
      id="navbarSupportedContent">
      <ul className={`navbar-nav mb-2 mb-lg-0 mt-lg-0 mt-md-5 mt-sm-5 `}>
        <li
          className={`nav-item d-md-flex justify-content-md-center ${styles["wrapper-button"]}`}>
          <button
            className={`nav-item mb-md-2 mb-sm-2 mb-lg-0  ${styles["btn-login"]}`}>
            Login
          </button>
        </li>
        <li
          className={`nav-item d-md-flex justify-content-md-center ${styles["wrapper-button"]}`}>
          <button className={styles["btn-signup"]}>Sign Up</button>
        </li>
      </ul>
    </div>
  );
}

export default Public;

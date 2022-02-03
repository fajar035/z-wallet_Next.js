import Image from "next/image";
import styles from "../../styles/Header.module.css";
import pictDefault from "../../assets/images/photo-profile-default.webp";
import notif from "../../assets/icons/notification.png";

function Private() {
  return (
    <div
      className="collapse navbar-collapse d-lg-flex justify-content-lg-end "
      id="navbarSupportedContent">
      <ul className={`navbar-nav mb-2 mb-lg-0 mt-lg-0 mt-md-5 mt-sm-5 `}>
        <li
          className={`nav-item d-md-flex justify-content-md-center ${styles["wrapper-button"]}`}>
          <Image
            src={pictDefault}
            alt="photo-profile"
            width={50}
            height={50}
            className={`${styles["img-profile"]}`}
          />
        </li>
        <li
          className={`nav-item d-md-flex justify-content-md-center ${styles["wrapper-info"]}`}>
          <p className={styles.name}>Fajar Pratama</p>
          <p className={styles.phone}>+62 8218718079</p>
        </li>
        <li
          className={`nav-item d-md-flex justify-content-md-center ${styles["wrapper-button"]}`}>
          <Image src={notif} alt="notification" width={30} height={30} />
        </li>
      </ul>
    </div>
  );
}

export default Private;

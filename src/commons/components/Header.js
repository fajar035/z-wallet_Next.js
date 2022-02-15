import styles from "src/commons/styles/Header.module.css";
import Image from "next/image";
import pictDefault from "public/picUserDefault.webp";
import notif from "src/commons/assets/icons/notification.png";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector((state) => state.user.user);
  const { firstName, lastName, image, noTelp } = user;
  const host = process.env.NEXT_PUBLIC_HOST;
  const photo = `${host}/uploads/${image}`;

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ps-lg-5 pe-lg-5 ${styles["wrapper-navbar"]}`}>
      <div className="container-fluid">
        <a className={`navbar-brand ${styles.title}`} href="#">
          Zwallet
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-lg-flex justify-content-lg-end "
          id="navbarSupportedContent">
          <ul className={`navbar-nav mb-2 mb-lg-0 mt-lg-0 mt-md-5 mt-sm-5 `}>
            <li
              className={`nav-item d-md-flex justify-content-md-center ${styles["wrapper-button"]}`}>
              <Image
                src={!image ? pictDefault : photo}
                onError={() => pictDefault}
                placeholder="blur"
                blurDataURL={pictDefault}
                alt="photo-profile"
                width={50}
                height={50}
                objectFit="cover"
                className={`${styles["img-profile"]}`}
              />
            </li>
            <li
              className={`nav-item d-md-flex justify-content-md-center ${styles["wrapper-info"]}`}>
              <p className={styles.name}>{`${firstName} ${lastName}`}</p>
              <p className={styles.phone}>{noTelp}</p>
            </li>
            <li
              className={`nav-item d-md-flex justify-content-md-center ${styles["wrapper-button"]}`}>
              <Image src={notif} alt="notification" width={30} height={30} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

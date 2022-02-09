import styles from "src/commons/styles/Header.module.css";
import Image from "next/image";
import pictDefault from "src/commons/assets/images/photo-profile-default.webp";
import notif from "src/commons/assets/icons/notification.png";
import { useState, useEffect } from "react";
import getUser from "src/modules/user";

function Header(props) {
  const host = process.env.NEXT_PUBLIC_HOST;
  const photoUser = host + "/uploads/" + props.user.image;

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
                src={photoUser}
                alt="photo-profile"
                width={50}
                height={50}
                className={`${styles["img-profile"]}`}
              />
            </li>
            <li
              className={`nav-item d-md-flex justify-content-md-center ${styles["wrapper-info"]}`}>
              <p
                className={
                  styles.name
                }>{`${props.user.firstName} ${props.user.lastName}`}</p>
              <p className={styles.phone}>{props.user.noTelp}</p>
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

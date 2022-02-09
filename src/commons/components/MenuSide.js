import styles from "src/commons/styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderAll,
  faPlus,
  faArrowUp,
  faSignInAlt
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { useCookies } from "react-cookie";
import { logoutApi } from "src/modules/auth";
import { useEffect } from "react";

function MenuSide(props) {
  const [removeCookie] = useCookies(["user"]);
  console.log("PROPS-MENU", props);
  const token = props.user.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  const logout = () => {
    logoutApi(config)
      .then((res) => {
        console.log(res);
        console.log("KLIK BERHASIL");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // logout();
  }, []);

  const deleteCookie = () => {
    removeCookie("user");
  };

  return (
    <div className={`col-lg-3 ${styles["wrapper-menu"]}`}>
      <div className={`${styles["menu"]}`}>
        <Link href={"/home"}>
          <p className={`${styles["menu-item"]}`}>
            <FontAwesomeIcon
              icon={faBorderAll}
              className={`${styles["icon"]}`}
            />
            Dashboard
          </p>
        </Link>
        <Link href={"/transfer"}>
          <p className={`${styles["menu-item"]}`}>
            <FontAwesomeIcon icon={faArrowUp} className={`${styles["icon"]}`} />
            Transfer
          </p>
        </Link>
        <Link href={"/topup"}>
          <p className={`${styles["menu-item"]}`}>
            <FontAwesomeIcon icon={faPlus} className={`${styles["icon"]}`} />
            Top Up
          </p>
        </Link>
        <Link href={"/profile"}>
          <p
            className={`${styles["menu-item"]}`}
            style={{ "margin-bottom": "310px" }}>
            <FontAwesomeIcon icon={faUser} className={`${styles["icon"]}`} />
            Profile
          </p>
        </Link>
        <Link href={"/"}>
          <p className={`${styles["menu-item"]}`}>
            <FontAwesomeIcon
              icon={faSignInAlt}
              className={`${styles["icon"]}`}
              style={{ "margin-bottom": 0 }}
            />
            Log Out
          </p>
        </Link>
      </div>
    </div>
  );
}

export default MenuSide;

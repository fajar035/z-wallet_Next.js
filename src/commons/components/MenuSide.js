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
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
// import { useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { logoutAction } from "src/redux/actions/auth";

function MenuSide(props) {
  const alert = withReactContent(Swal);
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.auth);
  const token = user.authUser.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  const onClickLogout = () => {
    alert
      .fire({
        icon: "warning",
        title: "Are you sure you want to logout?",
        showCancelButton: true,
        confirmButtonText: "Logout",
        cancelButtonText: `Cancel`
      })
      .then((result) => {
        if (result.isConfirmed) {
          console.log("LOGOUT!!!!");
          dispatch(logoutAction(config));
          router.push("/");
        }
      });
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
            style={{ marginBottom: "310px" }}>
            <FontAwesomeIcon icon={faUser} className={`${styles["icon"]}`} />
            Profile
          </p>
        </Link>

        <p className={`${styles["menu-item"]}`} onClick={onClickLogout}>
          <FontAwesomeIcon
            icon={faSignInAlt}
            className={`${styles["icon"]}`}
            style={{ marginBottom: 0 }}
          />
          Log Out
        </p>
      </div>
    </div>
  );
}

export default MenuSide;

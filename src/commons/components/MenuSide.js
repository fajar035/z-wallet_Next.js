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
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { logoutAction } from "src/redux/actions/auth";
import { topupApi } from "src/modules/topup/index";
import { updateUserAction } from "src/redux/actions/user";

function MenuSide() {
  const myId = useSelector((state) => state.user.user.id);
  const token = useSelector((state) => state.auth.authUser.token);
  const alert = withReactContent(Swal);
  const dispatch = useDispatch();
  const router = useRouter();

  // state
  const [amount, setAmount] = useState(0);
  const [url, setUrl] = useState("");
  const [msg, setMsg] = useState("");
  const [showSubmit, setShowSubmit] = useState(false);

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
          const config = {
            headers: { Authorization: `Bearer ${token}` }
          };
          dispatch(logoutAction(config));
          router.push("/");
        }
      });
  };

  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const onClickCloseModal = () => {
    dispatch(updateUserAction(myId, token));
  };

  const handleSubmit = () => {
    if (amount == 0)
      return alert.fire({
        icon: "warning",
        showConfirmButton: true,
        title: "Please fill in your top up amount"
      });
    const body = { amount: amount };
    topupApi(token, body)
      .then((res) => {
        console.log(res);
        setShowSubmit(true);
        setUrl(res.data.data.redirectUrl);
        setMsg(res.data.msg);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <>
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
              <FontAwesomeIcon
                icon={faArrowUp}
                className={`${styles["icon"]}`}
              />
              Transfer
            </p>
          </Link>
          {/* <Link href={"/topup"}> */}
          <p
            className={`${styles["menu-item"]}`}
            data-bs-toggle="modal"
            data-bs-target="#modalTopUp">
            <FontAwesomeIcon icon={faPlus} className={`${styles["icon"]}`} />
            Top Up
          </p>
          {/* </Link> */}
          <Link href={"/profile"}>
            <p
              className={`${styles["menu-item"]}`}
              style={{ marginBottom: "70%" }}>
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

      <div
        className="modal fade"
        id="modalTopUp"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className={`modal-title ${styles["title-modal"]}`}
                id="exampleModalLabel">
                Top up
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClickCloseModal}></button>
            </div>
            <div className={`modal-body ${styles["modal-body2"]}`}>
              <p className={styles["text-modal"]}>
                Enter the amount of money, and click submit
              </p>
              <input
                type="number"
                placeholder="Enter your top up amount"
                autoComplete="off"
                autoFocus
                onChange={onChangeAmount}
                className={styles["input-topup"]}
              />
              <p
                className={
                  !showSubmit ? styles["text-hide"] : styles["text-modal"]
                }>
                {msg},
                <Link href={url} passHref>
                  <a target="_blank" className={styles["link-topup"]}>
                    {" "}
                    Click !
                  </a>
                </Link>
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuSide;

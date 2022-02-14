import Layout from "src/commons/components/Layout";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "src/commons/styles/Profile.module.css";
import Header from "src/commons/components/Header";
import Footer from "src/commons/components/Footer/Footer";
import MenuSide from "src/commons/components/MenuSide";
import Loading from "src/commons/components/Loading";
import photoDefault from "public/picUserDefault.webp";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faArrowRight,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { logoutAction } from "src/redux/actions/auth";
import { useRouter } from "next/router";
import { updateImageApi, deleteImageApi } from "src/modules/user/index";
import { getUserAction } from "src/redux/actions/user";

function Profile(props) {
  const isLogin = true;
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const id = user.id;
  const image = useSelector((state) => state.user.user.image);
  const host = process.env.NEXT_PUBLIC_HOST;
  const photo = `${host}/uploads/${image}`;
  const token = useSelector((state) => state.auth.authUser.token);
  const alert = withReactContent(Swal);
  const inputFileRef = React.createRef();

  //state
  const [loading, setLoading] = useState(false);

  const inputImage = () => {
    inputFileRef.current.click();
  };

  const handlerEditImage = (e) => {
    const body = new FormData();
    body.append("image", e.target.files[0]);
    setLoading(true);
    updateImageApi(id, token, body)
      .then((res) => {
        console.log(res);
        dispatch(getUserAction(id, token));
        setLoading(false);
        alert.fire({
          title: "Upload Photo Success",
          icon: "success",
          showConfirmButton: false
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickDelete = () => {
    alert
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      })
      .then((result) => {
        if (result.isConfirmed) {
          setLoading(true);
          deleteImageApi(id, token)
            .then((res) => {
              alert.fire("Deleted!", "Your file has been deleted.", "success");
              dispatch(getUserAction(id, token));
              setLoading(false);
            })
            .catch((err) => {});
        }
      });
  };

  const onClickPersonal = () => {
    router.push("/profile/personal-information");
  };

  const onClickPassword = () => {
    router.push("/profile/change-password");
  };

  const onClickPin = () => {
    router.push("/profile/change-pin");
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
          const config = {
            headers: { Authorization: `Bearer ${token}` }
          };
          dispatch(logoutAction(config));
          router.push("/");
        }
      });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Layout title="Zwallet | Profile">
          <div className={`container-fluid p-0 ${styles.main}`}>
            <Header />

            <main className={`container-fluid ${styles["main-home"]}`}>
              <div className="row">
                <MenuSide />
                <div className={`col-lg-9 ${styles["wrapper-history"]}`}>
                  <div className={styles.history}>
                    <div className="row">
                      <div className="col-lg-12 d-flex flex-column justify-content-center align-items-center">
                        <Image
                          src={!image ? photoDefault : photo}
                          width={70}
                          height={70}
                          className={styles["img-profile"]}
                          objectFit="cover"
                        />
                        <input
                          type="file"
                          name="image"
                          hidden={true}
                          ref={inputFileRef}
                          onChange={(e) => {
                            handlerEditImage(e);
                          }}
                        />
                        <div className={styles["wrapper-options-photo"]}>
                          <p
                            className={styles["title-option-delete"]}
                            onClick={onClickDelete}>
                            <FontAwesomeIcon
                              icon={faTrashAlt}
                              className={styles["icon-options"]}
                            />
                            Delete
                          </p>
                          <p
                            className={styles["title-option-edit"]}
                            onClick={inputImage}>
                            <FontAwesomeIcon
                              icon={faPencilAlt}
                              className={styles["icon-options"]}
                            />{" "}
                            Edit
                          </p>
                        </div>
                        <p className={styles["title-name"]}>
                          {user.firstName + " " + user.lastName}
                        </p>
                        <p className={styles["title-phone"]}>{user.noTelp}</p>

                        <div className={styles.card} onClick={onClickPersonal}>
                          <p className={styles["title-card"]}>
                            Personal Information
                          </p>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className={styles["icon-card"]}
                          />
                        </div>

                        <div className={styles.card} onClick={onClickPassword}>
                          <p className={styles["title-card"]}>
                            Change Password
                          </p>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className={styles["icon-card"]}
                          />
                        </div>

                        <div className={styles.card} onClick={onClickPin}>
                          <p className={styles["title-card"]}>Change PIN</p>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className={styles["icon-card"]}
                          />
                        </div>

                        <div className={styles.card} onClick={onClickLogout}>
                          <p className={styles["title-card"]}>Logout</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            <Footer login={isLogin} />
          </div>
        </Layout>
      )}
    </>
  );
}

export default Profile;

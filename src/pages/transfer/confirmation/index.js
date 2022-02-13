import Layout from "src/commons/components/Layout";
import MenuSide from "src/commons/components/MenuSide";
import Header from "src/commons/components/Header";
import Footer from "src/commons/components/Footer/Footer";
import styles from "src/commons/styles/TransferConfirmation.module.css";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { updateUserAction } from "src/redux/actions/user";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { getUserIdApi } from "src/modules/user/index";
import Loading from "src/commons/components/Loading";
import photoDefault from "public/picUserDefault.webp";
import { checkPinApi } from "src/modules/user/index";
import { transferApi } from "src/modules/transactions";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function ConfirmationTransfer() {
  const isLogin = true;
  const transferDetail = useSelector((state) => state.transfer);
  const router = useRouter();
  const id = transferDetail.receiverId;
  const myId = useSelector((state) => state.user.user.id);
  console.log("MY ID", myId);
  console.log("ID RECEIVER", id);
  const token = useSelector((state) => state.auth.authUser.token);
  const balanceUser = useSelector((state) => state.user.user.balance);
  const balanceLeft = parseInt(balanceUser) - parseInt(transferDetail.balance);
  const alert = withReactContent(Swal);
  const dispatch = useDispatch();

  const formatBalanceUser = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  })
    .format(balanceUser)
    .replace(/(\.|,)00$/g, "");

  const formatTransferDetail = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  })
    .format(transferDetail.balance)
    .replace(/(\.|,)00$/g, "");

  const formatBalanceLeft = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  })
    .format(balanceLeft)
    .replace(/(\.|,)00$/g, "");

  // state
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);

  const getUserById = useCallback(() => {
    setLoading(true);
    getUserIdApi(id, token)
      .then((res) => {
        setName(`${res.data.data.firstName} ${res.data.data.lastName}`);
        setPhoto(res.data.data.image);
        setPhone(res.data.data.noTelp);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const handleChangePin = (e) => {
    setPin(e.target.value);
  };

  const handleContinue = () => {
    checkPinApi(pin, token)
      .then((res) => {
        alert.fire({
          position: "center",
          icon: "success",
          title: "Correct pin",
          showConfirmButton: false,
          timer: 1500
        });
        const body = {
          receiverId: transferDetail.receiverId,
          amount: transferDetail.balance,
          notes: transferDetail.note
        };
        transferApi(token, body)
          .then((res) => {
            dispatch(updateUserAction(myId, token));
            router.push("/transfer/success");
          })
          .catch((err) => {
            if (err) router.push("/transfer/failed");
          });
      })
      .catch((err) => {
        alert.fire({
          position: "center",
          icon: "error",
          title: "Wrong Pin",
          showConfirmButton: false,
          timer: 1500
        });
      });
  };

  useEffect(() => {
    getUserById();
    // checkPinApi();
  }, [getUserById]);
  return (
    <>
      <Layout title="Zwallet | Confirmation Transfer">
        <Header />
        <main className={`container-fluid ${styles["main-home"]}`}>
          <div className="row">
            <MenuSide />
            <div className={`col-lg-9 ${styles["wrapper"]}`}>
              <div className={styles["main"]}>
                <p className={styles.title}>Transfer to</p>
                <div className={`${styles["wrapper-card"]}`}>
                  <Image
                    src={!photo ? photoDefault : photo}
                    alt="photoDefault"
                    width={70}
                    height={70}
                    className={styles.img}
                    placeholder="blur"
                    blurDataURL={photoDefault}
                    onError={() => {
                      photoDefault;
                    }}
                  />

                  <div className="d-flex flex-column ms-5">
                    <p className={styles.name}>{name}</p>
                    <p className={styles.phone}>{!phone ? "-" : phone}</p>
                  </div>
                </div>

                <p className={styles.title}>Details</p>

                <div className={`${styles["wrapper-card2"]}`}>
                  <p className={styles["title-card"]}>Amount</p>
                  <p className={styles["value-card"]}>{formatBalanceUser}</p>
                </div>

                <div className={`${styles["wrapper-card2"]}`}>
                  <p className={styles["title-card"]}>Balance Left</p>
                  <p className={styles["value-card"]}>{formatBalanceLeft}</p>
                </div>

                <div className={`${styles["wrapper-card2"]}`}>
                  <p className={styles["title-card"]}>Date & Time</p>
                  <p className={styles["value-card"]}>{transferDetail.date}</p>
                </div>

                <div className={`${styles["wrapper-card2"]}`}>
                  <p className={styles["title-card"]}>Notes</p>
                  <p className={styles["value-card"]}>{transferDetail.note}</p>
                </div>

                <div className={styles["wrapper-btn-confirm"]}>
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className={styles["btn-confirm"]}>
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer login={isLogin} />
      </Layout>

      {/* modal */}

      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Enter PIN to Transfer
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>
                Enter your 6 digits PIN for confirmation to continue
                transferring money.
              </p>
              <input
                type="password"
                placeholder="Input Pin"
                autoComplete="off"
                autoFocus
                maxLength={6}
                onChange={handleChangePin}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleContinue}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmationTransfer;

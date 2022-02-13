import Layout from "src/commons/components/Layout";
import MenuSide from "src/commons/components/MenuSide";
import Header from "src/commons/components/Header";
import Footer from "src/commons/components/Footer/Footer";
import styles from "src/commons/styles/TransferConfirmation.module.css";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { updateUserAction } from "src/redux/actions/user";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getUserIdApi } from "src/modules/user/index";
import Loading from "src/commons/components/Loading";
import photoDefault from "public/picUserDefault.webp";
import { checkPinApi } from "src/modules/user/index";
import { transferApi } from "src/modules/transactions";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

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
  // const dispatch = useDispatch();

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
  const [loading, setLoading] = useState(false);

  const getUserById = () => {
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
  };

  useEffect(() => {
    getUserById();
    // checkPinApi();
  }, [getUserById]);
  return (
    <>
      <Layout title="Zwallet | Transfer Failed">
        <Header />
        <main className={`container-fluid ${styles["main-home"]}`}>
          <div className="row">
            <MenuSide />
            <div className={`col-lg-9 ${styles["wrapper"]}`}>
              <div className={styles["main"]}>
                <div className={styles.status}>
                  <FontAwesomeIcon
                    icon={faPlusCircle}
                    className={styles["icon-failed"]}
                  />
                  <p className={styles["title-status"]}>Transfer Failed</p>
                  <p className={styles["msg-status"]}>
                    We can’t transfer your money at the moment, we recommend you
                    to check your internet connection and try again.
                  </p>
                </div>

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

                <div className={styles["wrapper-btn-confirm"]}>
                  <button className={styles["btn-confirm"]}>Try Again</button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer login={isLogin} />
      </Layout>
    </>
  );
}

export default ConfirmationTransfer;

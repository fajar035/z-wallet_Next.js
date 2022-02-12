import Layout from "src/commons/components/Layout";
import MenuSide from "src/commons/components/MenuSide";
import Header from "src/commons/components/Header";
import Footer from "src/commons/components/Footer/Footer";
import styles from "src/commons/styles/TransferDetail.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getUserIdApi } from "src/modules/user/index";
import Loading from "src/commons/components/Loading";
import photoDefault from "public/picUserDefault.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { transferDetailAction } from "src/redux/actions/transfer";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function transferDetail() {
  const isLogin = true;
  const router = useRouter();
  const id = router.query.transferId;
  const token = useSelector((state) => state.auth.authUser.token);
  const balanceUser = useSelector((state) => state.user.user.balance);
  const dispatch = useDispatch();
  const alert = withReactContent(Swal);
  // state
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [balance, setbalance] = useState("");
  const [note, setNote] = useState("");

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
  }, []);

  const formatBalanceUser = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  })
    .format(balanceUser)
    .replace(/(\.|,)00$/g, "");

  const handleChangeNote = (e) => {
    setNote(e.target.value);
  };

  const handleChangeBalance = (e) => {
    setbalance(e.target.value);
  };

  const onclickConfirm = () => {
    const receiverId = router.query.transferId;
    const d = new Date();
    function addZero(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
    const m = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const day = d.getDay();
    const month = m[d.getMonth()];
    const year = d.getFullYear();
    const hours = addZero(d.getHours());
    const minutes = addZero(d.getMinutes());
    const date = `${month} ${day}, ${year} - ${hours}.${minutes}`;
    const data = {
      receiverId,
      balance,
      note,
      date
    };

    if (balance >= balanceUser)
      return alert.fire({
        position: "center",
        icon: "warning",
        title: "Sorry, your balance is not enough",
        showConfirmButton: true
      });
    if (balance <= 1000)
      return alert.fire({
        position: "center",
        icon: "warning",
        title: "Please input amount > 1000 Rupiah",
        showConfirmButton: true
      });
    dispatch(transferDetailAction(data));
    router.push("confirmation");
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Layout title="Zwallet | Transfer Detail">
          <Header />
          <main className={`container-fluid ${styles["main-home"]}`}>
            <div className="row">
              <MenuSide />
              <div className={`col-lg-9 ${styles["wrapper"]}`}>
                <div className={styles["main"]}>
                  <p className={styles.title}>Transfer Money</p>
                  <div className={`${styles["wrapper-card"]}`}>
                    <Image
                      src={!photo ? photoDefault : photo}
                      alt="photoDefault"
                      width={70}
                      height={70}
                      className={styles.img}
                    />

                    <div className="d-flex flex-column ms-5">
                      <p className={styles.name}>{name}</p>
                      <p className={styles.phone}>{!phone ? "-" : phone}</p>
                    </div>
                  </div>

                  <p className={styles.info}>
                    Type the amount you want to transfer and then
                  </p>
                  <p className={styles.info}>
                    press continue to the next steps.
                  </p>

                  <div className={styles["wrapper-input-cash"]}>
                    <input
                      type="text"
                      placeholder="0,00"
                      className={styles["input-cash"]}
                      onChange={handleChangeBalance}
                    />
                  </div>
                  <p className={styles["cash-available"]}>
                    {formatBalanceUser} Available
                  </p>
                  <div className="d-flex justify-content-center">
                    <div
                      className={
                        note.length > 0
                          ? styles["wrapper-input-note-isi"]
                          : styles["wrapper-input-note"]
                      }>
                      <FontAwesomeIcon
                        icon={faPencilAlt}
                        className={
                          note.length > 0 ? styles["icon-filled"] : styles.icon1
                        }
                      />
                      <input
                        type="text"
                        name="note"
                        placeholder="Add some notes"
                        autoComplete="off"
                        className={styles["input-note"]}
                        onChange={handleChangeNote}
                      />
                    </div>
                  </div>
                  <div className={styles["wrapper-btn-confirm"]}>
                    <button
                      className={styles["btn-confirm"]}
                      onClick={onclickConfirm}>
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer login={isLogin} />
        </Layout>
      )}
    </>
  );
}

export default transferDetail;

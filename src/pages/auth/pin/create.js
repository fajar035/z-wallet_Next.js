import ColumnLeft from "../../../commons/components/Auth/ColumnLeft";
import styles from "../../../commons/styles/Createpin.module.css";
import Layout from "../../../commons/components/Layout";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePinApi } from "src/modules/user";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Loading from "src/commons/components/Loading";
import { updatePinAction } from "src/redux/actions/auth";

function CreatePin() {
  const dispatch = useDispatch();
  const router = useRouter();
  const alert = withReactContent(Swal);
  const user = useSelector((state) => state.auth);
  const { id, token } = user.authUser;
  const [pin, setPin] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setPin([...pin.map((d, idx) => (idx === index ? element.value : d))]);
  };
  const dataPin = {
    pin: parseInt(pin.join(""))
  };

  const handlerClickConfirm = () => {
    setLoading(true);
    // dispatch(updatePinAction(id, token, dataPin));
    updatePinApi(id, token, dataPin)
      .then((res) => {
        setLoading(false);
        console.log(res);
        alert
          .fire({
            icon: "success",
            title: "Create Pin Success"
          })
          .then((result) => {
            if (result.isConfirmed) {
              setLoading(true);
              router.push("/home");
            }
          });
      })
      .catch((err) => {
        setLoading(false);
        alert.fire({
          title: "Input cannot be empty",
          text: "Please fill in the correct",
          icon: "error"
        });
      });
  };

  console.log("LOADING >>>", loading);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Layout title="Zwallet | Create Pin">
          <div className="container-fluid p-0">
            <div className="row">
              <ColumnLeft />

              <div className={`col-lg-6 ${styles["col-right"]}`}>
                <div className={`${styles["wrapper-form"]}`}>
                  <h1 className={`${styles["title-form"]}`}>
                    Start Accessing Banking Needs With All Devices and All
                    Platforms With 30.000+ Users
                  </h1>
                  <p className={`${styles["form-description"]}`}>
                    Transfering money is eassier than ever, you can access
                    Zwallet wherever you are. Desktop, laptop, mobile phone? we
                    cover all of that for you!
                  </p>
                  <div className={`${styles["main-input"]}`}>
                    {pin.map((data, index) => {
                      return (
                        <div
                          className={`${styles["wrapper-input"]}`}
                          key={index}>
                          <input
                            type="text"
                            className={`${styles["input"]}`}
                            maxLength="1"
                            value={data}
                            onChange={(e) => handleChange(e.target, index)}
                            onFocus={(e) => e.target.select()}
                          />
                        </div>
                      );
                    })}
                  </div>

                  <button
                    className={`${styles["btn-confirm"]}`}
                    onClick={handlerClickConfirm}>
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
}

export default CreatePin;

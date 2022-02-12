import Image from "next/image";
import styles from "src/commons/styles/CardHistory.module.css";
import photoDefault from "public/picUserDefault.webp";
import { useState } from "react";

function CardHistory(props) {
  const host = process.env.NEXT_PUBLIC_HOST;
  const checkPhoto = props.history.image;
  const photo = `${host}/uploads/${props.history.image}`;
  const type = props.history.type;
  // state
  const [photoState, setPhoto] = useState(photo);

  const formatAmount = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  })
    .format(props.history.amount)
    .replace(/(\.|,)00$/g, "");
  console.log(type);
  return (
    <div className={`row ${styles["wrapper-card"]}`}>
      <div className={`col-lg-8 `}>
        <div className="row ">
          <div className="col-lg-4 p-2 d-flex justify-content-center">
            <Image
              src={!checkPhoto ? photoDefault : photoState}
              placeholder="blur"
              blurDataURL={photoDefault}
              onError={() => setPhoto(photoDefault)}
              // src={!checkPhoto ? photoDefault : photo}
              alt="photo user"
              className={styles["img-user"]}
              width={90}
              height={90}
            />
          </div>
          <div className="col-lg-8 d-flex flex-column  justify-content-around">
            <p
              className={
                styles.name
              }>{`${props.history.firstName} ${props.history.lastName}`}</p>
            <p className={styles.status}>{props.history.type}</p>
          </div>
        </div>
      </div>
      <div
        className={`col-lg-4 d-flex align-items-center justify-content-end p-0`}>
        <p
          className={
            type == "send" ? styles["amount-out"] : styles["amount-in"]
          }>
          {type == "send" ? "-" : "+"}
          {formatAmount}
        </p>
      </div>
    </div>
  );
}

export default CardHistory;

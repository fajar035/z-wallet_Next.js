import Image from "next/image";
import styles from "src/commons/styles/CardHistory.module.css";
import photoDefault from "src/commons/assets/images/photo-profile-default.webp";

function CardHistory(props) {
  console.log("PROPS-CARD-HISTORY", props);
  const host = process.env.NEXT_PUBLIC_HOST;
  return (
    <div className={`row ${styles["wrapper-card"]}`}>
      <div className={`col-lg-8 `}>
        <div className="row ">
          <div className="col-lg-4 p-2 d-flex justify-content-center">
            <Image
              src={`${host}/uploads/${props.history.image}`}
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
            <p className={styles.status}>{props.history.status}</p>
          </div>
        </div>
      </div>
      <div className={`col-lg-4 d-flex align-items-center justify-content-end`}>
        {props.history.amount}
      </div>
    </div>
  );
}

export default CardHistory;

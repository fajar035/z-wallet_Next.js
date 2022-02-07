import Image from "next/image";
import styles from "src/commons/styles/CardHistory.module.css";
import photoDefault from "src/commons/assets/images/photo-profile-default.webp";

function CardHistory() {
  return (
    <div className={`row ${styles["wrapper-card"]}`}>
      <div className={`col-lg-8 `}>
        <div className="row ">
          <div className="col-lg-4 p-2">
            <Image
              src={photoDefault}
              alt="photo user"
              className={styles["img-user"]}
              width={200}
              height={200}
            />
          </div>
          <div className="col-lg-8 d-flex flex-column  justify-content-around">
            <p className={styles.name}>Name</p>
            <p className={styles.status}>Status</p>
          </div>
        </div>
      </div>
      <div className={`col-lg-4 d-flex align-items-center justify-content-end`}>
        Price
      </div>
    </div>
  );
}

export default CardHistory;

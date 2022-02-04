import Image from "next/image";
import imgAuth from "../../assets/images/img-auth.png";
import styles from "../../styles/Login.module.css";

function ColumnLeft() {
  return (
    <div className={`col-lg-6 ${styles["col-left"]}`}>
      <h1 className={`${styles["title"]}`}>Zwallet</h1>

      <div className={`${styles["wrapper-img"]}`}>
        <Image
          src={imgAuth}
          alt="img-auth"
          width={400}
          height={500}
          className={`${styles["img-auth"]}`}
        />
      </div>
      <div className={`${styles["wrapper-description"]}`}>
        <p className={`${styles["title-description"]}`}>
          App that Covering Banking Needs.
        </p>
        <p className={`${styles["description"]}`}>
          Zwallet is an application that focussing in banking needs for all
          users in the world. Always updated and always following world trends.
          5000+ users registered in Zwallet everyday with worldwide users
          coverage.
        </p>
      </div>
    </div>
  );
}

export default ColumnLeft;

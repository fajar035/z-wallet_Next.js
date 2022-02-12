import Image from "next/image";
import styles from "src/commons/styles/CardReceiver.module.css";
import photoDefault from "public/picUserDefault.webp";
import Link from "next/link";

function CardReceiver(props) {
  const host = process.env.NEXT_PUBLIC_HOST;
  const checkPhoto = props.image;
  const photo = host + "/uploads/" + props.image;
  const name = props.firstName + " " + props.lastName;
  const phone = props.noTelp;
  const id = props.id;

  return (
    <Link href={`transfer/${id}`}>
      <div className={`${styles["wrapper-card"]}`}>
        <Image
          src={!checkPhoto ? photoDefault : photo}
          alt="photoDefault"
          width={70}
          height={70}
          className={styles.img}
        />

        <div className="d-flex flex-column">
          <p className={styles.name}>{name}</p>
          <p className={styles.phone}>{!phone ? "-" : phone}</p>
        </div>
      </div>
    </Link>
  );
}

export default CardReceiver;

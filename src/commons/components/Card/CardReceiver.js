import Image from "next/image";
import styles from "src/commons/styles/CardReceiver.module.css";
import photoDefault from "src/commons/assets/images/photo-profile-default.webp";

function CardReceiver(props) {
  const host = process.env.NEXT_PUBLIC_HOST;
  console.log(props);
  return (
    <div className={`${styles["wrapper-card"]}`}>
      {/* <Image src={host +}/> */}
      Card Receiver
    </div>
  );
}

export default CardReceiver;

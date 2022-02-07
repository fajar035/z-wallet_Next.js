import styles from "../../styles/Footer.module.css";

const Private = (props) => {
  return (
    <footer className="row p-lg-3 bg-primary">
      <div className="col-lg-8">
        <p className={`${styles["footer-contact"]}`}>
          2020 Zwallet. All right reserved.
        </p>
      </div>
      <div className="col-lg-2">
        <p className={`${styles["footer-contact"]}`}>+62 5637 8882 9901</p>
      </div>
      <div className="col-lg-2">
        <p className={`${styles["footer-contact"]}`}>contact@zwallet.com</p>
      </div>
    </footer>
  );
};

export default Private;

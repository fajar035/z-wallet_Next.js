import styles from "../../styles/Footer.module.css"

const Public = (props) => {
  return (
    <footer className="row p-lg-5 bg-primary">
      <div className="col-lg-12 border-bottom mb-lg-4">
        <h1 className={`mb-lg-3 ${styles["title"]}`}>Zwallet</h1>
        <div className="col-lg-3 mb-lg-5">
          <p className={`${styles["description"]}`}>
            Simplify financial needs and saving much time in banking needs with
            one single app.
          </p>
        </div>
      </div>
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

export default Public;
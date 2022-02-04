import styles from "../../styles/Header.module.css";
import Public from "./Public";
import Private from "./Private";

function Header(props) {
  console.log("LOGIN", props);
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light ps-lg-5 pe-lg-5 ${styles["wrapper-navbar"]}`}>
      <div className="container-fluid">
        <a className={`navbar-brand ${styles.title}`} href="#">
          Zwallet
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {props.login ? <Private /> : <Public />}
      </div>
    </nav>
  );
}

export default Header;

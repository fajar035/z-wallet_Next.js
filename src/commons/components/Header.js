import styles from "../styles/Header/module.css";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Zwallet
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-flex justify-content-end p-3"
          id="navbarSupportedContent">
          <div className="wrapper-button">
            <button className={`styles["btn-login"]`}>Login</button>
            <button className="btn-signup">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

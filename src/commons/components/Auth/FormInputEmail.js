import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/Forgot.module.css";

function FormInputEmail() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={`${styles["wrapper-input"]} `}>
        <FontAwesomeIcon icon={faEnvelope} className={`${styles["icon"]}`} />
        <input
          type="email"
          name="email"
          // {...register("email")}
          placeholder="Enter your e-mail"
          className={`${styles["input"]}`}
        />
      </div>
      <button type="submit" className={`${styles["btn-login"]}`}>
        Confirm
      </button>
    </form>
  );
}

export default FormInputEmail;

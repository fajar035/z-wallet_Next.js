import styles from "src/commons/styles/Forgot.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

function FormInputNewPassword(props) {
  console.log("PROPS-NEW-PASSWORD", props);

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={`${styles["wrapper-input"]}`}>
        <FontAwesomeIcon icon={faLock} className={`${styles["icon"]}`} />
        <input
          type="password"
          name="password"
          // {...register("password")}
          placeholder="Create new password"
          className={`${styles["input"]}`}
        />
      </div>
      <div className={`${styles["wrapper-input"]}`}>
        <FontAwesomeIcon icon={faLock} className={`${styles["icon"]}`} />
        <input
          type="password"
          name="password"
          // {...register("password")}
          placeholder="Create new password"
          className={`${styles["input"]}`}
        />
      </div>
      <button type="submit" className={`${styles["btn-login"]}`}>
        Reset Password
      </button>
    </form>
  );
}

export default FormInputNewPassword;

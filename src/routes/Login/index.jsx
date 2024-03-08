import { useOutletContext } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";

export default function Login() {
  const [currentUser, setCurrentUser] = useOutletContext();
  const [emailInputValue, setEmailInputValue] = useState();
  const [passwordInputValue, setPasswordInputValue] = useState();

  return (
    <div className={styles.form_container}>
      {currentUser ? (
        <p>
          Nice to see you {currentUser.email}! <br></br> Happy shopping!
        </p>
      ) : (
        <>
          <p>
            Sweet to see you again! 🍬 <br></br>Login and treat yourself to a
            delightful experience!
          </p>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setCurrentUser({
                email: emailInputValue,
                password: passwordInputValue,
              });
            }}
            className={styles.login_form}
          >
            <div className={styles.form_item}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(event) => setEmailInputValue(event.target.value)}
              ></input>
            </div>

            <div className={styles.form_item}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(event) => setPasswordInputValue(event.target.value)}
              ></input>
            </div>

            <button type="submit">Login</button>
          </form>
        </>
      )}
    </div>
  );
}

import { useState, useEffect, useContext } from "react";
import styles from "./styles.module.css";
import { UserContext } from "../../../Context /creatConext";
import { useHistory } from "react-router-dom";

import axios from "axios";

export default function Login() {
  const { user, login } = useContext(UserContext);

  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (user) {
      history.push("/Home");
    }
  }, [user, history]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (emailInputValue && passwordInputValue) {
      try {
        const response = await axios.get(
          `https://shopping-app-backend-6p1u.onrender.com/users/${emailInputValue}`
        );
        const fetchedUser = response.data[0];
        if (fetchedUser.password === passwordInputValue) {
          login(fetchedUser);
        } else {
          console.log("Falsches Passwort");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Bitte geben Sie E-Mail und Passwort ein");
    }
  };

  return (
    <div className={styles.form_container}>
      {user ? (
        <p>
          Schön, dich wieder zu sehen, {user.email}! <br></br>
          Viel Spaß beim Einkaufen!
        </p>
      ) : (
        <>
          <p>
            Schön, dich wieder zu sehen! 🍬 <br></br>
            Melden Sie sich an und gönnen Sie sich ein angenehmes Erlebnis!
          </p>

          <form onSubmit={handleSubmit} className={styles.login_form}>
            <div className={styles.form_item}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={emailInputValue}
                onChange={(event) => setEmailInputValue(event.target.value)}
              ></input>
            </div>

            <div className={styles.form_item}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={passwordInputValue}
                onChange={(event) => setPasswordInputValue(event.target.value)}
              ></input>
            </div>

            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
}

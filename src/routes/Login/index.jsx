import { useState, useContext } from "react";
import styles from "./styles.module.css";
import { UserContext } from "../../../Context/createContext";
import axios from "axios";

export default function Login() {
  const { user, login } = useContext(UserContext);

  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  console.log(user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (emailInputValue && passwordInputValue) {
      try {
        const usersList = await axios.get(
          `https://shopping-app-backend-6p1u.onrender.com/users`
        );

        if (usersList) {
          let user = usersList.data.find((user) => {
            if (user.email === emailInputValue) {
              return user;
            }
          });

          if (user.password === passwordInputValue) {
            login(user);
          } else {
            console.log("Wrong Password");
          }
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Please enter email and password");
    }
  };

  return (
    <div className={styles.form_container}>
      {user?.nickName ? (
        <p>
          Welcome back, {user?.nickName}! <br />
          Enjoy your shopping!
        </p>
      ) : (
        <>
          <p>
            Nice to see you again! 🍬 <br />
            Log in and treat yourself to a pleasant experience!
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

import styles from "./styles.module.css";
import logo from "../../assets/images/logo.jpeg";
import { Link, useOutletContext } from "react-router-dom";

export default function Header({ currentUser, setCurrentUser }) {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo_container}>
          <Link to={"/"}>
            <img src={logo} alt="logo"></img>
          </Link>
        </div>

        <ul>
          <li>
            {" "}
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
          <li>
            <Link to={"/promo"}>Promo</Link>
          </li>
        </ul>
      </div>

      {currentUser ? (
        <div className={styles.currentUser_container}>
          <p>{currentUser.email}</p>
          <button
            className={styles.login_btn}
            onClick={() => {
              setCurrentUser("");
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <Link to={"/login"} className={styles.login_btn}>
          Login
        </Link>
      )}
    </header>
  );
}

import styles from "./styles.module.css";
import logo from "../../assets/images/logo.jpeg";

export default function Header() {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo_container}>
          <img src={logo} alt="logo"></img>
        </div>

        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Promo</li>
        </ul>
      </div>

      <button>Login</button>
    </header>
  );
}

import React from "react";
import styles from "./header.module.css";
import logo from "../../assets/images/logo.jpeg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../Context /creatConext";
export default function Header() {
  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    if (
      window.confirm(
        "Are you really sure you want to logout and risk breaking Raghd's, Peter's, and Stacy's sweet little hearts? 💔👟\nBe warned, they might just unleash a virtual storm of sadness and angry emojis on you! 😢😠💻"
      )
    ) {
      logout();
    }
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.header_container}`}>
        <div className={styles.logo_container}>
          <Link to={"/"}>
            <img src={logo} alt="logo"></img>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.header_nav}>
            {user?.nickName ? (
              <li className={styles.menu_container}>
                <Link to="/profile" className={styles.header_link}>
                  {user?.nickName}
                </Link>
                <div className={styles.menu}>
                  <Link to="/profile" className={styles.header_link}>
                    Profile
                  </Link>
                  <Link to="/orders" className={styles.header_link}>
                    Orders
                  </Link>
                  <a onClick={handleLogout} className={styles.header_link}>
                    Logout
                  </a>
                </div>
              </li>
            ) : (
              <Link to="/login" className={styles.header_link}>
                Login
              </Link>
            )}
          </ul>
        </nav>
        <div className={styles.nav}>
          <ul className={styles.header_nav}>
            <li className={styles.header_nav_item}>
              <Link to={"/"} className={styles.header_link}>
                Home
              </Link>
            </li>
            <li className={styles.header_nav_item}>
              <Link to={"/products"} className={styles.header_link}>
                Products
              </Link>
            </li>
            <li className={styles.header_nav_item}>
              <Link to={"/promo"} className={styles.header_link}>
                Promo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

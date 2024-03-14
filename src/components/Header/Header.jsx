import React from "react";
import styles from "./header.module.css";
import logo from "../../assets/images/logo.jpeg";
import { Link, NavLink } from "react-router-dom";
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
                <NavLink
                  to="/profile"
                  className={styles.header_link}
                  activeClassName={styles.active}
                >
                  {user?.nickName}
                </NavLink>
                <div className={styles.menu}>
                  <NavLink
                    to="/profile"
                    className={styles.header_link}
                    activeClassName={styles.active}
                  >
                    Profile
                  </NavLink>
                  <NavLink
                    to="/orders"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Orders
                  </NavLink>
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
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "green" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className={styles.header_nav_item}>
              <NavLink
                to={"/products"}
                className={styles.header_link}
                activeClassName={styles.active}
              >
                Products
              </NavLink>
            </li>
            <li className={styles.header_nav_item}>
              <NavLink
                to={"/promo"}
                className={styles.header_link}
                activeClassName={styles.active}
              >
                Promo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

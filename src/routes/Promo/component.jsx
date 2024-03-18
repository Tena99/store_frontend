import QRCodeComponent from "../../components/QR-Code";
import { UserContext } from "../../../Context/createContext";
import { useContext } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default function Promo() {
  const { user, login } = useContext(UserContext);

  return (
    <div className={styles.promo_container}>
      <h2>Latest Promotions</h2>

      <article className={styles.promo_item}>
        <div className={styles.promo_card}>
          <img
            src={
              "https://shopping-app-backend-6p1u.onrender.com/images/promo_50.jpeg"
            }
            alt="promo"
          ></img>
          <p>50% off all products!</p>
        </div>

        <div className={styles.promo_card}>
          <img
            src={
              "https://shopping-app-backend-6p1u.onrender.com/images/promo_free_shipping.jpeg"
            }
            alt="promo"
          ></img>
          <p>Free shipping on orders over $100!</p>
        </div>

        <div className={styles.promo_card}>
          <img
            src={
              "https://shopping-app-backend-6p1u.onrender.com/images/promo_buy_one.jpeg"
            }
            alt="promo"
          ></img>
          <p>Buy one get one free!</p>
        </div>
      </article>

      {user ? (
        <article className={styles.promo_item}>
          <div className={styles.promo_qr_code}>
            <QRCodeComponent value={`{userId: ${user._id}, discount: 10 }`} />
          </div>

          <div>
            <h3>Sweet Scan, Sweeter Savings!</h3>
            <p>
              Unlock the flavor of savings with our QR code! Scan our QR code
              and savor a delightful 10% off your sweet purchases at "Sweets for
              all". Don't miss this chance to make your treats even more
              deliciously affordable!
            </p>
          </div>
        </article>
      ) : (
        <article className={styles.promo_item}>
          Do you want to receive a really cool discount? Just
          <Link to={"/login"}>login</Link> and you will be able to see all our
          promotions here!
        </article>
      )}
    </div>
  );
}

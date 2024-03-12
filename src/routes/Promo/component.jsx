import QRCodeComponent from "../../components/QR-Code";
import { UserContext } from "../../../Context /creatConext";
import { useContext } from "react";
import styles from "./styles.module.css";
import skeleton from "../../assets/images/skeleton.jpeg";

export default function Promo() {
  const { user, login } = useContext(UserContext);

  return (
    <div className={styles.promo_container}>
      <h2>Latest Promotions</h2>

      <article className={styles.promo_item}>
        <div className={styles.promo_card}>
          <img src={skeleton} alt="promo"></img>
          <p>50% off all products!</p>
        </div>

        <div className={styles.promo_card}>
          <img src={skeleton} alt="promo"></img>
          <p>Free shipping on orders over $100!</p>
        </div>

        <div className={styles.promo_card}>
          <img src={skeleton} alt="promo"></img>
          <p>Buy one get one free!</p>
        </div>
      </article>

      <article className={styles.promo_item}>
        <div className={styles.promo_qr_code}>
          <QRCodeComponent value={"Some value"} />
        </div>

        <div>
          <h3>Sweet Scan, Sweeter Savings!</h3>
          <p>
            Unlock the flavor of savings with our QR code! Scan our QR code and
            savor a delightful 10% off your sweet purchases at "Sweets for all".
            Don't miss this chance to make your treats even more deliciously
            affordable!
          </p>
        </div>
      </article>
    </div>
  );
}

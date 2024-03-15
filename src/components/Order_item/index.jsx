import styles from "./styles.module.css";
import { useState } from "react";

export default function Order_item({ title, price }) {
  const [amount, setAmount] = useState(0);

  function increment() {
    if (amount < 10) {
      setAmount(amount + 1);
    }
  }

  function decrement() {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  }

  return (
    <div className={styles.container}>
      <h3>{title}</h3>

      <div className={styles.amount_container}>
        <button onClick={decrement}>-</button>
        <p>{amount}</p>
        <button onClick={increment}>+</button>
      </div>

      <button>X</button>
    </div>
  );
}

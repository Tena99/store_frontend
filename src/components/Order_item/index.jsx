import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../Context/createContext";
import axios from "axios";

export default function Order_item({ title, price, id, serverAmount }) {
  const { user, login } = useContext(UserContext);
  const [amount, setAmount] = useState(serverAmount);

  useEffect(() => {
    async function changeAmount() {
      const requestBody = {
        userId: user._id,
        amount: amount,
      };

      const url = `https://shopping-app-backend-6p1u.onrender.com/products/${id}`;

      axios.patch(url, requestBody);
      // .then((response) => {
      //   console.log("Response:", response.data);
      // })
      // .catch((error) => {
      //   console.error("Error:", error.response.data);
      // });
    }

    changeAmount();
  }, [amount]);

  async function deleteItem() {
    const requestBody = {
      userId: user._id,
    };

    console.log(id);
    const url = `https://shopping-app-backend-6p1u.onrender.com/products/${id}/${user._id}`;

    axios.delete(url, requestBody);
    // .then((response) => {
    //   console.log("Response:", response.data);
    // })
    // .catch((error) => {
    //   console.error("Error:", error.response.data);
    // });
  }

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

      <button onClick={deleteItem}>X</button>
    </div>
  );
}

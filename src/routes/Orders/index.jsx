import styles from "./styles.module.css";
import { useContext } from "react";
import { UserContext } from "../../../Context/createContext";

export default function Orders() {
  const { user, login } = useContext(UserContext);

  return (
    <div>
      {user.cart.length ? (
        user.cart.map((item) => {
          return <div key={item._id}>{item.name}</div>;
        })
      ) : (
        <div>No products</div>
      )}
    </div>
  );
}

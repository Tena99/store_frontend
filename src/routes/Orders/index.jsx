import styles from "./styles.module.css";
import { useContext } from "react";
import { UserContext } from "../../../Context/createContext";
import Order_item from "../../components/Order_item";

export default function Orders() {
  const { user, login } = useContext(UserContext);

  return (
    <div>
      {user.cart.length ? (
        user.cart.map((item) => {
          return (
            <Order_item
              key={item._id._id}
              id={item._id._id}
              title={item._id.name}
              price={item._id.price}
              serverAmount={item.amount}
              discountedPrice={item.discountedPrice}
              discountPercetage={user.discount}
            />
          );
        })
      ) : (
        <div>No products</div>
      )}
    </div>
  );
}

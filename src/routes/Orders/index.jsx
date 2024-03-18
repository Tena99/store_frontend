import styles from "./styles.module.css";
import { useContext } from "react";
import { UserContext } from "../../../Context/createContext";
import Order_item from "../../components/Order_item";
import { Link } from "react-router-dom";

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
        <div className={styles.empty_message}>
          Your cart is currently empty. Feel free to explore our
          <Link className={styles.products_link} to={"/products"}>
            products
          </Link>
          section and add items to your cart.
        </div>
      )}
    </div>
  );
}

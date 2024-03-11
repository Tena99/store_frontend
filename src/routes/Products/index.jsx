import styles from "./styles.module.css";
import { UserContext } from "../../../Context /creatConext";
import { useContext } from "react";

export default function Products() {
  const { user, login } = useContext(UserContext);

  return <div>Hi! I am product list</div>;
}

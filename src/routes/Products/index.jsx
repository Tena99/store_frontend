import styles from "./styles.module.css";
import { UserContext } from "../../../Context /creatConext";
import { useContext } from "react";
import Card from "../../components/Card";

export default function Products() {
  const { user, login } = useContext(UserContext);

  return (
    <div>
      <Card />
    </div>
  );
}

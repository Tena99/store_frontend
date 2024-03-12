import styles from "./styles.module.css";
import chocolate_img from "../../assets/images/chocolate.jpg";
import cupcakes_img from "../../assets/images/cupcakes.jpg";
import cakes_img from "../../assets/images/cakes.jpg";
import { useEffect, useReducer } from "react";
import Thumbnails from "../../components/Card";
import { getAll } from "../../services/sweetService";

const reducer = (state, action) => {
  switch (action.type) {
    case "Sweets_loaded":
      return { ...state, sweets: action.payload };
    default:
      return state;
  }
};

export default function Home() {
  const [state, dispatch] = useReducer(reducer, { sweets: [] });
  const { sweets } = state;

  useEffect(() => {
    getAll().then((sweets) =>
      dispatch({ type: "Sweets_loaded", payload: sweets })
    );
  }, []);

  return (
    <>
      <Thumbnails sweets={sweets} />
    </>
  );
}

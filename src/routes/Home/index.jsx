import { useEffect, useReducer } from "react";
import Thumbnails from "../../components/Thumbnails/Thumbnails";
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

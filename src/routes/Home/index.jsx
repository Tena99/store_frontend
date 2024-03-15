import styles from "./styles.module.css";
import Card from "../../components/Card";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [productList, setProductList] = useState();

  useEffect(() => {
    async function fetchTopProducts() {
      let { data } = await axios.get(
        `https://shopping-app-backend-6p1u.onrender.com/products/featured`
      );

      setProductList(data);
    }

    fetchTopProducts();
  }, []);

  return (
    <div>
      {productList ? (
        productList.map((product) => (
          <Card
            product={product}
            imgSrc={`https://shopping-app-backend-6p1u.onrender.com/images/${product._id}.jpeg`}
          ></Card>
        ))
      ) : (
        <div>Loading... Please wait</div>
      )}
    </div>
  );
}

import styles from "./styles.module.css";
import Card from "../../components/Card";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Products() {
  const [productList, setProductList] = useState();

  useEffect(() => {
    async function fetchProducts() {
      let { data } = await axios.get(
        `https://shopping-app-backend-6p1u.onrender.com/products`
      );

      setProductList(data);
    }

    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      {productList ? (
        productList.map((product) => (
          <Card
            key={product._id}
            product={product}
            imgSrc={`https://shopping-app-backend-6p1u.onrender.com/images/${product._id}.jpeg`}
          ></Card>
        ))
      ) : (
        <div>Loading... Please wait.</div>
      )}
    </div>
  );
}

import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function DetailedInfo() {
  let { id } = useParams();
  console.log(id);

  const [productInfo, setProductInfo] = useState();

  console.log(productInfo);

  useEffect(() => {
    async function fetchProductInfo() {
      let { data } = await axios.get(
        `https://shopping-app-backend-6p1u.onrender.com/products/${id}`
      );

      setProductInfo(data);
    }

    fetchProductInfo();
  }, []);

  return (
    <div>
      {productInfo ? (
        <ul>
          <li> Title: {productInfo.name}</li>
          <li> Description: {productInfo.description}</li>
          <li> Weight: {productInfo.weight}</li>
          <li> Price: {productInfo.price}</li>
          <li>
            {" "}
            Categories:
            {productInfo.categories.map((category) => {
              return <span>{category}</span>;
            })}
          </li>
          <li>In stock: {productInfo.inStock}</li>
          <li>Featured: {productInfo.featured.toString()}</li>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

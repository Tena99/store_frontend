import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import StarRating from "../StarRating/StarRating";
import axios from "axios";

export default function Thumbnails({ sweets }) {
  const [productList, setProductList] = useState();

  console.log(productList);

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
    <ul className={styles.list}>
      {productList ? (
        productList.map((product) => (
          <li key={product._id}>
            <Link to={`/${product._id}`}>
              <img
                className={styles.image}
                src={`/sweets/${product.imageUrl}`}
                alt={product.name}
              />
            </Link>
            <div className={styles.content}>
              <p className={styles.name}>{product.name}</p>
              <span
                className={`${styles.favorite} ${
                  product.favorite ? "" : styles.not
                }`}
              >
                ❤
              </span>
              {/* <div className={styles.stars}>
                <StarRating starts={sweets.stars} />
              </div> */}
            </div>
          </li>
        ))
      ) : (
        <div>Wait</div>
      )}

      {/* {sweets.map((sweet) => (
        <li key={sweet.id}>
          <Link to={`/sweet/${sweet.id}`}>
            <img
              className={styles.image}
              src={`/sweets/${sweet.imageUrl}`}
              alt={sweet.name}
            />
          </Link>
          <div className={styles.content}>
            <p className={styles.name}>{sweet.name}</p>
            <span
              className={`${styles.favorite} ${
                sweet.favorite ? "" : styles.not
              }`}
            >
              ❤
            </span>
            <div className={styles.stars}>
              <StarRating starts={sweets.stars} />
            </div>
          </div>
        </li>
      ))} */}
    </ul>
  );
}

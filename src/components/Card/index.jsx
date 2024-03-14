import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";

export default function Cards({}) {
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

  const handleFavoriteClick = (productId) => {
    setProductList((prevList) =>
      prevList.map((product) =>
        product._id === productId
          ? { ...product, favorite: !product.favorite }
          : product
      )
    );
  };

  return (
    <ul className={styles.list}>
      {productList ? (
        productList.map((product) => (
          <li key={product._id}>
            <Link to={`/${product._id}`}>
              <img
                className={styles.image}
                src={`https://shopping-app-backend-6p1u.onrender.com/images/${product._id}.jpeg`}
                alt={product.name}
              />
            </Link>
            <div className={styles.content}>
              <p className={styles.name}>{product.name}</p>
              <span
                className={`${styles.favorite} ${
                  product.favorite
                    ? styles.favoriteActive
                    : styles.favoriteInactive
                }`}
                onClick={() => handleFavoriteClick(product._id)}
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
        <div>Loading... Please wait.</div>
      )}
    </ul>
  );
}

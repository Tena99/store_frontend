import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import StarRating from "../StarRating/StarRating";

export default function Cards({ product, imgSrc }) {
  return (
    <ul className={styles.list}>
      {product ? (
        <li key={product._id}>
          <Link to={`/${product._id}`}>
            <img className={styles.image} src={imgSrc} alt={product.name} />
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
      ) : (
        <div>Loading... Please wait.</div>
      )}
    </ul>
  );
}

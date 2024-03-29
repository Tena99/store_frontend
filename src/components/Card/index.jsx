import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import StarRating from "../StarRating/StarRating";

export default function Cards({ product, imgSrc }) {
  const [isFavorite, setIsFavorite] = useState(product.favorite);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {product ? (
          <li key={product._id}>
            <Link to={`/${product._id}`}>
              <img className={styles.image} src={imgSrc} alt={product.name} />

              <div className={styles.content}>
                <p className={styles.name}>{product.name}</p>
                <span
                  className={`${styles.favorite} ${
                    isFavorite ? styles.favoriteActive : styles.not
                  }`}
                  onClick={handleFavoriteClick}
                >
                  ❤
                </span>
                {/* <div className={styles.stars}>
                <StarRating starts={sweets.stars} />
              </div> */}
              </div>
            </Link>
          </li>
        ) : (
          <div>
            {isLoading ? (
              <div className="loading">Loading... Please wait.</div>
            ) : (
              <div>Content loaded!</div>
            )}
          </div>
        )}
      </ul>
    </div>
  );
}

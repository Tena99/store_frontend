import React from "react";
import { Link } from "react-router-dom";
import styles from "./thumbnails.module.css";
import StarRating from "../StarRating/StarRating";
export default function Thumbnails({ sweets }) {
  return (
    <ul className={styles.list}>
      {sweets.map((sweet) => (
        <li key={sweet.id}>
          <Link to={`/sweet/${sweet.id}`}>
            <img
              className={styles.image}
              src={`/sweets/${sweet.imageUrl}`}
              alt={sweet.name}
            />
          </Link>
          <div className={styles.content}>
            <div className={styles.name}>{sweet.name}</div>
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
      ))}
    </ul>
  );
}

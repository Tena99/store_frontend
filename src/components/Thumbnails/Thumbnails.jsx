import React from "react";
import { Link } from "react-router-dom";
import classes from "./thumbnails.module.css";
import { getAll } from "../../services/sweetService";
export default function Thumbnails({ sweets, toggleFavorite }) {
  const handleFavoriteClick = (id) => {
    toggleFavorite(id);
  };

  return (
    <ul className={classes.list}>
      {sweets.map((sweet) => (
        <li key={sweet.id}>
          <Link to={`/sweet/${sweet.id}`}>
            <img
              className={classes.image}
              src={`${sweet.imageUrl}`}
              alt={sweet.name}
            />

            <div className={classes.content}>
              <div className={classes.name}>{sweet.name}</div>
              <span
                className={`${classes.favorite} ${
                  sweet.favorite ? "" : classes.not
                }`}
                onClick={() => handleFavoriteClick(sweet.id)}
              >
                ❤
              </span>
              {/* <div className={classes.stars}>
                <StarRating stars={sweet.stars} />
              </div> */}
              <div className={classes.product_item_footer}>
                <div className={classes.origins}>
                  {sweet.origins.map((origin) => (
                    <span key={origin}>{origin}</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

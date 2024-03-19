import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";

export default function DetailedInfo() {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProductInfo() {
      try {
        const { data } = await axios.get(
          `https://shopping-app-backend-6p1u.onrender.com/products/${id}`
        );
        setProductInfo(data);
      } catch (error) {
        console.error("Error fetching product info:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProductInfo();
  }, [id]);

  const handleAddToCart = () => {
    console.log("Product added to cart:", productInfo);
  };

  return (
    <div className={styles.card}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className={styles["card-header"]}>
            {" "}
            {/* Apply the 'card-header' class */}
            <h2>Product Information</h2>
          </div>
          <div className={styles["card-body"]}>
            {" "}
            {/* Apply the 'card-body' class */}
            <ul>
              <li>
                <strong>Title:</strong> {productInfo.name}
              </li>
              <li>
                <strong>Description:</strong> {productInfo.description}
              </li>
              <li>
                <strong>Weight:</strong> {productInfo.weight}
              </li>
              <li>
                <strong>Price:</strong> {productInfo.price}
              </li>
              <li>
                <strong>Categories:</strong> {productInfo.categories.join(", ")}
              </li>
              <li>
                <strong>In stock:</strong> {productInfo.inStock}
              </li>
              <li>
                <strong>Featured:</strong> {productInfo.featured.toString()}
              </li>
            </ul>
            <button className={styles.text} onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../../Context/createContext";
import axios from "axios";
import styles from "./styles.module.css";

export default function DetailedInfo() {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(UserContext);

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

  async function handleAddToCart() {
    axios
      .put(
        `https://shopping-app-backend-6p1u.onrender.com/products/${productInfo._id}/${user._id}`
      )
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error Response:", error.response.data);
        } else if (error.request) {
          console.error("No Response:", error.request);
        } else {
          console.error("Error:", error.message);
        }
      });
  }

  return (
    <div className="card">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="card-header">
            <h2>Product Information</h2>
          </div>
          <div className="card-body">
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
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import axios from "axios";

export default function Home() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    async function fetchTopProducts() {
      try {
        const response = await axios.get(
          "https://shopping-app-backend-6p1u.onrender.com/products/featured"
        );
        setProductList(response.data);
      } catch (error) {
        console.error("Error fetching top products:", error);
      }
    }

    fetchTopProducts();
  }, []);

  return (
    <div className="container">
      {productList.length > 0 ? (
        productList.map((product) => (
          <Card
            key={product._id}
            product={product}
            imgSrc={`https://shopping-app-backend-6p1u.onrender.com/images/${product._id}.jpeg`}
          />
        ))
      ) : (
        <div>Loading... Please wait</div>
      )}
    </div>
  );
}

import { useEffect, useState } from "react";
import { Content } from "./Total content";

export function AdminPanel() {
  return <ProductsList />;
}

// product list read
function ProductsList() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch("https://616bc2b216c3fa00171717bf.mockapi.io/Session-28-task", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((products) => setProducts(products));
  };
  useEffect(getProducts, []);

  return <Content getProducts={getProducts} products={products} />;
}



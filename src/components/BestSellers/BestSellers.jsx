import { useState, useEffect } from "react";
import "./BestSellers.css";
import BestSellersItem from "./BestSellersItem/BestSellersItem";

const BestSellers = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="BestSellers">
      {products.map((product) => (
        <BestSellersItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default BestSellers;

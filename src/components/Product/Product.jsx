import "./Product.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Reviews from "./Reviews/Reviews";

const Product = () => {
  let [product, setProduct] = useState({});
  let { productId } = useParams();
  let navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return (
    <>
      <button className="btn-home" onClick={goHome}>
        Back
      </button>
      <div className="Product">
        <img src={product.image} alt={product.title} />
        <div className="container">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h2>Category: {product.category}</h2>
          <p>Price: {product.price} $</p>
          <Reviews />
        </div>
      </div>
    </>
  );
};

export default Product;

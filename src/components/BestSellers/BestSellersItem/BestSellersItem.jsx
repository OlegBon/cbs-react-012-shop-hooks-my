import "./BestSellersItem.css";
import { useNavigate } from "react-router-dom";

const BestSellersItem = ({ product }) => {
  let navigate = useNavigate();

  const showMoreHandler = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="BestSellersItem">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.price}$</p>
      <button onClick={showMoreHandler}>Show more...</button>
      <button>Add to Cart</button>
    </div>
  );
};

export default BestSellersItem;

import React from "react";
import "./Product.css";
import { AiFillStar } from "react-icons/ai";
import useStateProvider from "../../StateProvider/StateProvider";

function Product({ price, rating, image, id, title }) {
  const [{}, dispatch] = useStateProvider();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: { price, rating, image, id, title },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <AiFillStar className="product__starRating" />;
            })}
        </p>
      </div>
      <img src={image} alt="title" className="product__image" />
      <button className="product__button" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;

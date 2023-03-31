import React from "react";
import "./CheckoutProduct.css";
import { AiFillStar } from "react-icons/ai";

function CheckoutProduct({ id, title, price, image, rating }) {
  return (
    <div className="checkoutProduct">
      <img src={image} alt="title" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <div className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return <AiFillStar />;
            })}
        </div>
        <button>Remove From Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

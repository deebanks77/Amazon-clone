import React from "react";
import "./CheckoutProduct.css";
import { AiFillStar } from "react-icons/ai";
import useStateValue from "../../StateProvider/StateProvider";

function CheckoutProduct({ id, title, price, image, rating }) {
  const [{}, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="title" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <div className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <AiFillStar key={i} />;
            })}
        </div>
        <button onClick={removeFromCart} className="checkoutProduct__button">
          Remove From Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

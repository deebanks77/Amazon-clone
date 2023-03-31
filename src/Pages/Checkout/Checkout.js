import React from "react";
import "./Checkout.css";
import Header from "../../Components/Header/Header";
import useStateValue from "../../StateProvider/StateProvider";
import CheckoutProduct from "../../Components/CheckoutProduct/CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <Header />
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt="banner"
        className="checkout__banner"
      />
      {basket.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is Empty</h2>
          <p>
            You have no item in your basket. To buy one or more items, click on
            the "Add to cart" next to item
          </p>
        </div>
      ) : (
        <div>
          <h2>Your Shopping Basket</h2>
          {basket.map((item) => {
            const { id, title, image, rating, price } = item;
            return (
              <CheckoutProduct
                id={id}
                title={title}
                image={image}
                rating={rating}
                price={price}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Checkout;

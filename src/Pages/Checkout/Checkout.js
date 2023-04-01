import React from "react";
import "./Checkout.css";
import Header from "../../Components/Header/Header";
import useStateValue from "../../StateProvider/StateProvider";
import CheckoutProduct from "../../Components/CheckoutProduct/CheckoutProduct";
import Subtotal from "../../Components/Subtotal/Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  const total = basket?.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
  console.log(total);
  console.log(basket);
  return (
    <div className="checkout">
      <Header />
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt="banner"
        className="checkout__banner"
      />

      {basket.length === 0 ? (
        <div className="checkout__header">
          <h2>Your Shopping Basket is Empty</h2>
          <p>
            You have no item in your basket. To buy one or more items, click on
            the "Add to cart" next to item
          </p>
        </div>
      ) : (
        <h2 className="checkout__header">Your Shopping Basket</h2>
      )}

      <div className="line" />

      <div className="checkout__container">
        <div className="checkout__left">
          {basket.length > 0 && (
            <div>
              <div className="checkout__productsContainer">
                {basket.map((item) => {
                  const { id, title, image, rating, price } = item;
                  return (
                    <React.Fragment key={id}>
                      <CheckoutProduct
                        id={id}
                        title={title}
                        image={image}
                        rating={rating}
                        price={price}
                      />
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {basket.length > 0 && (
          <div className="checkout__right">
            <Subtotal total={total} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;

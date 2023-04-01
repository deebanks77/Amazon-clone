import React from "react";
import "./Subtotal.css";
import useStateValue from "../../StateProvider/StateProvider";

function Subtotal({ total }) {
  const [{ basket }] = useStateValue();

  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items): {USDollar.format(total)}{" "}
      </p>
      <div className="subtotal__gift">
        <input type="checkbox" name="gift" id="gift" />
        <p>This order contains a gift</p>
      </div>
      <button className="subtotal__button">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;

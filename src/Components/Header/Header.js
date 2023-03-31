import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import useStateValue from "../../StateProvider/StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  return (
    <nav className="header">
      {/* logo */}
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon"
        className="header__image"
      />

      {/* input */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <BiSearch className="header__searchIcon" />
      </div>

      {/* buttons */}
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello,</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime </span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link header__linkBasket">
          <div className="header__basket">
            <SlBasket className="header__basketIcon" />
            <span className="header__optionLineTwo">{basket.length}</span>
          </div>
        </Link>
      </div>
      {/* basket */}
    </nav>
  );
}

export default Header;

//

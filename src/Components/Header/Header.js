import React, { useState, useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { MdOutlineCancel } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { IoLogOut } from "react-icons/io5";
import useStateValue from "../../StateProvider/StateProvider";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  const [show, setShow] = useState(false);

  const inputRef = useRef(false);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const signout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch({ type: "SIGN_OUT" });
        alert("signed out");
      })
      .catch((error) => {
        // An error happened.
      });
  };

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
        <input type="text" className="header__searchInput" ref={inputRef} />
        <BiSearch className="header__searchIcon" onClick={handleFocus} />
      </div>

      {/* buttons */}
      <div className="header__nav">
        <div onClick={() => setShow(!show)} className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello,</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </div>
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

        {/* drop down */}
        <div
          className={`${show ? " header__Logout show" : "header__Logout "} `}
        >
          <MdOutlineCancel
            className="icon__cancel"
            onClick={() => setShow(!show)}
          />
          <div className="button">
            <AiFillSetting className="icon" />
            <p>Settings & Privacy</p>
          </div>
          <div className="button" onClick={signout}>
            <IoLogOut className="icon" />
            <p>Logout</p>
          </div>
        </div>
      </div>
      {/* basket */}
    </nav>
  );
}

export default Header;

//

import React from "react";
import "./Footer.css";
import { footerInfo, footerInfo2, footerInfo3, footerInfo4 } from "../../Data";
import { SiTorbrowser } from "react-icons/si";
import { BiDollar } from "react-icons/bi";
import { FaFlagUsa } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="info">
          <h3>Get to Know Us</h3>
          {footerInfo.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <div className="info info2">
          <h3>Make Money with Us</h3>
          {footerInfo2.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <div className="info info3">
          <h3>Amazon Payment Products</h3>
          {footerInfo3.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <div className="info info4">
          <h3>Let Us Help You</h3>
          {footerInfo4.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </div>

      <div className="footer__bottom">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
        />
        <div className="footer__buttons">
          <button>
            <SiTorbrowser /> <strong>English</strong>
          </button>
          <button>
            <BiDollar /> <strong>USD - U.S. Dollar</strong>
          </button>
          <button>
            <FaFlagUsa /> <strong>United State</strong>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

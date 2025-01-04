import React from "react";
import "../Styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer-section w100 h30 d-flex-col">
      <div className="addres-info-container w100 h90 d-flex p10">
        <div className="addres-info-container w30 h1 d-flex-col center p10">
          <a href="/" className="f-heading py10">
            Home
          </a>
          <a href="AboutUs.aspx" className="f-heading py10">
            Aboutus
          </a>
          <a href="PrivacyPage.aspx" className="f-heading py10">
            Privacy
          </a>
          <a href="Terms.aspx" className="f-heading py10">
            Terms
          </a>
          <a href="ContactUs.aspx" className="f-heading py10">
            Contactus
          </a>
        </div>
        <div className="addres-info-container w30 h1 d-flex-col p10">
          <span className="f-heading py10">Office Address :</span>
          <p className="f-info-text">
            Vikern Smart Invent Software technology Pvt. Ltd. Nimon,
            Tal-Sangamner, Dist-Ahmednagar, pin-422605
          </p>
          <p className="f-info-text">
            Phone -(02425) 223344 whatsapp No : 9822180270
          </p>
          <p className="f-info-text">
            website : www.vsitrade.com email : help@vsitrade.com ,
            vikern@vsitrade.com
          </p>
          <p className="f-info-text">Mobile : +91 9822180270, +91 9403228344</p>
        </div>
      </div>

      <span className="f-info-text w100 p10 d-flex a-center j-center">
        Designed By VSI Software Technology Pvt. Ltd. Sangamner 422606
      </span>
    </div>
  );
};

export default Footer;

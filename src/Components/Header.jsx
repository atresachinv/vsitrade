import React, { useEffect, useRef, useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import godhan from "../assets/godhan.png";
import rajhans from "../assets/rajhans.png";
import kanhaiyya from "../assets/kanhaiyya.png";
import vsi from "../assets/vsi.png";
import met from "../assets/met.png";
import "../Styles/Header.css";

const Header = () => {
  return (
    <>
      <header className="header-contact-navigation-apk-download-container w100 h15 d-flex-col">
        <div className="contact-info-container w100 d-flex p10 bg1">
          <label className="f-label-text px10">
            <IoMdMail className="info-text icons " />
            <span className="f-label-text px10">
              support@vsitrade.com, sales@vsitrade.com
            </span>
          </label>
          <label className="f-label-text px10">
            <FaPhoneAlt className="info-text icons " />
            <span className="f-label-text px10">
              (02425) 223344, +91 9822180270 ,+91 9403228344
            </span>
          </label>
        </div>
        <div className="apk-download-container w100 h1 d-flex a-center j-center">
          <a
            className="px10"
            mimetype="application/vnd.android.package-archive"
            href="/ShivprasadTrackerApp.apk"
            download={"MetApp.apk"}>
            <img src={godhan} alt="godhan milk" width="100" height="50" />
          </a>
          <a
            className="px10"
            mimetype="application/vnd.android.package-archive"
            href="/ShivprasadTrackerApp.apk"
            download={"MetApp.apk"}>
            <img src={rajhans} alt="rajhans milk" width="100" height="50" />
          </a>
          <a
            className="px10"
            mimetype="application/vnd.android.package-archive"
            href="/ShivprasadTrackerApp.apk"
            download={"MetApp.apk"}>
            <img src={kanhaiyya} alt="kanhaiyya milk" width="100" height="50" />
          </a>
          <a
            className="px10"
            mimetype="application/vnd.android.package-archive"
            href="/ShivprasadTrackerApp.apk"
            download={"MetApp.apk"}>
            <img src={met} alt="metapp" width="50" height="50" />
          </a>
          <a
            className="px10"
            mimetype="application/vnd.android.package-archive"
            href="/SmartDairy.apk"
            download={"SmartDairy.apk"}>
            <img src={vsi} alt="vikern" width="100" height="50" />
          </a>
        </div>
      </header>
      <nav className="navigation-container w100 d-flex a-center p10">
        <span className="label-text w20 t-center app-logo">VSITRADE</span>
        <div className="navlink-container w50 d-flex sa">
          <a href="http://4234-31282.el-alt.com/default.aspx">
            Inventory Login
          </a>
          <a href="http://4234-25249.el-alt.com/met/default.aspx">Met Login</a>
          <a href="http://4234-25249.el-alt.com/register.aspx">Register</a>
          <a href="http://4234-25249.el-alt.com">Login</a>
          <a href="ContactUs.aspx">Contactus</a>
          <a href="AboutUs.aspx">About</a>
          <a href="ticket.aspx">Ticket</a>
        </div>
      </nav>
    </>
  );
};

export default Header;

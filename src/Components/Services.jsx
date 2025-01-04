import React from "react";
import acount from "../assets/servicesimages/acounting.jpg";
import app from "../assets/servicesimages/appdev.jpg";
import web from "../assets/servicesimages/webdev.jpg";
import desktopdev from "../assets/servicesimages/desktopdev.jpg";
import digital from "../assets/servicesimages/digitalmarketing.jpg";
import outsource from "../assets/servicesimages/outsourcing.jpg";
import "../Styles/Services.css";

const Services = () => {
  return (
    <div className="services-container w100 h100 d-flex-col sb py10">
      <div className="page-title-container w100 h10 d-flex center">
        <span className="page-heading">OUR SERVICES</span>
      </div>
      <div className="about-services w100 h20 d-flex center">
        <p className="lebel-text w50 t-center">
          Vikern Smart Invent Software Technology Private Limited (we, us, our)
          complies with the New India Privacy Act (the Act) when dealing with
          personal information. Personal information is information about an
          identifiable individual (a natural person).
        </p>
      </div>
      <div className="services-card-container w100 h70 d-flex-col center sb">
        <div className="app-row-1 w100 h40 d-flex sa">
          <div className="app-card-container d-flex-col center p10 sb">
            <div className="img-container">
              <img className="card-img" src={web} alt="smartdairyapp" />
            </div>
            <span className="lebel-text">Web Development</span>
            <p className="info-text">
              Customized Web Application Devlopment using ASP .Net.
            </p>
          </div>
          <div className="app-card-container d-flex-col center p10 sb">
            <div className="img-container">
              <img className="card-img" src={app} alt="smartdairyapp" />
            </div>
            <span className="lebel-text">Android Development</span>
            <p className="info-text">Android Application Development.</p>
          </div>
          <div className="app-card-container d-flex-col center p10 sb">
            <div className="img-container">
              <img className="card-img" src={desktopdev} alt="smartdairyapp" />
            </div>
            <span className="lebel-text">Desktop Development</span>
            <p className="info-text">Desktop Application Development.</p>
          </div>
        </div>
        <div className="app-row-2 w100 h40 d-flex sa">
          <div className="app-card-container d-flex-col center p10 sb">
            <div className="img-container">
              <img className="card-img" src={acount} alt="smartdairyapp" />
            </div>
            <span className="lebel-text">Accounting Services</span>
            <p className="info-text">
              Customized Web Application Devlopment using ASP .Net.
            </p>
          </div>
          <div className="app-card-container d-flex-col center p10 sb">
            <div className="img-container">
              <img className="card-img" src={digital} alt="smartdairyapp" />
            </div>
            <span className="lebel-text">Digital Marketing</span>
            <p className="info-text">
              We offers Facebook Marketing , Instagram Marketing , Whatsapp
              Marketing, sms Marketing.
            </p>
          </div>
          <div className="app-card-container d-flex-col center p10 sb">
            <div className="img-container">
              <img className="card-img" src={outsource} alt="smartdairyapp" />
            </div>
            <span className="lebel-text">IT Services Outsourcing</span>
            <p className="info-text">Providing Resources.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

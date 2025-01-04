import React from "react";
import { FaCheck } from "react-icons/fa6";
import "../Styles/AppPricing.css";
const AppPricising = () => {
  return (
    <div className="app-pricing-container w100 h1 d-flex-col py10 br">
      <div className="page-title-container w100 h10 d-flex center">
        <span className="page-heading f-heading">
          MARKETING EMPLOYEE TRACKER PRICING
        </span>
      </div>
      <div className="app-pricing-div w100 h70 d-flex-col center sb">
        <span className="f-label-text my10">Our Plans</span>
        <div className="app-pricing-details-container w100 h90 d-flex a-start sa">
          <div className="app-pricing-card d-flex-col a-center p10">
            <div className="card-heading w100 h30 d-flex center">
              <span className="heading card-title t-center">BASIC</span>
            </div>
            <div className="w100 h25 d-flex sb">
              <span className="label-text w50">Employee max 5</span>
              <span className="label-text w50 t-center">
                <FaCheck className="check-icons" />
              </span>
            </div>
            <div className="w100 h25 d-flex sb">
              <span className="label-text w50">Live Support</span>
              <span className="label-text w50 t-center">
                <FaCheck className="check-icons" />
              </span>
            </div>
            <div className="w100 h25 d-flex a-center sb">
              <span className="label-text w50">
                Pricing <strike className="strike">999</strike>
              </span>
              <span className="label-text t-center w50">500/Month</span>
            </div>
          </div>
          <div className="app-pricing-card d-flex-col a-center p10">
            <div className="card-heading w100 h30 d-flex center">
              <span className="heading card-title t-center">Standerd</span>
            </div>
            <div className="w100 h25 d-flex sb">
              <span className="label-text w50">Employee max 15</span>
              <span className="label-text w50 t-center">
                <FaCheck className="check-icons" />
              </span>
            </div>
            <div className="w100 h25 d-flex sb">
              <span className="label-text w50">Live Support</span>
              <span className="label-text w50 t-center">
                <FaCheck className="check-icons" />
              </span>
            </div>
            <div className="w100 h25 d-flex a-center sb">
              <span className="label-text w50">
                Pricing <strike className="strike">1999</strike>
              </span>
              <span className="label-text t-center w50">1500/Month</span>
            </div>
          </div>
          <div className="app-pricing-card d-flex-col a-center p10">
            <div className="card-heading w100 h30 d-flex center">
              <span className="heading card-title t-center">Primium</span>
            </div>
            <div className="w100 h25 d-flex sb">
              <span className="label-text w50">Employee max 30</span>
              <span className="label-text w50 t-center">
                <FaCheck className="check-icons" />
              </span>
            </div>
            <div className="w100 h25 d-flex sb">
              <span className="label-text w50">Live Support</span>
              <span className="label-text w50 t-center">
                <FaCheck className="check-icons" />
              </span>
            </div>
            <div className="w100 h25 d-flex a-center sb">
              <span className="label-text w50">
                Pricing <strike className="strike">3599</strike>
              </span>
              <span className="label-text t-center w50">3000/Month</span>
            </div>
          </div>
          <div className="app-pricing-card d-flex-col a-center p10">
            <div className="card-heading w100 h30 d-flex center">
              <span className="heading card-title t-center">Unlimited</span>
            </div>
            <div className="w100 h25 d-flex sb">
              <span className="label-text w50">Employee </span>
              <span className="label-text w50 t-center">
                <FaCheck className="check-icons" />
              </span>
            </div>
            <div className="w100 h25 d-flex sb">
              <span className="label-text w50">Live Support</span>
              <span className="label-text w50 t-center">
                <FaCheck className="check-icons" />
              </span>
            </div>
            <div className="w100 h25 d-flex a-center sb">
              <span className="label-text w50">
                Pricing <strike className="strike">14999</strike>
              </span>
              <span className="label-text t-center w50">12000/Month</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPricising;

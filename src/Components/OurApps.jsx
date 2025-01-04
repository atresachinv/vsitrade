import React from "react";
import dairy from "../assets/smartdairapp.png";
import trade from "../assets/trade.png";
import auditor from "../assets/auditor.png";
import payroll from "../assets/payroll.png";
import chilling from "../assets/chilling.png";
import met from "../assets/met.png";
import "../Styles/OurApps.css";
const OurApps = () => {
  return (
    <div className="our-app-container w100 h100 d-flex-col sb">
      <div className="page-title-container w100 h10 d-flex center">
        <span className="page-heading">WHAT WE DO</span>
      </div>
      <div className="apps-description-container w100 h90 d-flex-col a-center sa">
        <div className="app-row-1 w100 h30 d-flex sa">
          <div className="app-card-container d-flex-col center p10 sb">
            <div className="img-container">
              <img className="card-img" src={dairy} alt="smartdairyapp" />
            </div>
            <span className="lebel-text">Smart Dairy 1.0</span>
            <p className="info-text">
              स्मार्ट तुमच्या दुध संकलन केंद्राचे संपुर्ण संगणककीरण,
              ऑनलाईन-ऑफलाईन दुध संकलन, S.M.S. सुविधा , तेरिज ताळेबंद, सचिवाच्या
              मागणीनुसार सर्व रिपोर्टस.
            </p>
          </div>
          <div className="app-card-container d-flex-col center p10 sb">
            <div className="img-container">
              <img className="card-img" src={trade} alt="smartdairyapp" />
            </div>
            <span className="lebel-text">VsiTrade 1.0</span>
            <p className="info-text">
              तुमच्या सर्व प्रकारच्या वस्तु / मालाची खरेदी विक्री व व्यवहाराचे
              संपुर्ण संगणकीकरण, S.M.S सुविधा, युजरच्या मागणीनुसार रिपोर्ट्स आणि
              ट्रेनिंग.
            </p>
          </div>
          <div className="app-card-container d-flex-col center p10 sb">
            <div className="img-container">
              <img className="card-img" src={auditor} alt="smartdairyapp" />
            </div>
            <span className="lebel-text">Smart Auditor 1.0</span>
            <p className="info-text">
              एका पेक्षा अधिक संस्था,प्रायव्हेट व्यवसाय व इतर सर्व फार्मचे
              अकौंटे‍ग करण्याची एकाच सौफ्ट्वेअर मध्ये सुविधा, तेरिज,
              व्यापारीपत्रक, नफा-तोटा, ताळेबंद, जनरल लेजर, इतर रिपोर्ट्स.
            </p>
          </div>
        </div>
        <div className="app-row-2 w100 h40 d-flex sa">
          <div className="app-card-container d-flex-col center p10 sb">
            <div className="img-container">
              <img className="card-img" src={payroll} alt="smartdairyapp" />
            </div>
            <span className="lebel-text">Smart Payroll 1.0</span>
            <p className="info-text">
              संपूर्ण पेरोल सुविधा,विविध एम्प्लॉयी प्रकार आणि एम्प्लॉयी
              पेमेंट/पगार वाटप, तस्तैवज संग्रह, विविध एम्प्लॉयी
              उपस्तिथी/Attendance ,folowup आणि इतर सर्व रिपोर्ट्स.
            </p>
          </div>
          <div className="app-card-container d-flex-col center p10 sb">
            <div className="img-container">
              <img className="card-img" src={chilling} alt="smartdairyapp" />
            </div>
            <span className="lebel-text">Chilling 1.0</span>
            <p className="info-text">
              कॅन / टॅंकर दुध संकलन, पंधरवडा दुध पेमेंट(बिलिंग), अकौंटिंग, S.M.S
              सुविधा आणि इतर सर्व रिपोर्ट्स.
            </p>
          </div>
          <div className="app-card-container d-flex-col center p10 sb">
            <div className="img-container">
              <img className="card-img" src={met} alt="smartdairyapp" />
            </div>
            <span className="lebel-text">MET 1.0</span>
            <p className="info-text">
              Marketing Employee Tracker Facilates all Marketing Employee
              Tracking Service as well as visits, Activity, Managing Order,
              Tasks, Competitor Tracking and ManyOther Services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApps;

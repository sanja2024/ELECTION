import React from "react";
import "./Footer.css"
import Home_icon from "../../Common/asset/images/voteimg/Home_icon.svg";
import Profile_icon from "../../Common/asset/images/voteimg/Profile_icon.svg";
import setting_icon from "../../Common/asset/images/voteimg/setting_icon.svg";
import Helpline_icon from "../../Common/asset/images/voteimg/Helpline_icon.svg";
import center_icon from "../../Common/asset/images/voteimg/center_icon.svg";
import Survey from "../../Common/asset/images/voteimg/Survey.svg";
import Voters from "../../Common/asset/images/voteimg/Voters.svg";
import { useNavigate } from "react-router-dom";
import { ProfilePage_ROUTE } from "../../Common/Route/Routes";
import { Survey_ROUTE, VoterPage_ROUTE, VoterSearch_ROUTE } from "../../Common/Route/Routes";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="footer_tag">
        <div className="d-flex flex-column align-items-center" onClick={() => {
          navigate('/');
        }}>
          <img className="Footer_icon" src={Home_icon}></img>
          <span className="footer_text">Home</span>
        </div>
        <div className="d-flex flex-column align-items-center" onClick={() => { navigate(ProfilePage_ROUTE); }}>
          <img className="Footer_icon" src={Profile_icon}></img>
          <span className="footer_text">Profile</span>
        </div>
        <div className="d-flex flex-column align-items-center" onClick={() => {
          navigate('/');
        }}>
          <img className="Footer_iconS" src={center_icon}></img>
          {/* <span>Home</span> */}
        </div>
        <div className="d-flex flex-column align-items-center" >
          <img className="Footer_icon " src={Voters}></img>
          <span className="footer_text" onClick={() => {
            navigate(VoterPage_ROUTE);
          }} >Voters</span>
        </div>
        <div className="d-flex flex-column align-items-center" >
          <img className="Footer_icon " src={Survey}></img>
          <span className="footer_text" onClick={() => {
            navigate(Survey_ROUTE);
          }} >Survey</span>
        </div>
      
      </div>
    </div>
  );
};

export default Footer;

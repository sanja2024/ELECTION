import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Survey.css"
import Survey_img from "../../Common/asset/images/voteimg/Survey_img.svg";

const Survey = () => {
  return (
    <div className="container p-0">
      <Header />
      <div className="survey_body">

  
        <div class="card">
            <div className="survey_img">
            <h5 class="card-survey">PARLIAMENT SURVEY</h5>
            <img src={Survey_img} class="card-img-top" alt="..." />
            </div>
          
          <div class="card-body">
          
            <p class="card-text">
            Participate in our Parliament Survey to make your voice heard! 
            This brief and insightful survey aims to gather your opinions 
            on crucial matters affecting our society.
            </p>
           
          </div>
          <div className="card-footer text-center" style={{backgroundColor:" rgba(3, 52, 104, 0.2)"}}>
        <span className="surveybtn" >  Start Survey -> </span>
          </div>
        </div>
        </div>
      <Footer />
    </div>
  );
};

export default Survey;

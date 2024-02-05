import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Survey.css";
import bjp_icon from "../../Common/asset/images/voteimg/bjp_icon.svg";
import congress from "../../Common/asset/images/voteimg/Congress.svg";

const SurveyForm = () => {
  return (
    <div className="container p-0">
      <Header />
      <div className="survey_questionnaire">
        <div className="d-flex flex-column mb-3">
          <span className="QuestoinHead">Survey Questionnaire</span>
          <span className="QuestoinnaireQues">
            Which political party do you believe best represents your values and
            priorities, and deserves your vote in the upcoming election?
          </span>
        </div>
        <div>
          <div class=" survey_btn ">
            <div className="survey_btns ">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked=""
              />
              <label class="form-check-label" for="flexRadioDefault1">
               Congress
              </label>
            </div>

            <img src={congress} className=""></img>
          </div>
        
          <div class=" survey_btn ">
            <div className="form-check  survey_btns ">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked="active"
              />
              <label class="form-check-label" for="flexRadioDefault1">
               BJP
              </label>
            </div>

            <img src={bjp_icon} className=""></img>
          </div>
          <div class=" survey_btn ">
            <div className="form-check  survey_btns ">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked="active"
              />
              <label class="form-check-label" for="flexRadioDefault1">
               Other
              </label>
            </div>

            {/* <img src={bjp_icon} className=""></img> */}
          </div>
          <div class=" survey_btn ">
            <div className="form-check  survey_btns ">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked="active"
              />
              <label class="form-check-label" for="flexRadioDefault1">
              Not Interested
              </label>
            </div>

            {/* <img src={bjp_icon} className=""></img> */}
          </div>
        </div>
        <button
          className="submit_btn "
          //   onClick={handleSubmit}
        >
          Submit
        </button>
        <Footer />
      </div>
    </div>
  );
};

export default SurveyForm;

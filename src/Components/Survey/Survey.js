import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { GET_SAVE_ANSWER_URL, GET_TOPIC_URL } from "../../Common/Url/ServerConfig";
import { getTopic, saveAnswer } from "../../Common/redux/slices/surveySlice";
import { useFormik } from "formik";
import "./Survey.css";
import Survey_img from "../../Common/asset/images/voteimg/Survey_img.svg";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import SurveyDetail from "./SurveyDetail";

const SurveyForm = ({ questions, onSubmit }) => {

  console.log("SDcsd", questions)

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [error, setError] = useState("");

  const handleNextPage = () => {
    // if (!selectedOptions[questions[currentPage].topicCode]) {
    //   setError("Please select an option before moving to the next question.");
    //   return;
    // }
    setCurrentPage(currentPage + 1);
    setError("");
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
    setError("");
  };

  const handleOptionSelect = (questionId, option) => {
    setSelectedOptions({ ...selectedOptions, [questionId]: option });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    onSubmit(selectedOptions);
  };

  const renderCurrentPage = () => {
    console.log("Adas", questions[currentPage])
    const question = questions[currentPage];
    if (!question) {
      return null;
    }

    return (
      <div>
        {console.log("AEfafda", question)}
        <div className="survey_questionnaire">
          <div className="d-flex flex-column mb-3">
            <span className="QuestoinHead">{question.topicName}</span>
            <span className="QuestoinnaireQues">{question.topicQuestion}</span>
          </div>
          <div>
            {question.type === "radio" ? (
              question.option.split(",").map((option) => (
                <div key={option} className="survey_btn">
                  {/* <div className="survey_btns"> */}
                  <input
                    id={option}
                    className="form-check-input survey_input1"
                    type="radio"
                    name={question.topicCode}
                    checked={selectedOptions[question.topicCode] === option}
                    value={option}
                    onChange={() => handleOptionSelect(question.topicCode, option)}
                  />
                  <label className="form-check-label newbtn" htmlFor={option}>
                    {option}
                  </label>
                  {/* </div> */}
                </div>
              ))
            ) : (
              <div className="form-text-input1">
                <input
                  id={question.topicCode}
                  type="text"
                  name={question.topicCode}
                  value={selectedOptions[question.topicCode] || ""}
                  onChange={(e) => handleOptionSelect(question.topicCode, e.target.value)}
                />
              </div>
            )}
          </div>
        </div>
        {error && <p className="error-message p-3">{error}</p>}
        {currentPage > 0 && (
          <button className="submit_btn1" type="button" onClick={handlePreviousPage}>
            Previous
          </button>
        )}
        {currentPage < questions.length - 1 && (
          <button className="submit_btn2" type="button" onClick={handleNextPage}>
            Next
          </button>
        )}

        {currentPage === questions.length - 1 && (
          <button className="submit_btn2" type="button" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    );
  };

  return <div className="container p-0">{renderCurrentPage()}</div>;
};

const Survey = ({ finalResp }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedTopic, setSelectedTopic] = useState(null);
  const topics = useSelector((state) => state.survey.topicData);
  const answerResp = useSelector((state) => state.survey.answerRespData);



  useEffect(() => {
    const reqParamData = {
      payload: "",
      endpoint: GET_TOPIC_URL,
    };
    dispatch(getTopic(reqParamData));
  }, [dispatch]);

  const handleTopicSelect = (topicCode) => {
    setSelectedTopic(topicCode);
  };

  const handleFormSubmit = (selectedOptions) => {

    console.log("dfsafasf", location?.state);

    const voterData = {
      voter_id: location?.state?.data?.finaldata?.voter_id,
      name: location?.state?.data?.finaldata?.name,
      mobile_no: parseInt(location?.state?.data?.finaldata?.mobile_no),
      question: Object.entries(selectedOptions).map(([topicCode, answer]) => ({ topicCode, answer })),
    };

    const reqParam = {
      payload: voterData,
      endpoint: GET_SAVE_ANSWER_URL

    }

    dispatch(saveAnswer(reqParam)).then((res) => {

      if (res?.payload?.message == "success") {

        toast.success(res?.payload?.data?.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/CompleteSurvey")
      } else {
        toast.error(res?.payload?.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    })
  };
  const location = useLocation();
  return (
    <div className="container p-0">

      {finalResp == true ? "" : <Header />}
      {/* {selectedTopic ? (
        selectedTopic && location?.state?.data ? <SurveyForm
          questions={(topics?.data?.list?.find((topic) => topic.topicCode === selectedTopic)?.topicList || [])}
          onSubmit={handleFormSubmit}
        /> :
          <>
            <div

            >
              <div style={{
                width: "90vw",
                marginTop: "24px",

                marginLeft: "16px"
              }} className="d-flex flex-column mb-3">

                <span className="QuestoinHead">{selectedTopic}</span>

              </div>
              <SurveyDetail />
            </div>
          </>


      ) : (
        <div className="survey_body">
          {topics?.data?.list?.map((topic) => (
            <div key={topic.topicCode} className="survey_card card" onClick={() => handleTopicSelect(topic.topicCode)}>
              <div className="survey_img">
                <h5 className="card-survey">{topic.topicCode}</h5>
                <img src={Survey_img} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <p className="card-text">
                  Participate in our Parliament Survey to make your voice heard! This brief and insightful survey aims to
                  gather your opinions on crucial matters affecting our society.
                </p>
                <span className="surveybtn" onClick={() => finalResp === true && navigate("/Survey")}
                >Start Survey &gt;</span>
              </div>
            
            </div>
          ))}
        </div>
      )
      } */}

      {
        location?.state?.data?.label == "submit" ?
          <>
            {console.log("DFasfas", location?.state?.data)}
            <SurveyForm
              // questions={(topics?.data?.list?.find((topic) => topic.topicCode === selectedTopic)?.topicList || [])}
              questions={(topics?.data?.list?.[0]?.topicList || [])}

              onSubmit={handleFormSubmit}
            />
          </>
          :
          <>
            <div

            >
              <div style={{
                width: "90vw",
                marginTop: "24px",

                marginLeft: "16px"
              }} className="d-flex flex-column mb-3">

                <span className="QuestoinHead">{topics?.data?.list?.[0]?.topicCode}</span>

              </div>
              <SurveyDetail data={location?.state?.data} />
            </div>
          </>

      }
      <Footer />
    </div >
  );
};

export default Survey;

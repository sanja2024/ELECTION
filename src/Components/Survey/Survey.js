import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { GET_TOPIC_URL } from "../../Common/Url/ServerConfig";
import { getTopic } from "../../Common/redux/slices/surveySlice";
import { useFormik } from "formik";
import "./Survey.css";
import Survey_img from "../../Common/asset/images/voteimg/Survey_img.svg";

const SurveyForm = ({ questions, onSubmit }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [error, setError] = useState("");

  const handleNextPage = () => {
    if (!selectedOptions[questions[currentPage].topicCode]) {
      setError("Please select an option before moving to the next question.");
      return;
    }
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
    const question = questions[currentPage];
    if (!question) {
      return null;
    }

    return (
      <div>
        <div className="survey_questionnaire">
          <div className="d-flex flex-column mb-3">
            <span className="QuestoinHead">Survey Questionnaire</span>
            <span className="QuestoinnaireQues">{question.topicQuestion}</span>
          </div>
          <div>
            {question.type === "radio" ? (
              question.option.split(",").map((option) => (
                <div key={option} className="survey_btn">
                  <div className="survey_btns">
                    <input
                      id={option}
                      className="form-check-input"
                      type="radio"
                      name={question.topicCode}
                      checked={selectedOptions[question.topicCode] === option}
                      value={option}
                      onChange={() => handleOptionSelect(question.topicCode, option)}
                    />
                    <label className="form-check-label" htmlFor={option}>
                      {option}
                    </label>
                  </div>
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
        {error && <p className="error-message">{error}</p>}
        {currentPage > 0 && (
          <button className="submit_btn" type="button" onClick={handlePreviousPage}>
            Previous
          </button>
        )}
        {currentPage < questions.length - 1 && (
          <button className="submit_btn" type="button" onClick={handleNextPage}>
            Next
          </button>
        )}

        {currentPage === questions.length - 1 && (
          <button className="submit_btn" type="button" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    );
  };

  return <div className="container p-0">{renderCurrentPage()}</div>;
};

const Survey = () => {
  const dispatch = useDispatch();
  const [selectedTopic, setSelectedTopic] = useState(null);
  const topics = useSelector((state) => state.survey.topicData);

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


    const voterData = {
      voter_id: "",
      name: "",
      mobile_no: "",
      question: Object.entries(selectedOptions).map(([topicCode, answer]) => ({ topicCode, answer })),
    };
    console.log("check final resp", voterData);
  };

  return (
    <div className="container p-0">
      <Header />
      {selectedTopic ? (
        <SurveyForm
          questions={(topics?.data?.list?.find((topic) => topic.topicCode === selectedTopic)?.topicList || [])}
          onSubmit={handleFormSubmit}
        />
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
              </div>
              <div className="card-footer text-center" style={{ backgroundColor: "rgba(3, 52, 104, 0.2)" }}>
                <span className="surveybtn">Start Survey -&gt;</span>
              </div>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Survey;

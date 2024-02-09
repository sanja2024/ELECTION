import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { GET_TOPIC_URL } from "../../Common/Url/ServerConfig";
import { getTopic } from "../../Common/redux/slices/surveySlice";
import { useFormik } from "formik";


import "./Survey.css";


const SurveyForm = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.survey.topicData);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const reqParamData = {
      payload: "",
      endpoint: GET_TOPIC_URL
    }
    dispatch(getTopic(reqParamData));
  }, []);

  const handleSubmit = () => {
    const submission = posts?.data?.list?.map(question => ({
      topicCode: question.topicCode,
      answer: formik.values[question._id] || ''
    }));
    console.log(submission, "fsdfs");

  };

  const formik = useFormik({
    initialValues: {},
    onSubmit: handleSubmit,
  });

  const handleNextPage = () => {
    if (formik.values[posts?.data?.list?.[currentPage]?._id]) {
      setCurrentPage(currentPage + 1);
    } else {
      alert("Please select an option before moving to the next page.");
    }
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const renderCurrentPage = () => {
    const question = posts?.data?.list?.[currentPage];
    if (!question) {
      return null;
    }

    return (
      <div>
        {question.type === 'radio' ? (
          <div key={question._id} className="survey_questionnaire">
            <div className="d-flex flex-column mb-3">
              <span className="QuestoinHead">Survey Questionnaire</span>
              <span className="QuestoinnaireQues">
                {question.topicQuestion}
              </span>
            </div>
            <div>
              {question.option.split(',').map(option => (
                <div class=" survey_btn ">
                  <div className="survey_btns ">
                    <input
                      id={option}
                      class="form-check-input"
                      type="radio"
                      name={question._id}
                      checked={formik.values[question._id] === option}
                      value={option}
                      onChange={formik.handleChange}
                    />
                    <label class="form-check-label" htmlFor={option}>
                      {option}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>


            <div key={question._id} className="survey_questionnaire">
              <div className="d-flex flex-column mb-3">
                <span className="QuestoinHead">Survey Questionnaire</span>
                <span className="QuestoinnaireQues">
                  {question.topicQuestion}
                </span>
              </div>
              <div>

                <div class="  ">
                  <div className=" ">
                    <input
                      id={question._id}
                      class="form-text-input1"
                      type="text"
                      name={question._id}

                      onChange={formik.handleChange}
                      value={formik.values[question._id]}
                    />

                  </div>
                </div>
                <br />

              </div>
            </div>



            {/* <textarea
            id={question._id}
            name={question._id}
            onChange={formik.handleChange}
            value={formik.values[question._id]}
          /> */}
          </>

        )}
        {currentPage > 0 && <button className="submit_btn " type="button" onClick={handlePreviousPage}>Previous</button>}
        {currentPage < posts?.data?.list?.length - 1 &&

          <button
            type="button"
            className="submit_btn "
            onClick={handleNextPage}
          >
            Next
          </button>
          // <button type="button" onClick={handleNextPage}>Next</button>


        }
        {currentPage === posts?.data?.list?.length - 1 && <button className="submit_btn " type="submit">Submit</button>}
      </div>
    );
  };

  return (
    <div className="container p-0">
      <Header />
      {renderCurrentPage()}
      <Footer />
    </div>
  );
};

export default SurveyForm;

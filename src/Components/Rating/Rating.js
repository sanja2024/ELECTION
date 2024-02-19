import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import "./Rating.css"
import { fetchCommonGet } from '../../Common/redux/slices/postsSlice'
import { PERCENTAGE_URL } from "../../Common/Url/ServerConfig";

const Rating = () => {
  const dispatch = useDispatch();
  const [surveyQuestions, setSurveyQuestions] = useState([]);

  // const [percentage, setPercentage] = useState(0);

  // const increasePercentage = () => {
  //   setPercentage((prevPercentage) => {
  //     if (prevPercentage < 100) {
  //       return prevPercentage + 10; // Increase by 10% (you can adjust this value as needed)
  //     }
  //     return prevPercentage; // Don't increase beyond 100%
  //   });
  // };

  // const decreasePercentage = () => {
  //   setPercentage((prevPercentage) => {
  //     if (prevPercentage > 0) {
  //       return prevPercentage - 10; // Decrease by 10% (you can adjust this value as needed)
  //     }
  //     return prevPercentage; // Don't decrease below 0%
  //   });
  // };

  // Function to calculate progress bar color based on percentage
  const getProgressBarColor = (percentage) => {
    if (percentage >= 75) {
      return 'bg-success'; // Green color for high percentage
    } else if (percentage >= 50) {
      return 'bg-info'; // Blue color for moderate percentage
    } else if (percentage >= 25) {
      return 'bg-warning'; // Yellow color for low percentage
    } else {
      return 'bg-danger'; // Red color for very low percentage
    }
  };

  useEffect(() => {
    dispatch(fetchCommonGet(PERCENTAGE_URL)).then((res) => {
      if (res?.payload?.message === "success") {
        console.log(res?.payload?.data?.list, 'sss')
        setSurveyQuestions(res?.payload.data.list);
      }
    });
  }, [])
  return (
    <div>
      <Header />
      {/* <div className='m-3'>
        <div>
          <span className='cshead'>Customer Satisfaction Survey</span>
        </div>
        <div className='mt-3 mb-3'>
          <span className='cs_Ques'>
            How satisfied are you with our customer service department?
          </span>
        </div>
        <div className='d-flex flex-column'>
          <div className=" vaultUpdate btn-group " role="group" aria-label="">
            <div>
              <input
                type="radio"
                className="btn-check"
                name="productType"
                id="VerySatisfied"
                autoComplete="off"
                checked=""
              // value="Inward"
              // value={stageupdate?.productType }
              // checked={stageupdate?.productType == 'Inward'}
              // onChange={updatehandleChange}
              />
              <label className="btn vaultBtn p-2" htmlFor="VerySatisfied">Very Satisfied</label>
            </div>
            <div>
              <input
                type="radio"
                className="btn-check"
                name="productType"
                id="Satisfied"
                autoComplete="off"
                checked="checked"
              // value="Inward"
              // value={stageupdate?.productType }
              // checked={stageupdate?.productType == 'Inward'}
              // onChange={updatehandleChange}
              />
              <label className="btn vaultBtn p-2" htmlFor="Satisfied">Satisfied</label>
            </div>
            <div>
              <input
                type="radio"
                className="btn-check"
                name="productType"
                id="Neutral"
                autoComplete="off"
                checked=""
              // value="Inward"
              // value={stageupdate?.productType }
              // checked={stageupdate?.productType == 'Inward'}
              // onChange={updatehandleChange}
              />
              <label className="btn vaultBtn p-2" htmlFor="Neutral">Neutral</label>
            </div>
            <div>
              <input
                type="radio"
                className="btn-check"
                name="productType"
                id="Dissatisfied"
                autoComplete="off"
                checked=""
              // value="Inward"
              // value={stageupdate?.productType }
              // checked={stageupdate?.productType == 'Inward'}
              // onChange={updatehandleChange}
              />
              <label className="btn vaultBtn p-2" htmlFor="Dissatisfied">Dissatisfied</label>
            </div>
            <div>
              <input
                type="radio"
                className="btn-check"
                name="productType"
                id="VeryDissatisfied"
                autoComplete="off"
                checked=""
              // value="Inward"
              // value={stageupdate?.productType }
              // checked={stageupdate?.productType == 'Inward'}
              // onChange={updatehandleChange}
              />
              <label className="btn vaultBtn p-2" htmlFor="VeryDissatisfied">Very Dissatisfied</label>
            </div>
            
           


          </div>
        </div>
      </div> */}
      {/* <div className="m-3">
  {surveyQuestions.map((question) => (
    <div key={question._id}>
      <div>
        <span className="cshead">{question.topicName}</span>
      </div>
      <div className="mt-3 mb-3">
        <span className="cs_Ques">{question.question}</span>
      </div>
      <div className="d-flex flex-column">
        <div className="vaultUpdate btn-group" role="group" aria-label="">
          {question.answers.map((answer) => (
            <div key={answer.answer}>
              <input
                type="radio"
                className="btn-check"
                name={`satisfaction_${question._id}`}
                id={`satisfaction_${question._id}_${answer.answer}`}
                autoComplete="off"
                value={answer.avg}
                // onChange={(e) => handleSatisfactionChange(question._id, answer.avg)}
              />
              <label className="btn vaultBtn p-2" htmlFor={`satisfaction_${question._id}_${answer.answer}`}>
                {answer.answer} 
              </label>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  ))}
</div> */}

<div className="m-4 ratingscroll" >
  {surveyQuestions?.map((question, index) => (
    <div key={question?._id}>
      {index === 0 || surveyQuestions[index - 1]?.topicName !== question?.topicName ? (
        <div>
          <div>
            <span className="cshead">{question?.topicName}</span>
          </div>
          <hr /> {/* Add a horizontal line to separate topics */}
        </div>
      ) : null}
      <div className="mt-3 mb-3">
        <span className="cs_Ques ">{index + 1}. {question?.question}</span> 
      </div>
      <div className="d-flex flex-column">
        {question?.answers.map((answer) => (
          <div key={answer?.answer} className="d-flex align-items-center p-2">
            <div  style={{ width: '100px', fontSize:'12px' }}>{answer?.answer}</div>
            <div className="progress" style={{ height: '20px', width: '200px', marginLeft: '10px', position: 'relative' }}>
              <div
                className={`progress-bar ${getProgressBarColor(answer?.avg)}`}
                role="progressbar"
                style={{
                  width: `${answer?.avg.toFixed(2)}%`,
                }}
                aria-valuenow={answer?.avg}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
              <span
                className="position-absolute top-50 end-0 translate-middle p-1"
                style={{ color: 'black', fontSize: '12px', transform: 'translateY(50%)' }}
              >
                {`${Number.isInteger(answer?.avg) ? answer?.avg.toFixed(0) : answer?.avg.toFixed(2)}%`}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
  <div className="mt-3">
    {/* <button className="btn btn-primary me-3" onClick={increasePercentage}>
      Increase Percentage
    </button>
    <button className="btn btn-primary" onClick={decreasePercentage}>
      Decrease Percentage
    </button> */}
  </div>
</div>





      <Footer />
    </div>
  )
}

export default Rating
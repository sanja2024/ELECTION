import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import profile_img from "../../Common/asset/images/voteimg/agents_img.svg";
import { useLocation } from "react-router-dom";
import { createUser } from "../../Common/redux/slices/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ASSIGN_VOTER_URL } from "../../Common/Url/ServerConfig";
import { toast } from "react-toastify";
import { Assign2_ROUTE } from "../../Common/Route/Routes";
const Assign = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  console.log("state", state?.response);

  const handleSelect = (selectedVoter) => {
    setSelectedVoter(selectedVoter);
  };

  const VoterComponent = ({ voter }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
      const { checked } = event.target;
      setIsChecked(checked);
      if (checked) {
        handleSelect({
          voter_id: voter?.epicNo,
          poll_status:false,
          poll_time:'0',
          visit_code:0
        });
      } else {
        handleSelect(null);
      }
    };

    return (<>
      <div className="scroll_cards">
        <div className="d-flex">
          <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id={`checkbox-${voter?.epicNo}`}
            checked={isChecked}
            onChange={handleCheckboxChange} // Use handleCheckboxChange as the onChange handler
          />
            <label
              className="form-check-label"
              htmlFor={`checkbox-${voter?.epicNo}`}
            > </label>
          </div>
        </div>
        <div className="card saerched_dataCard">
          <div className="card-body pb-1">
            <div className="d-flex border-bottom pb-2">
              <div>
                <img className="searchedimg" src={profile_img} alt="profile" />
              </div>
              <div className="d-flex flex-column">
                <span className="searchedAgentName">
                  {`${voter.fmNameEn} ${voter.lastnameEn}`}
                </span>
                <span className="searchedAgentName">
                  {`${voter.fmNameV1} ${voter.lastnameV1}`}
                </span>
              </div>
            </div>
            <div className="searched_data">
              <div className="d-flex flex-column">
                <span className="searchedTitle">S/O</span>
                <span className="searchedData">{`${voter.rlnFmNmEn} ${voter.rlnLNmEn}`}</span>
              </div>
              <div className="d-flex flex-column">
                <span className="searchedTitle">Gender</span>
                <span className="searchedData">{voter.gender}</span>
              </div>
              <div className="d-flex flex-column">
                <span className="searchedTitle">Age</span>
                <span className="searchedData">{voter.age}</span>
              </div>
              <div className="d-flex flex-column">
                <span className="searchedTitle">Address</span>
                <span className="searchedData">{voter.cHouseNo}</span>
              </div>
            </div>
            <div className="searched_data2 border-0">
              <div className="d-flex flex-column">
                <span className="searchedTitle">Voter Id</span>
                <span className="searchedData">{voter.epicNo}</span>
              </div>
              <div className="d-flex flex-column">
                <span className="searchedTitle">Voter No.</span>
                <span className="searchedData">{voter.slnoinpart}</span>
              </div>
            </div>
            <div className="">
              <div>
                <div className="d-flex justify-content-evenly">
                  
                  {/* Add buttons here */}
                </div>
                {/* Add collapsible content here */}
              </div>
            </div>
          </div>
        </div>
      </div>

          </> );
  };

  const [selectedVoter, setSelectedVoter] = useState(null);

  useEffect(() => {
    console.log(selectedVoter, "selectedVoter");
    // You can perform actions here when the selected voter changes
  }, [selectedVoter]);



  const handleSubmit = () => {
    const userData = {
      payload: selectedVoter,
       endPoint: ASSIGN_VOTER_URL,
    };

    dispatch(createUser(userData)).then((res) => {
      if (res.payload.message == 'success') {
          // console.log(res?.payload.data.message,'sjkbdsjkdbsbd')
          toast.success(res?.payload.data.message, {
            position: "top-right",
          });
          navigate(Assign2_ROUTE);
      }else{
        // toast.error("Error", {
        //   position: "top-right",
  
        // });
      }

    });
  };
  return (
    <div>
      <Header />
      <div className="searchedcardHeadassign">
        {state?.response.map((voter, index) => (
          <VoterComponent key={index} voter={voter} />
        ))}

      </div>
      <div>

   
      <button className="sbmit_btn mt-4 mb-4 m-auto" onClick={handleSubmit}>Submit</button>
      </div>
      <Footer />
    </div>
  );
};

export default Assign;

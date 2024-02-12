import React, { useState, useEffect, useRef } from "react";
import "./AddAgents.css";

import profile_img from "../../Common/asset/images/voteimg/agents_img.svg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { ADD_AGENT_SEARCH_URL } from "../../Common/Url/ServerConfig";
import { useDispatch, useSelector } from "react-redux";
import { createRegion } from "../../Common/redux/slices/geoSlice";
import { agentSearch } from "../../Common/redux/slices/agentSlice";
const SearchAgent = () => {
  const dispatch = useDispatch();
  const [searchList, setSearchList] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cardList, setCardList] = useState([]);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const handleAgentSearch = () => {
    console.log(searchQuery, 'searchdddk')
    // setSearchList(true);
    const userData = {
      payload: {
        name: parseInt(searchQuery, 10),
      },
      endPoint: ADD_AGENT_SEARCH_URL,
    };
    dispatch(agentSearch(userData)).then((res) => {
      if (res?.payload?.message === "success") {
        setCardList(res?.payload?.data.list);
        console.log(res?.payload?.data.list, 'wwewewe')

      }
    });

    //   dispatch(agentSearch(userData)).then((res) => {
    //     if (res?.payload?.message === "success") {
    // console.log(res?.payload?.data.list[0],'searchdddk')
    //      if(res?.payload?.data.list[0]){
    //       // setSelectedRole("AGENT")
    //       // setRoleDisable(true)
    //      }else{
    //       // setRoleDisable(false)
    //     }

    //     }
    //   });
  };


  return (
    <div className="container p-0">
      <Header />
      <div className="mt-2">
        <div className="">
          <div className="search_agent_inside ">
            <div className="d-flex " style={{ flexBasis: "90%" }}>
              <div className="searchagentform" role="search">
                <input
                  className="form-control searchagentinput "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
            <div style={{ flexBasis: "10%" }}>
              <button
                className="search_agent_btn  "
                onClick={handleAgentSearch}
              >
                {" "}
                <h4
                  className="text-white bi bi-search mb-0"
                  onClick={handleAgentSearch}
                ></h4>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="searchedcardHead mt-3">
        <div className="scroll_cards">
          {cardList?.map((item, index) => (
            <div className="card saerched_dataCard" key={index}>
              <div className="card-body pb-1">
                <div className="d-flex border-bottom pb-2">
                  <div>
                    <img className="searchedimg" src={profile_img} alt="profile"></img>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="searchedAgentName">{item.name}</span>
                    <span className="searchedAgentName">{item.name}</span>
                  </div>
                </div>
                <div className="searched_data">
                  <div className="d-flex flex-column">
                    <span className="searchedTitle">S/O</span>
                    <span className="searchedData">{item.fatherName}</span>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="searchedTitle">Gender</span>
                    <span className="searchedData">{item.gender}</span>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="searchedTitle">Age</span>
                    <span className="searchedData">30</span> {/* Age is not provided in the data */}
                  </div>
                  <div className="d-flex flex-column">
                    <span className="searchedTitle">Address</span>
                    <span className="searchedData">{item.address}</span>
                  </div>
                </div>
                <div className="searched_data2 border-0">
                  <div className="d-flex flex-column">
                    <span className="searchedTitle">Voter Id</span>
                    <span className="searchedData">{item.voterId}</span>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="searchedTitle">Mobile No.</span>
                    <span className="searchedData">{item.mobileNo}</span>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="searchedTitle">Alternate Mobile No.</span>
                    <span className="searchedData">{item.mobileNo}</span>
                  </div>
                </div>
                <div className="searched_data2 border-0">
                  <div className="d-flex flex-column">
                    <span className="searchedTitle">EMail Id</span>
                    <span className="searchedData">{item.voterId}</span>
                  </div>
                  {/* <div className="d-flex flex-column">
                    <span className="searchedTitle">Mobile No.</span>
                    <span className="searchedData">{item.mobileNo}</span>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="searchedTitle">Alternate Mobile No.</span>
                    <span className="searchedData">{item.mobileNo}</span>
                  </div> */}
                </div>
                {/* <div className="searched_data  ">
                  <div className="d-flex flex-column">
                    <span className="searchedTitle">Booth Address</span>
                    <span className="searchedData">B9T878G9</span>
                  </div>
                </div> */}
                {/* <div className="">
                  <div>
                    <div className="d-flex justify-content-evenly">
                      <div>
                        <button className="searched_status">SURVEY</button>
                      </div>
                      <div>
                        <button
                          className="searched_status "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapseExample${index}`}
                          aria-expanded="false"
                          aria-controls={`collapseExample${index}`}
                        >
                          Poll Status
                        </button>
                      </div>
                      <div>
                        <button
                          className="searched_status"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#visitStatus"
                          aria-expanded="false"
                          aria-controls="VisitStatus"
                        >
                          Visit Status
                        </button>
                      </div>
                    </div>
                    <div className="collapse coll_width" id={`collapseExample${index}`}>
                      <div className="card card-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <div className="form-group">
                              <div>
                                <label className="switch">
                                  <input
                                    type="checkbox"
                                  />
                                  <span className="slider round"></span>
                                </label>
                              </div>
                            </div>
                            <span className="searchedTitle p-1">Polled</span>
                            <span className="searchedTitle p-1">Not-Polled</span>
                          </div>

                          <div className="btn-group dropdown">
                            <button className="btn border rounded p-2 btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Time
                            </button>
                            <ul className="dropdown-menu scrollvisit_status">
                              <li><a className="dropdown-item" href="#">07:00 AM</a></li>
                              <li><a className="dropdown-item" href="#">08:00 AM</a></li>
                              <li><a className="dropdown-item" href="#">09:00 AM</a></li>
                              <li><a className="dropdown-item" href="#">10:00 AM</a></li>
                              <li><a className="dropdown-item" href="#">11:00 AM</a></li>
                              <li><a className="dropdown-item" href="#">12:00 PM</a></li>
                              <li><a className="dropdown-item" href="#">01:00 PM</a></li>
                              <li><a className="dropdown-item" href="#">02:00 PM</a></li>
                              <li><a className="dropdown-item" href="#">03:00 PM</a></li>
                              <li><a className="dropdown-item" href="#">04:00 PM</a></li>
                              <li><a className="dropdown-item" href="#">05:00 PM</a></li>
                              <li><a className="dropdown-item" href="#">06:00 PM</a></li>
                            </ul>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="collapse coll_width2" id="visitStatus">
                      <div className="card card-body p-0">

                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          ))}




        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchAgent;

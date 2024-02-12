import React, { useState, useEffect, useRef } from "react";
import "./AddAgents.css";

import profile_img from "../../Common/asset/images/voteimg/agents_img.svg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { ADD_AGENT_SEARCH_URL, GET_VISITOR_URL, VOTER_SEARCH_URL } from "../../Common/Url/ServerConfig";
import { useDispatch, useSelector } from "react-redux";
import { createRegion } from "../../Common/redux/slices/geoSlice";
import { agentSearch, getVisitor } from "../../Common/redux/slices/agentSlice";
import { createUser } from "../../Common/redux/slices/usersSlice";
import { useNavigate } from "react-router-dom";
import { AgentAccessCode } from "../../Common/Route/ConfigRoute";
const SearchVoter = () => {
  const AccessCode = AgentAccessCode()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchList, setSearchList] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [expand, setExpand] = useState("");

  const [cardList, setCardList] = useState([]);

  const visitorResp = useSelector((state) => state.agent.visitorData);
  const [selectedVisit, setSelectedVisit] = useState("status");


  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  useEffect(() => {

    const reqParams = {
      payload: "",
      endpoint: GET_VISITOR_URL
    }
    dispatch(getVisitor(reqParams))
  }, [])
  const handleAgentSearch = () => {
    console.log(searchQuery, 'searchdddk')
    // setSearchList(true);
    // const userData = {
    //   payload: {
    //     name: searchQuery,
    //   },
    //   endPoint: VOTER_SEARCH_URL,
    // };
    const userData = {
      payload: {
        voter_id: searchQuery
      },
      endPoint: VOTER_SEARCH_URL,
    };
    dispatch(createUser(userData)).then((res) => {
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
            <div className="card saerched_dataCard1" key={index}>
              <div className="card-body pb-1 p-0">
                <div className="d-flex justify-content-between border-bottom pb-2">
                  <div className="name_img">


                    {/* <div>
                      <img className="searchedimg" src={profile_img} alt="profile"></img>
                    </div> */}
                    <div className="d-flex flex-column">
                      <span className="searchedAgentName">{item.fmNameEn}</span>
                      <span className="searchedAgentName">{item.fmNameV1}</span>
                    </div> </div>

                  <div className='VoteNo1'>

                    <span className='noVote1'>{item?.SLNOINPART}</span>
                  </div>
                </div>
                <div className="searched_data">
                  <div className="d-flex flex-column">
                    <span className="searchedTitle">S/O</span>
                    <span className="searchedData">{item.rlnFmNmEn}</span>
                    <span className="searchedData">{item.rlnFmNmV1}</span>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="searchedTitle">Gender</span>
                    <span className="searchedData">{item.gender}</span>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="searchedTitle">Age</span>
                    <span className="searchedData">{item.age}</span>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="searchedTitle">Voter Id</span>
                    <span className="searchedData">{item.epicNo}</span>
                  </div>

                </div>
                <div className="searched_data border-0">
                  <div className="d-flex flex-column">
                    <span className="searchedTitle">Address</span>
                    <span className="searchedData">{item.cHouseNo}, {item.sectionNo}</span>
                  </div>
                  {/* <div className="d-flex flex-column">
                    <span className="searchedTitle">Mobile No.</span>
                    <span className="searchedData">{item.mobileNo}</span>
                  </div> */}
                </div>
                {/* <div className="searched_data  ">
                  <div className="d-flex flex-column">
                    <span className="searchedTitle">Booth Status</span>
                    <span className="searchedData">B9T878G9</span>
                  </div>
                </div> */}
                <div className="">
                  <div>
                    {AccessCode != "GUEST" ? (<div className="d-flex justify-content-evenly">
                      <div>
                        <button
                          onClick={() => {
                            navigate("/Survey", {
                              state: {
                                data: {
                                  label: "",
                                  item
                                }
                              },
                            })
                          }}
                          className="searched_status">SURVEY</button>
                      </div>
                      <div>
                        <button
                          className="searched_status "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapseExample${index}`}
                          aria-expanded="false"
                          aria-controls={`collapseExample${index}`}
                          onClick={() => { setExpand("poll") }}
                        >
                          Poll Status
                        </button>
                      </div>
                      <div>
                        <button
                          className="searched_status"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#visit${index}`}
                          aria-expanded="false"
                          aria-controls={`visit${index}`}
                          onClick={() => { setExpand("visit") }}
                        >
                          Visit Status
                        </button>
                      </div>
                    </div>) : <></>}
                    {expand == "poll" ?
                      <div className="collapse coll_width" id={`collapseExample${index}`}>
                        <div className="card card-body">
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <div className="form-group">
                                <div>
                                  <label className="switch">
                                    <input
                                      type="checkbox"
                                    // checked={row.lock}
                                    // onChange={(e) => {
                                    //   handleLockChange(row._id, row.lock);
                                    //   // console.log(Row ${row._id} is active: ${row.lock});
                                    // }}
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
                      </div> :
                      <div className="collapse coll_width" id={`visit${index}`}>
                        <div className="card card-body">
                          <div className="d-flex justify-content-between align-items-center">


                            <div className="btn-group dropdown">

                              <select
                                id=" VisitorStatus"
                                className="form-select"
                                aria-label=" Visitor Status"
                                placeholder={"status"}
                                defaultValue={"status"}
                                onChange={(event) => setSelectedVisit(event.target.value)}
                                value={selectedVisit}
                              // disabled={roleDisable}
                              >

                                {visitorResp?.data?.list.map((visit, index) => (
                                  <option key={index} value={visit.roleCode}>
                                    {visit.visitName}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                        </div>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchVoter;

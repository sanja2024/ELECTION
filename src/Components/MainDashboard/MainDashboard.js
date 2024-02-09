import React from "react";
import "./MainDashboard.css";

// IMAGE
import agents_img from "../../Common/asset/images/voteimg/agents_img.svg";
import logo from "../../Common/asset/images/voteimg/admin_icon.svg";
// ICON
import VoteSearch from "../../Common/asset/images/voteimg/VoteSearch.svg";
import AddAgent from "../../Common/asset/images/voteimg/AddAgent.svg";
import Mapping from "../../Common/asset/images/voteimg/Mapping.svg";
import searchstatus from "../../Common/asset/images/voteimg/searchstatus.svg";
import Assign from "../../Common/asset/images/voteimg/Assign.svg";
import Survey from "../../Common/asset/images/voteimg/Survey.svg";
import Home_icon from "../../Common/asset/images/voteimg/Home_icon.svg";
import center_icon from "../../Common/asset/images/voteimg/center_icon.svg";
import Voters from "../../Common/asset/images/voteimg/Voters.svg";
import NonVoters from "../../Common/asset/images/voteimg/NonVoters.svg";
import BoothStatus from "../../Common/asset/images/voteimg/BoothStatus.svg";
import Report from "../../Common/asset/images/voteimg/Report.svg";
import PollStatus from "../../Common/asset/images/voteimg/PollStatus.svg";
import menu from "../../Common/asset/images/voteimg/menu.svg";

import Footer from "../Footer/Footer";
import { AddAgents_ROUTE, Assign2_ROUTE, RoleMapping_ROUTE, SearchAgent_ROUTE, Survey_ROUTE, VoterSearch_ROUTE } from "../../Common/Route/Routes";
import { useNavigate } from "react-router-dom";

const MainDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="">

      <div className="bgImgMD">
        <div className="d-flex justify-content-between align-items-top p-2" style={{ width: "100%" ,zIndex:"2 !important"}}>
          <div className="mt-1 ">
            <img className="logot" src={logo}></img>
          </div>
          <div className="mt-3 me-4" >

            <button class="btn  p-1 border rounded" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{}} >  <img className="logot1" src={menu}></img></button>

           
          </div>
        </div>
        <div className="blog_scroll">
          <div className="blog">
            <p className="blogHeading">Right To Vote</p>
            <p className="blog_content">
              Cornerstone of our democracy, allowing citizens to have a say in
              who governs them and how they are governed. The ability to vote
              is not only....
            </p>
          </div>
          <div className="blog">
            <p className="blogHeading">Right To Vote</p>
            <p className="blog_content">
              Cornerstone of our democracy, allowing citizens to have a say in
              who governs them and how they are governed. The ability to vote
              is not only....
            </p>
          </div>
          <div className="blog">
            <p className="blogHeading">Right To Vote</p>
            <p className="blog_content">
              Cornerstone of our democracy, allowing citizens to have a say in
              who governs them and how they are governed. The ability to vote
              is not only....
            </p>
          </div>
          <div className="blog">
            <p className="blogHeading">Right To Vote</p>
            <p className="blog_content">
              Cornerstone of our democracy, allowing citizens to have a say in
              who governs them and how they are governed. The ability to vote
              is not only....
            </p>
          </div>
        </div>
      </div>

      <div className="welcomebackmd">
      <div class="offcanvas zindex offcanvas-end" tabindex="2" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <button type="button" class="btn-close close_btn" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              <div class="offcanvas-body" >
                <div className="logout">
                  <button className="btnLogout"> Logout</button>
                  </div>             
              </div>
            </div>
        {/* <div className="wb_logo"><img src={logo}></img></div> */}

        <div className="row m-0 dashboard_data">
          <div>
            <span className="">Agents</span>
            <div className="agents_detail_scroll">
              <div className="agents_detail">
                <div className="card p-0">
                  <div className="card-header p-0">
                    <span className="agentc_name">U Namasivayam Vadivelan</span>
                  </div>
                  <div className="card-body p-0">
                    <div className="d-flex">
                      <div>
                        {" "}
                        <img className="agents_img" src={agents_img}></img>
                      </div>
                      <div className="agents_data_head">
                        <div className="d-flex flex-column">
                          <span className="agents_data">Designation </span>
                          <span className="agents_val">
                            Chief Prime Officer
                          </span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="agents_data">Polled Vote </span>
                          <span className="agents_val">225</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="agents_data">No. of Votes </span>
                          <span className="agents_val">125000</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="agents_data">Booth Name </span>
                          <span className="agents_val">Donbosco School</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="agents_detail">
                <div className="card p-0">
                  <div className="card-header p-0">
                    <span className="agentc_name">U Namasivayam Vadivelan</span>
                  </div>
                  <div className="card-body p-0">
                    <div className="d-flex">
                      <div>
                        {" "}
                        <img className="agents_img" src={agents_img}></img>
                      </div>
                      <div className="agents_data_head">
                        <div className="d-flex flex-column">
                          <span className="agents_data">Designation </span>
                          <span className="agents_val">
                            Chief Prime Officer
                          </span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="agents_data">Polled Vote </span>
                          <span className="agents_val">225</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="agents_data">No. of Votes </span>
                          <span className="agents_val">125000</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="agents_data">Booth Name </span>
                          <span className="agents_val">Donbosco School</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <span>Key Features</span>
              <div className="KeyFeature_detail">
                <div className="KeyfeatureBoxTop">
                  <div className="KeyfeatureBox " >
                    <img className="KeyfeatureIcons" src={VoteSearch}></img>
                    <span className="KeyfeatureVal">Vote Search</span>
                  </div>
                  <div className="KeyfeatureBox">
                    <img className="KeyfeatureIcons" src={VoteSearch}></img>
                    <span className="KeyfeatureVal">Constituencies</span>
                  </div>
                  <div className="KeyfeatureBox">
                    <img className="KeyfeatureIcons" src={VoteSearch}></img>
                    <span className="KeyfeatureVal">Candidate info</span>
                  </div>
                  <div className="KeyfeatureBox">
                    <img className="KeyfeatureIcons" src={VoteSearch}></img>
                    <span className="KeyfeatureVal">Election info</span>
                  </div>
                  <div className="KeyfeatureBox">
                    <img className="KeyfeatureIcons" src={VoteSearch}></img>
                    <span className="KeyfeatureVal">Survey</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <span>Agent</span>
              <div className="Agent_detail">
                <div className="Agent_detailBoxTop">
                  <div className="KeyfeatureBox ">
                    <img className="AddAgentIcons" src={AddAgent}></img>
                    <span
                      className="KeyfeatureVal"
                      onClick={() => {
                        navigate(AddAgents_ROUTE);
                      }}
                    >
                      Add Agent
                    </span>
                  </div>
                  <div className="KeyfeatureBox">
                    <img className="AddAgentIcons" src={Mapping}></img>
                    <span
                      className="KeyfeatureVal"
                      onClick={() => {
                        navigate(RoleMapping_ROUTE);
                      }}
                    >
                      Role Mapping
                    </span>
                  </div>
                  <div className="KeyfeatureBox" onClick={() => { navigate(SearchAgent_ROUTE); }}>
                    <img className="AddAgentIcons" src={searchstatus}></img>
                    <span className="KeyfeatureVal">Agent Search</span>
                  </div>
                  <div className="KeyfeatureBox" onClick={() => { navigate(VoterSearch_ROUTE); }}>
                    <img className="AddAgentIcons" src={searchstatus}></img>
                    <span className="KeyfeatureVal">Vote Search</span>
                  </div>
                  <div className="KeyfeatureBox" onClick={() => { navigate(Assign2_ROUTE);}}>
                    <img className="AddAgentIcons" src={Assign}></img>
                    <span className="KeyfeatureVal">Assign</span>
                  </div>
                  <div className="KeyfeatureBox">
                    <img className="AddAgentIcons" src={Survey}></img>
                    <span onClick={() => {
                      navigate(Survey_ROUTE);
                    }} className="KeyfeatureVal">Survey</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 mb-5">
              <span>My Status</span>
              <div className="Agent_detail">
                <div className="Agent_detailBoxTop">
                  <div className="KeyfeatureBox ">
                    <img className="AddAgentIcons" src={Voters}></img>
                    <span
                      className="KeyfeatureVal"
                      onClick={() => {
                        navigate(AddAgents_ROUTE);
                      }}
                    >
                      Voters
                    </span>
                  </div>
                  <div className="KeyfeatureBox">
                    <img className="AddAgentIcons" src={NonVoters}></img>
                    <span
                      className="KeyfeatureVal"
                      onClick={() => {
                        navigate(RoleMapping_ROUTE);
                      }}
                    >
                      Non-Voters
                    </span>
                  </div>
                  <div className="KeyfeatureBox">
                    <img className="AddAgentIcons" src={BoothStatus}></img>
                    <span className="KeyfeatureVal">Booth Status</span>
                  </div>
                  <div className="KeyfeatureBox">
                    <img className="AddAgentIcons" src={Report}></img>
                    <span className="KeyfeatureVal">Report</span>
                  </div>
                  <div className="KeyfeatureBox">
                    <img className="AddAgentIcons" src={PollStatus}></img>
                    <span className="KeyfeatureVal">Poll Status</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MainDashboard;

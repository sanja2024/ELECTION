import React, { useState, useEffect, useRef } from "react";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import profile_img from "../../Common/asset/images/voteimg/agents_img.svg";
import { ADD_AGENT_SEARCH_URL } from "../../Common/Url/ServerConfig";
import { useDispatch, useSelector } from "react-redux";
import { createRegion } from "../../Common/redux/slices/geoSlice";
import { agentSearch } from "../../Common/redux/slices/agentSlice";
const Assign = () => {

  return (
    <div>
      <Header />
      <div className="searchedcardHeadassign">
        <div className="scroll_cards">
          <div className="d-flex">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">

              </label>
            </div>

          </div>
          <div className="card saerched_dataCard" >
            <div className="card-body pb-1">
              <div className="d-flex border-bottom pb-2">
                <div>
                  <img className="searchedimg" src={profile_img} alt="profile"></img>
                </div>
                <div className="d-flex flex-column">
                  <span className="searchedAgentName">
                    U Namasivayam Vadivelan
                  </span>
                  <span className="searchedAgentName">
                    உ நமசிவாயம் வடிவேலன்
                  </span>
                </div>
              </div>
              <div className="searched_data">
                <div className="d-flex flex-column">
                  <span className="searchedTitle">S/O</span>
                  <span className="searchedData">Umapathy Sivam</span>
                </div>
                <div className="d-flex flex-column">
                  <span className="searchedTitle">Gender</span>
                  <span className="searchedData">Male</span>
                </div>
                <div className="d-flex flex-column">
                  <span className="searchedTitle">Age</span>
                  <span className="searchedData">30</span>
                </div>
                <div className="d-flex flex-column">
                  <span className="searchedTitle">Address</span>
                  <span className="searchedData">
                    Guindy, Chennai, Tamil Nadu, India
                  </span>
                </div>
              </div>
              <div className="searched_data2 border-0">
                <div className="d-flex flex-column">
                  <span className="searchedTitle">Voter Id</span>
                  <span className="searchedData">B9T878G9</span>
                </div>
                <div className="d-flex flex-column">
                  <span className="searchedTitle">Voter No.</span>
                  <span className="searchedData">23867</span>
                </div>
              </div>
              <div className="searched_data  ">
                <div className="d-flex flex-column">
                  <span className="searchedTitle">Booth Status</span>
                  <span className="searchedData">B9T878G9</span>
                </div>

              </div>
              <div className="">
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
                        // data-bs-target={`#collapseExample${index}`}
                        data-bs-target="#assignpage"
                        aria-expanded="false"
                        // aria-controls={`collapseExample${index}`}
                        aria-controls='assignpage'
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
                  <div className="collapse coll_width" id="assignpage">
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
                  </div>
                  <div className="collapse coll_width2" id="visitStatus">
                    <div className="card card-body p-0">
okok
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="scroll_cards">
          <div className="d-flex">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">

              </label>
            </div>

          </div>
          <div className="card saerched_dataCard" >
            <div className="card-body pb-1">
              <div className="d-flex border-bottom pb-2">
                <div>
                  <img className="searchedimg" src={profile_img} alt="profile"></img>
                </div>
                <div className="d-flex flex-column">
                  <span className="searchedAgentName">
                    U Namasivayam Vadivelan
                  </span>
                  <span className="searchedAgentName">
                    உ நமசிவாயம் வடிவேலன்
                  </span>
                </div>
              </div>
              <div className="searched_data">
                <div className="d-flex flex-column">
                  <span className="searchedTitle">S/O</span>
                  <span className="searchedData">Umapathy Sivam</span>
                </div>
                <div className="d-flex flex-column">
                  <span className="searchedTitle">Gender</span>
                  <span className="searchedData">Male</span>
                </div>
                <div className="d-flex flex-column">
                  <span className="searchedTitle">Age</span>
                  <span className="searchedData">30</span>
                </div>
                <div className="d-flex flex-column">
                  <span className="searchedTitle">Address</span>
                  <span className="searchedData">
                    Guindy, Chennai, Tamil Nadu, India
                  </span>
                </div>
              </div>
              <div className="searched_data2 border-0">
                <div className="d-flex flex-column">
                  <span className="searchedTitle">Voter Id</span>
                  <span className="searchedData">B9T878G9</span>
                </div>
                <div className="d-flex flex-column">
                  <span className="searchedTitle">Voter No.</span>
                  <span className="searchedData">23867</span>
                </div>
              </div>
              <div className="searched_data  ">
                <div className="d-flex flex-column">
                  <span className="searchedTitle">Booth Status</span>
                  <span className="searchedData">B9T878G9</span>
                </div>

              </div>
              <div className="">
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
                        // data-bs-target={`#collapseExample${index}`}
                        data-bs-target="collapseExample"
                        aria-expanded="false"
                        // aria-controls={`collapseExample${index}`}
                        aria-controls='collapseExample'
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
                  <div className="collapse coll_width" id="collapseExample">
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
                  </div>
                  <div className="collapse coll_width2" id="visitStatus">
                    <div className="card card-body p-0">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Assign
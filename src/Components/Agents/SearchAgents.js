import React from "react";
import "./AddAgents.css";

import profile_img from "../../Common/asset/images/voteimg/agents_img.svg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const SearchAgent = () => {
  return (
    <div className="container p-0">
      <Header />
      <div className="mt-2">
        <div className="">
          <span className="search_agent">
            <div className="search_agent_inside ">
              <div className="d-flex ">
                <form className="searchagentform" role="search">
                  <input
                    className="form-control searchagentinput "
                    type="search"
                    placeholder="Enter Agent ID or Voter ID"
                    aria-label="Search"
                  // value={searchQuery}
                  // onChange={(e) => setBarCode(e.target.value)}
                  />
                </form>
              </div>
              <div>
                <button
                  className="search_agent_btn  "
                // onClick={() => handleClick(searchLeadID)}
                >
                  {" "}
                  <h4
                    className="text-white bi bi-search mb-0"
                  // src={search_new_img}
                  ></h4>
                </button>
              </div>
            </div>
          </span>
        </div>
      </div>

      <div className="searchedcardHead mt-3">
        <div className="scroll_cards">
          <div className="card saerched_dataCard">
            <div className="card-body pb-1">
              <div className="d-flex border-bottom pb-2">
                <div>
                  <img className="searchedimg" src={profile_img}></img>
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
              <div className="searched_data border-0">
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
                      {" "}
                      <button className="searched_status">SURVEY</button>
                    </div>
                    <div>
                      {" "}
                      <button
                        className="searched_status "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample1"
                        aria-expanded="false"
                        aria-controls="collapseExample1"
                      >
                        poll status
                      </button>

                    </div>

                    <div>
                      <button className="searched_status"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#visitStatus"
                        aria-expanded="false"
                        aria-controls="VisitStatus"
                      >visit status</button>
                    </div>
                  </div>
                  <div class="collapse coll_width" id="VisitStatus">
                    <div class="card card-body">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                        <label class="form-check-label" for="flexCheckDefault1">
                          Polled
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked />
                        <label class="form-check-label" for="flexCheckChecked2">
                          Not Polled
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="collapse coll_width2" id="visitStatus">
                    <div class="card card-body p-0">
                      <div class="btn-group dropend">
                        <button class="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                         Time
                        </button>
                        <ul class="dropdown-menu scrollvisit_status">
                          <li><a class="dropdown-item" href="#">07:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">08:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">09:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">10:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">11:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">12:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">01:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">02:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">03:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">04:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">05:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">06:00 PM</a></li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card saerched_dataCard">
            <div className="card-body pb-1">
              <div className="d-flex border-bottom pb-2">
                <div>
                  <img className="searchedimg" src={profile_img}></img>
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
              <div className="searched_data border-0">
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
                      {" "}
                      <button className="searched_status">SURVEY</button>
                    </div>
                    <div>
                      {" "}
                      <button
                        className="searched_status "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample2"
                        aria-expanded="false"
                        aria-controls="collapseExample2"
                      >
                        poll status
                      </button>

                    </div>

                    <div>
                      <button className="searched_status"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#visitStatus"
                        aria-expanded="false"
                        aria-controls="VisitStatus2"
                      >visit status</button>
                    </div>
                  </div>
                  <div class="collapse coll_width" id="collapseExample1">
                    <div class="card card-body">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                        <label class="form-check-label" for="flexCheckDefault1">
                          Polled
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked />
                        <label class="form-check-label" for="flexCheckChecked2">
                          Not Polled
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="collapse coll_width2" id="visitStatus">
                    <div class="card card-body p-0">
                      <div class="btn-group dropend">
                        <button class="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                         Time
                        </button>
                        <ul class="dropdown-menu scrollvisit_status">
                          <li><a class="dropdown-item" href="#">07:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">08:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">09:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">10:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">11:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">12:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">01:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">02:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">03:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">04:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">05:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">06:00 PM</a></li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card saerched_dataCard">
            <div className="card-body pb-1">
              <div className="d-flex border-bottom pb-2">
                <div>
                  <img className="searchedimg" src={profile_img}></img>
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
              <div className="searched_data border-0">
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
                      {" "}
                      <button className="searched_status">SURVEY</button>
                    </div>
                    <div>
                      {" "}
                      <button
                        className="searched_status "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample1"
                        aria-expanded="false"
                        aria-controls="collapseExample1"
                      >
                        poll status
                      </button>

                    </div>

                    <div>
                      <button className="searched_status"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#visitStatus"
                        aria-expanded="false"
                        aria-controls="collapseExample1"
                      >visit status</button>
                    </div>
                  </div>
                  <div class="collapse coll_width" id="collapseExample1">
                    <div class="card card-body">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                        <label class="form-check-label" for="flexCheckDefault1">
                          Polled
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked />
                        <label class="form-check-label" for="flexCheckChecked2">
                          Not Polled
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="collapse coll_width2" id="visitStatus">
                    <div class="card card-body p-0">
                      <div class="btn-group dropend">
                        <button class="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                         Time
                        </button>
                        <ul class="dropdown-menu scrollvisit_status">
                          <li><a class="dropdown-item" href="#">07:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">08:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">09:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">10:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">11:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">12:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">01:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">02:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">03:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">04:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">05:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">06:00 PM</a></li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card saerched_dataCard">
            <div className="card-body pb-1">
              <div className="d-flex border-bottom pb-2">
                <div>
                  <img className="searchedimg" src={profile_img}></img>
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
              <div className="searched_data border-0">
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
                      {" "}
                      <button className="searched_status">SURVEY</button>
                    </div>
                    <div>
                      {" "}
                      <button
                        className="searched_status "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample1"
                        aria-expanded="false"
                        aria-controls="collapseExample1"
                      >
                        poll status
                      </button>

                    </div>

                    <div>
                      <button className="searched_status"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#visitStatus"
                        aria-expanded="false"
                        aria-controls="collapseExample1"
                      >visit status</button>
                    </div>
                  </div>
                  <div class="collapse coll_width" id="collapseExample1">
                    <div class="card card-body">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                        <label class="form-check-label" for="flexCheckDefault1">
                          Polled
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked />
                        <label class="form-check-label" for="flexCheckChecked2">
                          Not Polled
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="collapse coll_width2" id="visitStatus">
                    <div class="card card-body p-0">
                      <div class="btn-group dropend">
                        <button class="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                         Time
                        </button>
                        <ul class="dropdown-menu scrollvisit_status">
                          <li><a class="dropdown-item" href="#">07:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">08:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">09:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">10:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">11:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">12:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">01:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">02:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">03:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">04:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">05:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">06:00 PM</a></li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card saerched_dataCard">
            <div className="card-body pb-1">
              <div className="d-flex border-bottom pb-2">
                <div>
                  <img className="searchedimg" src={profile_img}></img>
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
              <div className="searched_data border-0">
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
                      {" "}
                      <button className="searched_status">SURVEY</button>
                    </div>
                    <div>
                      {" "}
                      <button
                        className="searched_status "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample1"
                        aria-expanded="false"
                        aria-controls="collapseExample1"
                      >
                        poll status
                      </button>

                    </div>

                    <div>
                      <button className="searched_status"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#visitStatus"
                        aria-expanded="false"
                        aria-controls="collapseExample1"
                      >visit status</button>
                    </div>
                  </div>
                  <div class="collapse coll_width" id="collapseExample1">
                    <div class="card card-body">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                        <label class="form-check-label" for="flexCheckDefault1">
                          Polled
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked />
                        <label class="form-check-label" for="flexCheckChecked2">
                          Not Polled
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="collapse coll_width2" id="visitStatus">
                    <div class="card card-body p-0">
                      <div class="btn-group dropend">
                        <button class="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                         Time
                        </button>
                        <ul class="dropdown-menu scrollvisit_status">
                          <li><a class="dropdown-item" href="#">07:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">08:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">09:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">10:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">11:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">12:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">01:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">02:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">03:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">04:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">05:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">06:00 PM</a></li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card saerched_dataCard">
            <div className="card-body pb-1">
              <div className="d-flex border-bottom pb-2">
                <div>
                  <img className="searchedimg" src={profile_img}></img>
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
              <div className="searched_data border-0">
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
                      {" "}
                      <button className="searched_status">SURVEY</button>
                    </div>
                    <div>
                      {" "}
                      <button
                        className="searched_status "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample1"
                        aria-expanded="false"
                        aria-controls="collapseExample1"
                      >
                        poll status
                      </button>

                    </div>

                    <div>
                      <button className="searched_status"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#visitStatus"
                        aria-expanded="false"
                        aria-controls="collapseExample1"
                      >visit status</button>
                    </div>
                  </div>
                  <div class="collapse coll_width" id="collapseExample1">
                    <div class="card card-body">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                        <label class="form-check-label" for="flexCheckDefault1">
                          Polled
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked />
                        <label class="form-check-label" for="flexCheckChecked2">
                          Not Polled
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="collapse coll_width2" id="visitStatus">
                    <div class="card card-body p-0">
                      <div class="btn-group dropend">
                        <button class="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                         Time
                        </button>
                        <ul class="dropdown-menu scrollvisit_status">
                          <li><a class="dropdown-item" href="#">07:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">08:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">09:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">10:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">11:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">12:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">01:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">02:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">03:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">04:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">05:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">06:00 PM</a></li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card saerched_dataCard">
            <div className="card-body pb-1">
              <div className="d-flex border-bottom pb-2">
                <div>
                  <img className="searchedimg" src={profile_img}></img>
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
              <div className="searched_data border-0">
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
                      {" "}
                      <button className="searched_status">SURVEY</button>
                    </div>
                    <div>
                      {" "}
                      <button
                        className="searched_status "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample1"
                        aria-expanded="false"
                        aria-controls="collapseExample1"
                      >
                        poll status
                      </button>

                    </div>

                    <div>
                      <button className="searched_status"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#visitStatus"
                        aria-expanded="false"
                        aria-controls="collapseExample1"
                      >visit status</button>
                    </div>
                  </div>
                  <div class="collapse coll_width" id="collapseExample1">
                    <div class="card card-body">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                        <label class="form-check-label" for="flexCheckDefault1">
                          Polled
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked />
                        <label class="form-check-label" for="flexCheckChecked2">
                          Not Polled
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="collapse coll_width2" id="visitStatus">
                    <div class="card card-body p-0">
                      <div class="btn-group dropend">
                        <button class="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                         Time
                        </button>
                        <ul class="dropdown-menu scrollvisit_status">
                          <li><a class="dropdown-item" href="#">07:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">08:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">09:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">10:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">11:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">12:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">01:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">02:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">03:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">04:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">05:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">06:00 PM</a></li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card saerched_dataCard">
            <div className="card-body pb-1">
              <div className="d-flex border-bottom pb-2">
                <div>
                  <img className="searchedimg" src={profile_img}></img>
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
              <div className="searched_data border-0">
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
                      {" "}
                      <button className="searched_status">SURVEY</button>
                    </div>
                    <div>
                      {" "}
                      <button
                        className="searched_status "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample1"
                        aria-expanded="false"
                        aria-controls="collapseExample1"
                      >
                        poll status
                      </button>

                    </div>

                    <div>
                      <button className="searched_status"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#visitStatus"
                        aria-expanded="false"
                        aria-controls="collapseExample1"
                      >visit status</button>
                    </div>
                  </div>
                  <div class="collapse coll_width" id="collapseExample1">
                    <div class="card card-body">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                        <label class="form-check-label" for="flexCheckDefault1">
                          Polled
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked />
                        <label class="form-check-label" for="flexCheckChecked2">
                          Not Polled
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="collapse coll_width2" id="visitStatus">
                    <div class="card card-body p-0">
                      <div class="btn-group dropend">
                        <button class="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                         Time
                        </button>
                        <ul class="dropdown-menu scrollvisit_status">
                          <li><a class="dropdown-item" href="#">07:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">08:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">09:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">10:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">11:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">12:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">01:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">02:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">03:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">04:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">05:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">06:00 PM</a></li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card saerched_dataCard">
            <div className="card-body pb-1">
              <div className="d-flex border-bottom pb-2">
                <div>
                  <img className="searchedimg" src={profile_img}></img>
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
              <div className="searched_data border-0">
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
                      {" "}
                      <button className="searched_status">SURVEY</button>
                    </div>
                    <div>
                      {" "}
                      <button
                        className="searched_status "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample1"
                        aria-expanded="false"
                        aria-controls="collapseExample1"
                      >
                        poll status
                      </button>

                    </div>

                    <div>
                      <button className="searched_status"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#visitStatus"
                        aria-expanded="false"
                        aria-controls="collapseExample1"
                      >visit status</button>
                    </div>
                  </div>
                  <div class="collapse coll_width" id="collapseExample1">
                    <div class="card card-body">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                        <label class="form-check-label" for="flexCheckDefault1">
                          Polled
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked />
                        <label class="form-check-label" for="flexCheckChecked2">
                          Not Polled
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="collapse coll_width2" id="visitStatus">
                    <div class="card card-body p-0">
                      <div class="btn-group dropend">
                        <button class="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                         Time
                        </button>
                        <ul class="dropdown-menu scrollvisit_status">
                          <li><a class="dropdown-item" href="#">07:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">08:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">09:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">10:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">11:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">12:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">01:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">02:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">03:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">04:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">05:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">06:00 PM</a></li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card saerched_dataCard">
            <div className="card-body pb-1">
              <div className="d-flex border-bottom pb-2">
                <div>
                  <img className="searchedimg" src={profile_img}></img>
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
              <div className="searched_data border-0">
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
                      {" "}
                      <button className="searched_status">SURVEY</button>
                    </div>
                    <div>
                      {" "}
                      <button
                        className="searched_status "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample1"
                        aria-expanded="false"
                        aria-controls="collapseExample1"
                      >
                        poll status
                      </button>

                    </div>

                    <div>
                      <button className="searched_status"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#visitStatus"
                        aria-expanded="false"
                        aria-controls="collapseExample1"
                      >visit status</button>
                    </div>
                  </div>
                  <div class="collapse coll_width" id="collapseExample1">
                    <div class="card card-body">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                        <label class="form-check-label" for="flexCheckDefault1">
                          Polled
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked />
                        <label class="form-check-label" for="flexCheckChecked2">
                          Not Polled
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="collapse coll_width2" id="visitStatus">
                    <div class="card card-body p-0">
                      <div class="btn-group dropend">
                        <button class="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                         Time
                        </button>
                        <ul class="dropdown-menu scrollvisit_status">
                          <li><a class="dropdown-item" href="#">07:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">08:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">09:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">10:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">11:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">12:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">01:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">02:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">03:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">04:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">05:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">06:00 PM</a></li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card saerched_dataCard">
            <div className="card-body pb-1">
              <div className="d-flex border-bottom pb-2">
                <div>
                  <img className="searchedimg" src={profile_img}></img>
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
              <div className="searched_data border-0">
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
                      {" "}
                      <button className="searched_status">SURVEY</button>
                    </div>
                    <div>
                      {" "}
                      <button
                        className="searched_status "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample1"
                        aria-expanded="false"
                        aria-controls="collapseExample1"
                      >
                        poll status
                      </button>

                    </div>

                    <div>
                      <button className="searched_status"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#visitStatus"
                        aria-expanded="false"
                        aria-controls="collapseExample1"
                      >visit status</button>
                    </div>
                  </div>
                  <div class="collapse coll_width" id="collapseExample1">
                    <div class="card card-body">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                        <label class="form-check-label" for="flexCheckDefault1">
                          Polled
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked />
                        <label class="form-check-label" for="flexCheckChecked2">
                          Not Polled
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="collapse coll_width2" id="visitStatus">
                    <div class="card card-body p-0">
                      <div class="btn-group dropend">
                        <button class="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                         Time
                        </button>
                        <ul class="dropdown-menu scrollvisit_status">
                          <li><a class="dropdown-item" href="#">07:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">08:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">09:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">10:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">11:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">12:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">01:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">02:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">03:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">04:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">05:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">06:00 PM</a></li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card saerched_dataCard">
            <div className="card-body pb-1">
              <div className="d-flex border-bottom pb-2">
                <div>
                  <img className="searchedimg" src={profile_img}></img>
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
              <div className="searched_data border-0">
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
                      {" "}
                      <button className="searched_status">SURVEY</button>
                    </div>
                    <div>
                      {" "}
                      <button
                        className="searched_status "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseExample1"
                        aria-expanded="false"
                        aria-controls="collapseExample1"
                      >
                        poll status
                      </button>

                    </div>

                    <div>
                      <button className="searched_status"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#visitStatus"
                        aria-expanded="false"
                        aria-controls="collapseExample1"
                      >visit status</button>
                    </div>
                  </div>
                  <div class="collapse coll_width" id="collapseExample1">
                    <div class="card card-body">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                        <label class="form-check-label" for="flexCheckDefault1">
                          Polled
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked />
                        <label class="form-check-label" for="flexCheckChecked2">
                          Not Polled
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="collapse coll_width2" id="visitStatus">
                    <div class="card card-body p-0">
                      <div class="btn-group dropend">
                        <button class="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                         Time
                        </button>
                        <ul class="dropdown-menu scrollvisit_status">
                          <li><a class="dropdown-item" href="#">07:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">08:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">09:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">10:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">11:00 AM</a></li>
                          <li><a class="dropdown-item" href="#">12:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">01:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">02:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">03:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">04:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">05:00 PM</a></li>
                          <li><a class="dropdown-item" href="#">06:00 PM</a></li>
                        </ul>
                      </div>

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
  );
};

export default SearchAgent;

import React from "react";
import "./AddAgents.css";
import BackButton from "../../Common/asset/images/voteimg/BackButton.svg";
import profile_img from "../../Common/asset/images/voteimg/agents_img.svg";
import Footer from "../Footer/Footer";

const SearchAgent = () => {
  return (
    <div className="container p-0">
      <div className="Header">
        <div>
          <img className="" src={BackButton}></img>
        </div>
        <div className="Header_name_div ">
          <span className="Header_name">Role Mapping </span>
        </div>
      </div>
      <div className="">
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

      <div className="searchedcardHead">
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
                      <button className="searched_status">visit status</button>
                    </div>
                  </div>
                  <div class="collapse coll_width" id="collapseExample1">
                      <div class="card card-body">
                        some data
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
                      <button className="searched_status">visit status</button>
                    </div>
                  </div>
                  <div class="collapse coll_width" id="collapseExample2">
                      <div class="card card-body">
                        some data
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
                        data-bs-target="#collapseExample3"
                        aria-expanded="false"
                        aria-controls="collapseExample3"
                      >
                        poll status
                      </button>
                     
                    </div>

                    <div>
                      <button className="searched_status">visit status</button>
                    </div>
                  </div>
                  <div class="collapse coll_width" id="collapseExample3">
                      <div class="card card-body">
                        some data
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
                        data-bs-target="#collapseExample4"
                        aria-expanded="false"
                        aria-controls="collapseExample4"
                      >
                        poll status
                      </button>
                     
                    </div>

                    <div>
                      <button className="searched_status">visit status</button>
                    </div>
                  </div>
                  <div class="collapse coll_width" id="collapseExample4">
                      <div class="card card-body">
                        some data
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
                        data-bs-target="#collapseExample5"
                        aria-expanded="false"
                        aria-controls="collapseExample5"
                      >
                        poll status
                      </button>
                     
                    </div>

                    <div>
                      <button className="searched_status">visit status</button>
                    </div>
                  </div>
                  <div class="collapse coll_width" id="collapseExample5">
                      <div class="card card-body">
                        some data
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
                        data-bs-target="#collapseExample6"
                        aria-expanded="false"
                        aria-controls="collapseExample6"
                      >
                        poll status
                      </button>
                     
                    </div>

                    <div>
                      <button className="searched_status">visit status</button>
                    </div>
                  </div>
                  <div class="collapse coll_width" id="collapseExample6">
                      <div class="card card-body">
                        some data
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
                        data-bs-target="#collapseExample7"
                        aria-expanded="false"
                        aria-controls="collapseExample7"
                      >
                        poll status
                      </button>
                     
                    </div>

                    <div>
                      <button className="searched_status">visit status</button>
                    </div>
                  </div>
                  <div class="collapse coll_width" id="collapseExample7">
                      <div class="card card-body">
                        some data
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
                        data-bs-target="#collapseExample8"
                        aria-expanded="false"
                        aria-controls="collapseExample8"
                      >
                        poll status
                      </button>
                     
                    </div>

                    <div>
                      <button className="searched_status">visit status</button>
                    </div>
                  </div>
                  <div class="collapse coll_width" id="collapseExample8">
                      <div class="card card-body">
                        some data
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
                        data-bs-target="#collapseExample9"
                        aria-expanded="false"
                        aria-controls="collapseExample9"
                      >
                        poll status
                      </button>
                     
                    </div>

                    <div>
                      <button className="searched_status">visit status</button>
                    </div>
                  </div>
                  <div class="collapse coll_width" id="collapseExample9">
                      <div class="card card-body">
                        some data
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
                        data-bs-target="#collapseExample10"
                        aria-expanded="false"
                        aria-controls="collapseExample10"
                      >
                        poll status
                      </button>
                     
                    </div>

                    <div>
                      <button className="searched_status">visit status</button>
                    </div>
                  </div>
                  <div class="collapse coll_width" id="collapseExample10">
                      <div class="card card-body">
                        some data
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

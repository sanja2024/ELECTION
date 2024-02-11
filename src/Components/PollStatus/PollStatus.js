// PollStatus.js
import React, { useState } from 'react';
import "./PollStatus.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logo from "../../Common/asset/images/voteimg/admin_icon.svg";
import menu from "../../Common/asset/images/voteimg/menu.svg";
import female_icon from '../../Common/asset/images/voteimg/female_Icon.svg';
import male_icon from '../../Common/asset/images/voteimg/Male_icon.svg';
import others_icon from '../../Common/asset/images/voteimg/Other_icon.svg';
import notVoted from '../../Common/asset/images/voteimg/NotVoted_icon.svg';
import pickup_vote from '../../Common/asset/images/voteimg/Pickup_icon.svg';
import Footer from '../Footer/Footer';

import profile_img from "../../Common/asset/images/voteimg/agents_img.svg";

const PollStatus = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="bgImgPS">
        <div className="d-flex justify-content-between align-items-top p-2" style={{ width: "100%", zIndex: "2 !important" }}>
          <div className="mt-1 ">
            <img className="logot" src={logo} alt="Logo"></img>
          </div>
          <div className="mt-3 me-4" >
            <button className="btn  p-1 border rounded" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{}} >
              <img className="logot1" src={menu} alt="Menu"></img>
            </button>
          </div>
        </div>
        <div className="PS_scroll">
          <div className="PS">
            <p className="PSHeading">Polling Sheet 05:00 PM</p>
            <p className="PSsubHeading">Thiyagi Natesan Street 1</p>
            <p className="PS_content mb-0">
              <table className="table table-sm">
                <thead className="table-light">
                  <tr>
                    <td></td>
                    <td>M</td>
                    <td>F</td>
                    <td>Others</td>
                    <td>Total</td>
                  </tr>
                </thead>
                <tbody>
                  <tr className='polledVote1'>
                    <td >As per Electrol</td>
                    <td>12</td>
                    <td>12</td>
                    <td>12</td>
                    <td>12</td>
                  </tr>
                  <tr className='polledVote2'>
                    <td >Total Polled Vote</td>
                    <td>12</td>
                    <td>12</td>
                    <td>12</td>
                    <td>12</td>
                  </tr>
                </tbody>
              </table>
            </p>
            <div className='votepercentage1'>
              <span className='votepercentage'>
                PICKUP VOTE : 15%
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='PollStatusmain'>
        <div className='typeOfVote'>
          <div className='male'>
            <div className="square"></div>
            <span className='typeOfVoteText'>Male</span>
          </div>
          <div className='male'>
            <div className="square2"></div>
            <span className='typeOfVoteText'>Female</span>
          </div>
          <div className='male'>
            <div className="square3"></div>
            <span className='typeOfVoteText'>Others</span>
          </div>
          <div className='male'>
            <div className="square4"></div>
            <span className='typeOfVoteText'>Pickup vote</span>
          </div>
        </div>
        <div className='votedOrNot'>
          <div className='allvoterDetail'>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
            <div className='whoVoted' onClick={() => setShowModal(true)}>
              <img src={female_icon} alt="Female"></img>
              <span className='vote_number'>01</span>
            </div>
           
          </div>
        </div>
      </div>
      <Footer />
      {/* Render Popup component */}
      <Popup show={showModal} setShow={setShowModal} />
    </div>
  );
};

// Popup.js
const Popup = ({ show, setShow }) => {
  return (
    <>
      {/* <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button> */}

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title "
        centered

      
      >
        <Modal.Header closeButton className='p-2'>
          {/* <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body >
          <p>
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
                <div className="searched_data2 ">
                <div className="d-flex flex-column">
                  <span className="searchedTitle">Voter Id</span>
                  <span className="searchedData">B9T878G9</span>
                </div>
                <div className="d-flex flex-column">
                  <span className="searchedTitle">Voter No.</span>
                  <span className="searchedData">23867</span>
                </div>
                </div>
                {/* <div className="searched_data  ">
                <div className="d-flex flex-column">
                  <span className="searchedTitle">Booth Status</span>
                  <span className="searchedData">B9T878G9</span>
                </div>
                </div> */}
                <div className="">
                  <div>
                    <div className="d-flex flex-column justify-content-evenly">
                    
                      <div>
                        {/* <p
                          className="Polled "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseExample12"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          Poll Status
                        </p> */}
                        <div className="d-flex justify-content-between align-items-center  p-2">
                          <div>
                            <span className='PollTime mb-2'>  Poll Status</span>
                            <div className="form-group ">
                              <div>
                                <label className="switch">
                                  <input
                                    type="checkbox"
                                  />
                                  <span className="slider round"></span>
                                </label>
                              </div>
                            </div>
                            {/* <span className="searchedTitle p-1">Polled</span>
                            <span className="searchedTitle p-1">Not-Polled</span> */}
                          </div>
                          <div className='PollTime'>
                            <span className='mb-2'>Polled Time</span>
                            <span className=''>07:00 AM</span>
                          </div>
                          <div className='PollTime'>
                            <span className='mb-2'>Visit Status </span>
                            <span className=''>Interested</span>
                          </div>
                          {/* <div className="btn-group dropdown">
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
                          </div> */}
                         
                        </div>
                      </div>
                    
                    </div>
                    {/* <div className="collapse coll_width" id="collapseExample12">
                      <div className="card card-body">
                       

                      </div>
                    </div>
                    <div className="collapse coll_width2" id="visitStatus">
                      <div className="card card-body p-0">

                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PollStatus;

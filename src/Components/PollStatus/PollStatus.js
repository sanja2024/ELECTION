import React from 'react'
import "./PollStatus.css"

import logo from "../../Common/asset/images/voteimg/admin_icon.svg";
import menu from "../../Common/asset/images/voteimg/menu.svg";
import female_icon from '../../Common/asset/images/voteimg/female_Icon.svg'
import male_icon from '../../Common/asset/images/voteimg/Male_icon.svg'
import others_icon from '../../Common/asset/images/voteimg/Other_icon.svg'
import notVoted from '../../Common/asset/images/voteimg/NotVoted_icon.svg'
import pickup_vote from '../../Common/asset/images/voteimg/Pickup_icon.svg'
import Footer from '../Footer/Footer';

const PollStatus = () => {
  return (
    <div>
      <div className="bgImgPS">
        <div className="d-flex justify-content-between align-items-top p-2" style={{ width: "100%", zIndex: "2 !important" }}>
          <div className="mt-1 ">
            <img className="logot" src={logo}></img>
          </div>
          <div className="mt-3 me-4" >

            <button class="btn  p-1 border rounded" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{}} >  <img className="logot1" src={menu}></img></button>


          </div>
        </div>
        <div className="PS_scroll">
          <div className="PS">
            <p className="PSHeading">Polling Sheet 05:00 PM</p>
            <p className="PSsubHeading">Thiyagi Natesan Street 1</p>
            <p className="PS_content mb-0">
              <table class="table table-sm">
                <thead class="table-light">
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
            <div class="square"></div>
            <span className='typeOfVoteText'>Male</span>
          </div>
          <div className='male'>
            <div class="square2"></div>
            <span className='typeOfVoteText'>Female</span>
          </div>
          <div className='male'>
            <div class="square3"></div>
            <span className='typeOfVoteText'>Others</span>
          </div>
          <div className='male'>
            <div class="square4"></div>
            <span className='typeOfVoteText'>Pickup vote</span>
          </div>
        </div>
        <div className='votedOrNot'>


<div className='allvoterDetail'>
<div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={male_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={others_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={notVoted}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={pickup_vote}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>01</span>
          </div>
          <div className='whoVoted'>
            <img src={female_icon}></img>
            <span className='vote_number'>50</span>
          </div>
</div>
        

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default PollStatus
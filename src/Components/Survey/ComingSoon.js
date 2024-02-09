import React from 'react'
import sms from "../../Common/asset/images/voteimg/sms.svg";
import hand from "../../Common/asset/images/voteimg/wb_hand.svg";
import logo from "../../Common/asset/images/voteimg/admin_icon.svg";
import Footer from '../Footer/Footer';
import Survey from './Survey';


const ComingSoon = () => {
  return (
    <div className="container p-0">
      <div className="bgImg3">
        <div className="wb_ballot">
          <span className='underline'>Ballot Spot</span>
          <span className="wb_ballot_text">
            Vote as if your choices today will pave the path for a brighter and
            stronger tomorrow.
          </span>
        </div>
      </div>

      <div className="welcomebackCS pt-5">
        <div className="wb_logo">
          <img src={logo}></img>
        </div>
        <div className="wb_headCS">
        <span>Coming Soon...</span>
          <span>01 MARCH , 2024</span>

        </div>





        {/* <Survey finalResp={true} /> */}
      </div>

      {/* <Footer /> */}
    </div>
  )
}

export default ComingSoon
import React from "react";
import sms from "../../Common/asset/images/voteimg/sms.svg";
import hand from "../../Common/asset/images/voteimg/wb_hand.svg"
import logo from "../../Common/asset/images/voteimg/admin_icon.svg"

const Page5 = () => {
  return (
    <div className="container p-0">
      <div className="bgImg2">
      <div className="wb_ballot">
        <span>Ballot Spot</span>
        <span className="wb_ballot_text">Vote as if your choices today will pave the path for a brighter and stronger tomorrow.</span>
      </div>
      </div>
     
      <div className="welcomeback pt-5">
        <div className="wb_logo">
          <img src={logo}></img>
        </div>
        <div className="wb_head">
          <span>Reset Password </span>
          <span className="loginPlease">Login to your account</span>
        </div>
        <div className=" loginname_div">
          <span className=" p-2">
            <div className="Login_total d-flex">
              {/* <img className="ps-3 p-2" src={sms}></img> */}

              <div className=" inputL" role="search">
                <input
                  className="form-control "
                  type="search"
                  placeholder="Enter new password"
                  aria-label="Search"
                  // value={searchQuery}
                  // onChange={handleSearchChange}
                />
              </div>
            </div>
          </span>
        </div>
        <div className="">
          <span>
            <div className="Login_total d-flex">
              {/* <img className="ps-3 p-2" src={sms}></img> */}

              <div className=" inputL" role="search">
                <input
                  className="form-control "
                  type="search"
                  placeholder="Confirm password"
                  aria-label="Search"
                  // value={searchQuery}
                  // onChange={handleSearchChange}
                />
              </div>
            </div>
          </span>
          <div className="hand">
            <img src={hand}></img>
          </div>
        </div>
        <div className="d-flex justify-content-end pe-4 mb-5 pb-5">
          <span className="forgotpass">Forgot your password?</span>
        </div>



        <div className="wblogin_div" >
          <button className="wb_login">Submit</button>
          <div className="d-flex justify-content-center">
          <span className="noaccount">Don’t have an account?</span>
          <span className=" ps-1 reg_now">Register Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;

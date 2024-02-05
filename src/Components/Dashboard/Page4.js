import React, { useState, useEffect } from "react";
import hand from "../../Common/asset/images/voteimg/wb_hand.svg";
import logo from "../../Common/asset/images/voteimg/admin_icon.svg";

const Page4 = () => {
  const [wrongotp, setwrongotp] = useState(false);
  return (
    <div className="container p-0">
      <div className="bgImg4">
        <div className="wb_ballot">
          <span>Ballot Spot</span>
          <span className="wb_ballot_text">
            Vote as if your choices today will pave the path for a brighter and
            stronger tomorrow.
          </span>
        </div>
      </div>

      <div className="welcomeback4  pt-5">
        <div className="wb_logo">
          <img src={logo}></img>
        </div>
        <div className="wb_head4">
          <span>Forgot your Password?</span>
          {/* <span className="loginPlease">Login to your account</span> */}
        </div>
        <div className=" loginname_div">
          <span className=" p-2">
            <div className="mbl_Login d-flex">
              {/* <img className="ps-3 p-2" src={sms}></img> */}

              <div className=" mbl_inputL " role="search">
                <div class="col-md-12 text-center">
                  {/* <div class="title">Verify OTP</div> */}
                  <div className="col-md-12">
                
                    <div class="deacthello  ">
                    <label className="otp_verify">Enter OTP code to verify</label>
                   <div className="d-flex justify-content-between">
                      <input
                        class="otp p-1 me-1 "
                        type="text"
                        oninput="digitValidate(this)"
                        onkeyup="tabChange(1)"
                        maxlength="1"
                        // onChange={(e) => setotp1(e.target.value)}
                      />
                      <input
                        class="otp p-1 me-1"
                        type="text"
                        oninput="digitValidate(this)"
                        onkeyup="tabChange(2)"
                        maxlength="1"
                        // onChange={(e) => setotp2(e.target.value)}
                      />
                      <input
                        class="otp p-1 me-1"
                        type="text"
                        oninput="digitValidate(this)"
                        onkeyup="tabChange(3)"
                        maxlength="1"
                        // onChange={(e) => setotp3(e.target.value)}
                      />
                      <input
                        class="otp p-1 me-1"
                        type="text"
                        oninput="digitValidate(this)"
                        onkeyup="tabChange(4)"
                        maxlength="1"
                        // onChange={(e) => setotp4(e.target.value)}
                      />
                      <input
                        class="otp p-1 me-1"
                        type="text"
                        oninput="digitValidate(this)"
                        onkeyup="tabChange(5)"
                        maxlength="1"
                        // onChange={(e) => setotp5(e.target.value)}
                      />
                      <input
                        class="otp p-1 me-1"
                        type="text"
                        oninput="digitValidate(this)"
                        onkeyup="tabChange(6)"
                        maxlength="1"
                        // onChange={(e) => setotp6(e.target.value)}
                      /></div>
                      {/* </form> */}
                    </div>
                  </div>
                  {wrongotp ? (
                    <p style={{ color: "red" }}>Enter Valid OTP</p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </span>
        </div>

        <div className="hand4">
          <img src={hand}></img>
        </div>
        <div className="d-flex justify-content-end pe-4 mb-5">
          <span className="resend_otp ">Resend OTP</span>
        </div>

        <div className="wblogin_div4">
          <button className="wb_login">Verify</button>
          <div className="d-flex justify-content-center">
            <span className="noaccount">Don’t have an account?</span>
            <span className=" ps-1 reg_now">Register Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;

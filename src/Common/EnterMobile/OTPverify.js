import React, { useState, useEffect } from "react";
import hand from "../../Common/asset/images/voteimg/wb_hand.svg";
import logo from "../../Common/asset/images/voteimg/admin_icon.svg";
import { useLocation } from "react-router-dom";
import { VERIFY_AUTH_URL } from "../Url/ServerConfig";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../redux/slices/usersSlice";
import {
    useNavigate,
} from "react-router-dom";
import { toast } from "react-toastify";
import { Page5_ROUTE } from "../Route/Routes";
const OTPverify = () => {
    const navigate = useNavigate();
    const [otpValues, setOTPValues] = useState(['', '', '', '', '', '']);
    // const otpCode = '316752';
    const dispatch = useDispatch();
    const { state } = useLocation();
    const [wrongotp, setwrongotp] = useState(false);
    console.log(state.mobile_no,'stateds')
    const handleChange = (index, newValue) => {
        const newOTPValues = [...otpValues];
        newOTPValues[index] = newValue;
        setOTPValues(newOTPValues);
      };
    
      const handleKeyDown = (index, event) => {
        if (event.key === 'Backspace' && index > 0 && otpValues[index] === '') {
          // Move focus to the previous input field on Backspace press
          document.getElementById(`otp-${index - 1}`).focus();
        } else if (event.key === 'ArrowRight' && index < otpValues.length - 1 && otpValues[index] !== '') {
          // Move focus to the next input field on ArrowRight press
          document.getElementById(`otp-${index + 1}`).focus();
        }
      };

      const fnVerify = () => {
        const ProductPayload = {
        otp_no:state?.list.otpCode,
        mobile_no:state?.mobile_no
        };
        const userData = {
          payload: ProductPayload,
          endPoint: VERIFY_AUTH_URL,
        };
        // dispatch(createUser(userData));
        dispatch(createUser(userData)).then((res) => {
         
            if (res?.payload?.message == "success") {
            //   toast.success(res?.payload?.message, {
            //     position: "top-right",
    
            //   });
            navigate(Page5_ROUTE, {
                state: {
                  mobile_no:state.mobile_no
                },
              });
            //   setTimeout(() => {
            //     navigate(Page5_ROUTE)
            //     // dispatch(clearUserData())
            //   }, 100);
    
            } else {
                console.log(res.payload.message,'ssdsd')
            //   toast.error(res?.payload?.message, {
            //     position: "top-right",
    
            //   });
            }
    
          })
   
      };


      useEffect(() => {
        if (state && state.list && state.list.otpCode) {
          const otpCode = state.list.otpCode.toString();
          const updatedOTPValues = otpCode.split('').map((digit) => digit || '');
          setOTPValues(updatedOTPValues);
        }
      }, [state]);
      
      
    
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
                                                {otpValues?.map((value, index) => (
                                                    <input
                                                        key={index}
                                                        className="otp p-1 me-1"
                                                        type="text"
                                                        value={value}
                                                        // onChange={(e) => handleChange(index, e.target.value)}
                                                        // onKeyDown={(e) => handleKeyDown(index, e)}
                                                        // id={`otp-${index}`}
                                                        maxLength={1}
                                                    />
                                                ))}
                                            </div>

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
                    <button className="wb_login" onClick={() => fnVerify()}>Verify</button>
                    <div className="d-flex justify-content-center">
                        {/* <span className="noaccount">Don’t have an account?</span> */}
                        {/* <span className=" ps-1 reg_now">Register Now</span> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OTPverify;

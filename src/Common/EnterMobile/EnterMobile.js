import React, { useState, useEffect, useRef } from "react";
import sms from "../../Common/asset/images/voteimg/sms.svg";
import hand from "../../Common/asset/images/voteimg/wb_hand.svg"
import logo from "../../Common/asset/images/voteimg/admin_icon.svg"
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {
    useNavigate,
} from "react-router-dom";
import { toast } from "react-toastify";
import { LOGIN_AUTH_URL } from "../Url/ServerConfig";
import { createAgent } from "../redux/slices/geoSlice";
import { createUser } from "../redux/slices/usersSlice";
import { OTP_ROUTE } from "../Route/Routes";
const EnterMobile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialValues = {
        type:"mobile",
        mobile_no: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [searchQuery, setSearchQuery] = useState("");
    const {
        handleSubmit,
        handleChange,
        setValues,
        values,
        handleBlur,
        errors,
        touched,
        resetForm,
        setFieldError,
        setFieldValue,
    } = useFormik({
        initialValues: {
            ...formValues,
        },

        validationSchema: Yup.object({
            //   username: Yup.string()
            //     .required("Username is required")
            //     .equals(["admin"], "Invalid username"),
            //   password: Yup.string()
            //     .required("Password is required")
            //     .equals(["admin"], "Invalid password"),
        }),
        onSubmit: (values) => {
            // console.log(values.mobile_no, "checkedValue");
            const mobile_no = parseInt(values.mobile_no, 10);
            // navigate('');
            const ProductPayload = {
            //   ...values,
            type:"mobile",
            mobile_no
            };
            const userData = {
              payload: ProductPayload,
              endPoint: LOGIN_AUTH_URL,
            };
            // dispatch(createUser(userData));
            dispatch(createUser(userData)).then((res) => {
             
                if (res?.payload?.message == "success") {
                //   toast.success(res?.payload?.message, {
                //     position: "top-right",
        
                //   });
                console.log(res?.payload?.data?.list,'resres2323')
                  setTimeout(() => {
                    // navigate(OTP_ROUTE)
                    // navigate(OTP_ROUTE, {
                    //     state: {
                    //       list: res?.payload?.data?.list,
                    //       mobile_no:mobile_no
                    //     },
                    //   });
                    // dispatch(clearUserData())
                  }, 100);
        
                } else {
                    console.log(res.payload.message,'ssdsd')
                //   toast.error(res?.payload?.message, {
                //     position: "top-right",
        
                //   });
                }
        
              })
        }
    });

    // const handleSearchChange = (event) => {
    //     const query = event.target.value;
    //     console.log(query, 'queryquery')
    //     setSearchQuery(query);
    // };
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
                <div className="wb_head4">
                    <span>Register</span>
                    {/* <span className="loginPlease">Login to your account</span> */}
                </div>
                <div className=" loginname_div">
                    <span className=" p-2">
                        <div className="mbl_Login d-flex">
                            {/* <img className="ps-3 p-2" src={sms}></img> */}

                            <div className=" mbl_inputL" role="search">
                                <label>Enter your mobile no.</label>
                                <input
                                    name="mobile_no"
                                    className="form-control "
                                    type="search"
                                    placeholder="Enter your mobile number"
                                    aria-label="Search"
                                    // value={searchQuery}
                                    // onChange={handleSearchChange}
                                    onChange={handleChange}
                                    value={values?.mobile_no}
                                />

                            </div>
                        </div>
                    </span>
                </div>

                <div className="hand2">
                    <img src={hand}></img>
                </div>
                <div className="d-flex justify-content-end pe-4 mb-5">
                    {/* <span className="forgotpass">Forgot your password?</span> */}
                </div>



                <div className="wblogin_div" >
                    <button className="wb_login" onClick={handleSubmit}>Send OTP</button>
                    <div className="d-flex justify-content-center">
                        {/* <span className="noaccount">Don’t have an account?</span> */}
                        {/* <span className=" ps-1 reg_now">Register Now</span> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnterMobile;

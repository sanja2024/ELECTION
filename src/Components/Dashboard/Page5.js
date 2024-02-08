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
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import {  SAVEPASSWORD_AUTH_URL } from "../../Common/Url/ServerConfig";
import { createUser } from "../../Common/redux/slices/usersSlice";

const Page5 = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    password: "",
    confirm_password: "",
    mobile_no:state?.mobile_no
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
      // navigate('');
      const ProductPayload = {
          ...values,
      };
      const userData = {
        payload: ProductPayload,
        endPoint: SAVEPASSWORD_AUTH_URL,
      };
      // dispatch(createUser(userData));
      dispatch(createUser(userData)).then((res) => {

        if (res?.payload?.message == "success") {
          //   toast.success(res?.payload?.message, {
          //     position: "top-right",

          //   });
          console.log(res?.payload?.data?.list, 'resres2323')
          setTimeout(() => {
            // navigate(OTP_ROUTE)
            navigate('/', {
              state: {
                // list: res?.payload?.data?.list,
                // mobile_no: mobile_no
              },
            });
            // dispatch(clearUserData())
          }, 100);

        } else {
          console.log(res.payload.message, 'ssdsd')
          //   toast.error(res?.payload?.message, {
          //     position: "top-right",

          //   });
        }

      })
    }
  });

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
                  name="password"
                  type="password"
                  placeholder="Enter new password"
                  aria-label="Search"
                  onChange={handleChange}
                  value={values?.password}
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
                  name="confirm_password"
                  type="password"
                  placeholder="Confirm password"
                  aria-label="Search"
                  onChange={handleChange}
                  value={values?.confirm_password}
                />
              </div>
            </div>
          </span>
          <div className="hand">
            <img src={hand}></img>
          </div>
        </div>
        <div className="d-flex justify-content-end pe-4 mb-5 pb-5">
          {/* <span className="forgotpass">Forgot your password?</span> */}
        </div>



        <div className="wblogin_div" >
          <button className="wb_login" onClick={handleSubmit}>Submit</button>
          <div className="d-flex justify-content-center">
            {/* <span className="noaccount">Don’t have an account?</span>
            <span className=" ps-1 reg_now">Register Now</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;

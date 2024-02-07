import React, { useState } from "react";
import sms from "../../Common/asset/images/voteimg/sms.svg";
import hand from "../../Common/asset/images/voteimg/wb_hand.svg";
import logo from "../../Common/asset/images/voteimg/admin_icon.svg";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import * as Yup from "yup";
import { MainDashboard_ROUTE } from "../../Common/Route/Routes";
import { useFormik } from "formik";
const WelcomeBack = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);

  const navigate = useNavigate();

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
      username: Yup.string()
        .required("Username is required")
        .equals(["admin"], "Invalid username"),
      password: Yup.string()
        .required("Password is required")
        .equals(["admin"], "Invalid password"),
    }),
    onSubmit: (values) => {
      console.log(values, "checkedValue");
      navigate(MainDashboard_ROUTE);
      // const ProductPayload = {
      //   ...values,
      // };
      // const userData = {
      //   payload: ProductPayload,
      //   endPoint: ADD_AGENT_URL,
      // };
      // dispatch(createAgent(userData));
    },
  });
  return (
    <div className="container p-0">
      <div className="bgImg2">
        <div className="wb_ballot">
          <span>Ballot Spot</span>
          <span className="wb_ballot_text">
            Vote as if your choices today will pave the path for a brighter and
            stronger tomorrow.
          </span>
        </div>
      </div>

      <div className="welcomeback pt-5">
        <div className="wb_logo">
          <img src={logo}></img>
        </div>
        <div className="wb_head">
          <span>Welcome Back!</span>
          <span className="loginPlease">Login to your account</span>
        </div>
        <div className=" loginname_div">
          <span className=" p-2">
            <div className="Login_total d-flex">
              <img className="ps-3 p-2" src={sms}></img>

              <div className=" inputL" role="search">
                <input
                  className="form-control "
                  type="email"
                  name="username"
                  placeholder="Enter your mail ID"
                  aria-label="Search"
                  onChange={handleChange}
                  value={values?.username}

                  // value={searchQuery}
                  // onChange={handleSearchChange}
                />
              </div>
            </div>
            {errors.username ? (
              <div style={{ marginLeft: "20px" }} className="text-danger">
                {errors.username}
              </div>
            ) : null}
          </span>
        </div>
        <div className="">
          <span>
            <div className="Login_total d-flex">
              <img className="ps-3 p-2" src={sms}></img>

              <div className=" inputL" role="search">
                <input
                  className="form-control "
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  aria-label="Search"
                  onChange={handleChange}
                  value={values?.password}
                  // value={searchQuery}
                  // onChange={handleSearchChange}
                />
              </div>
            </div>
            {errors.password ? (
              <div style={{ marginLeft: "20px" }} className="text-danger">
                {errors.password}
              </div>
            ) : null}
          </span>
          <div className="hand">
            <img src={hand}></img>
          </div>
        </div>

        <div className="d-flex justify-content-end pe-4  pb-5">
          <span className="forgotpass">Forgot your password?</span>
        </div>

        <div className="wblogin_div">
          <button
            className="wb_login"
            // onClick={() =>
            //   navigate(MainDashboard_ROUTE, {
            //     state: "",
            //   })
            // }

            onClick={handleSubmit}
          >
            Login
          </button>
          <div className="d-flex justify-content-center">
            <span className="noaccount">Don’t have an account?</span>
            <span className=" ps-1 reg_now">Register Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBack;

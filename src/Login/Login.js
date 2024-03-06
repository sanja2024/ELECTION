import React, { useEffect, useState } from "react";
import sms from "../Common/asset/images/voteimg/sms.svg";
import hand from "../Common/asset/images/voteimg/wb_hand.svg";
import logo from "../Common/asset/images/voteimg/admin_icon.svg";
import { LOGIN_API } from "../Common/Url/ServerConfig";
import Crypt from "../Common/Crypt";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../Common/redux/slices/usersSlice";
import "react-toastify/dist/ReactToastify.css";

// import "./Login.css";
// import "./login2.css";
// import chola from "../Common/asset/images/Cholamandalam_logo.svg"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../Common/asset/css/index.css';
import '../Common/asset/css/app.css';
// import img1 from "../Common/asset/images/Cholamandalam_logo.svg"
// import field_visit from "../Common/asset/images/field_visit.svg"
import { ToastContainer, toast } from "react-toastify";
import { Forgot_ROUTE, MainDashboard_ROUTE } from "../Common/Route/Routes";
const LoginPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("User");
  const dispatch = useDispatch();

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const posts = useSelector((state) => state.users.data);

  const handleSubmit = () => {
    // e.preventDefault();
    const credentialValue = {
      username,
      password,
    };
    // credentialValue.password = Crypt.encryptText(credentialValue.password);

    const ProductPayload = {
      mobile_no: parseInt(username, 10),
      password: password,
      type: 'password'

    };

    const userData = {
      payload: ProductPayload,
      endPoint: LOGIN_API,
    };
    // dispatch(createUser(userData));
    dispatch(createUser(userData)).then((res) => {
      if (res?.payload?.data?.message == 'Login SuccessFull') {
        // console.log(res.payload.data.list.agentType,'dddddd' )
        const typeUser = res?.payload?.data?.list?.agentType?.toUpperCase();

        localStorage.setItem("CUSTOMTOKEN", 'coSkKDoSS70Cu6RUsDRKnKQUlXvmzyvoSEBS3WpRd6/4gEtZ39STlENqKRjDRFKew69PE6RyGN');
        localStorage.setItem("product_code", 'EL');
        localStorage.setItem("User", typeUser);
        localStorage.setItem("mobile", username);

        localStorage.setItem("userData", JSON.stringify(res?.payload?.data?.list));


        toast.success("Login Successful!", {
          position: "top-right",
          // theme: "dark",
        });
        setTimeout(() => {
          navigate('/')
          // dispatch(clearUserData())
        }, 1000);
      } else {
        toast.error("Something Went Wrong!", {
          position: "top-right",

        });
      }

    })
    // const token = await loginUser({
    //   username,
    //   password
    // });
    // setToken(token);
  };

  // const LoginSucess = () => {
  //   const { status, message, token, data } = posts;
  //   if (token) {
  //     const decoded = jwtDecode(token);

  //     console.log("decoded");
  //     localStorage.setItem("CUSTOMTOKEN", token);
  //     localStorage.setItem("Code", decoded.employee_code);

  //     toast.success("Login Successful!", {
  //       position: "top-right",
  //       // theme: "dark",
  //     });

  //     setTimeout(() => {
  //       window.location.replace("/");
  //     }, 1000);
  //   } else {
  //     toast.error(message, {
  //       position: toast.POSITION.TOP_RIGHT,
  //     });
  //   }

  //   if (status === false) {
  //     toast.error(message, {
  //       position: toast.POSITION.TOP_RIGHT,
  //     });
  //   }
  // };

  const LoginSucess = (posts) => {
    // const { status, message, Token, Employee_Details, Product, MENU, Role } =
    //   posts;
    // const { DATA } = posts;
    if (posts.message == 'success') {
      // console.log(posts?.DATA?.access_token,'posts.DATA?.access_token')
      //  localStorage.setItem("CUSTOMTOKEN", posts.DATA?.access_token);
      localStorage.setItem("CUSTOMTOKEN", 'coSkKDoSS70Cu6RUsDRKnKQUlXvmzyvoSEBS3WpRd6/4gEtZ39STlENqKRjDRFKew69PE6RyGN');
      localStorage.setItem("product_code", 'EL');

      // const Token = localStorage.setItem("CUSTOMTOKEN", posts?.DATA?.access_token);
      // localStorage.setItem("emp_code", posts?.DATA?.emp_code)
      // const decoded = jwtDecode(Token);

      // console.log("decoded");
      // localStorage.setItem("CUSTOMTOKEN", Token);
      // localStorage.setItem("Code", decoded.employee_code);

      toast.success("Login Successful!", {
        position: "top-right",
        // theme: "dark",
      });

      setTimeout(() => {
        window.location.replace(MainDashboard_ROUTE);
      }, 1000);
    } else {
      // toast.error("message", {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
    }

    // const jsonArray = JSON?.stringify(Employee_Details[0]);
    // localStorage.setItem("userData", jsonArray);
    // Employee_Details?.map((item) => {
    //   const { emp_name, emp_code, emp_title, ad_code, mail, mobile } = item;
    //   return (
    //     localStorage.setItem("ad_code", ad_code),
    //     localStorage.setItem("emp_name", emp_name),
    // localStorage.setItem("emp_code", DATA.emp_code),
    //     localStorage.setItem("emp_title", emp_title),
    //     localStorage.setItem("mail", mail),
    // localStorage.setItem("mobile", DATA.)

    //   );
    // });
    // console.log(Token, "TokenToken");
    // if (Token) {
    //   toast.success("Login Successful!", { position: "top-right", theme: "dark", })

    //   // setTimeout(() => {
    //     //   setChooseProduct(false);
    //     // localStorage.setItem("ProductList", JSON.stringify(Product));
    //     // localStorage.setItem("Ac", JSON.stringify(Role));
    //     // localStorage.setItem("MENU", JSON.stringify(MENU));
    //   // }, 1000);

    //   // setTimeout(() => {
    //   //   window.location.reload();
    //   // }, 1000);

    // } else {
    //   // toast.error("The login credentials are invalid....", {
    //   //   position: toast.POSITION.TOP_RIGHT,
    //   // });
    // }

    // if (posts.status === false) {
    //   toast.error("The login credentials are invalid...", {
    //     position: toast.POSITION.TOP_RIGHT,
    //   });
    // }else{
    //   setTimeout(() => {
    //     window.location.reload();
    //   }, 1000);
    // }
  };
  // useEffect(() => {
  //   if (posts !== "") {
  //     LoginSucess(posts);
  //   }
  // }, [posts]);
  return (

    <>
      <ToastContainer />
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
                <img className="ps-3 p-2 sms" src={sms}></img>

                <div className=" inputL" role="search">
                  <input
                    className="form-control "
                    type="number"
                    name="username"
                    placeholder="Enter your Mobile Number"
                    aria-label="Search"
                    // onChange={handleChange}
                    // value={values?.username}
                    onChange={(e) =>
                      setUserName(e.target.value)
                    }

                  // value={searchQuery}
                  // onChange={handleSearchChange}
                  />
                </div>
              </div>
              {/* {errors.username ? (
            <div style={{ marginLeft: "20px" }} className="text-danger">
              {errors.username}
            </div>
          ) : null} */}
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
                    // name="password"
                    placeholder="Enter your password"
                    aria-label="Search"
                    // type={checked ? "password" : "text"}
                    name="password"
                    // placeholder=" "
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    autoComplete="new-password"
                  // onChange={handleChange}
                  // value={values?.password}
                  // value={searchQuery}
                  // onChange={handleSearchChange}
                  />
                </div>
              </div>
              {/* {errors.password ? (
            <div style={{ marginLeft: "20px" }} className="text-danger">
              {errors.password}
            </div>
          ) : null} */}
            </span>
            <div className="hand">
              <img src={hand}></img>
            </div>
          </div>

          <div className="d-flex justify-content-end pe-4  pb-4">
            <span className="forgotpass" onClick={() => { navigate(Forgot_ROUTE); }}>Forgot your password?</span>
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
              <span className=" ps-1 reg_now" onClick={() => { navigate('/EnterMobile'); }}>Register Now</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

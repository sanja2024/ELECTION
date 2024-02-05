import React, { useEffect, useState } from "react";
import { LOGIN_API } from "../Common/Url/ServerConfig";
import Crypt from "../Common/Crypt";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../Common/redux/slices/usersSlice";
// import "./Login.css";
// import "./login2.css";
// import chola from "../Common/asset/images/Cholamandalam_logo.svg"

// import 'bootstrap/dist/css/bootstrap.min.css';
import '../Common/asset/css/index.css';
import '../Common/asset/css/app.css';
// import img1 from "../Common/asset/images/Cholamandalam_logo.svg"
// import field_visit from "../Common/asset/images/field_visit.svg"
import { toast } from "react-toastify";
const LoginPage = () => {


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
      username: username,
      password: password,
      // product: "All",
    };

    const userData = {
      payload: ProductPayload,
      endPoint: LOGIN_API,
    };
    dispatch(createUser(userData));
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
    if (posts.status == true) {
      // console.log(posts?.DATA?.access_token,'posts.DATA?.access_token')
      localStorage.setItem("CUSTOMTOKEN", posts.DATA?.access_token);
      // const Token = localStorage.setItem("CUSTOMTOKEN", posts?.DATA?.access_token);
      localStorage.setItem("emp_code", posts?.DATA?.emp_code)
      // const decoded = jwtDecode(Token);

      // console.log("decoded");
      // localStorage.setItem("CUSTOMTOKEN", Token);
      // localStorage.setItem("Code", decoded.employee_code);

      toast.success("Login Successful!", {
        position: "top-right",
        // theme: "dark",
      });

      setTimeout(() => {
        window.location.replace("/dashboard");
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
  useEffect(() => {
    if (posts !== "") {
      LoginSucess(posts);
    }
  }, [posts]);
  return (
    <div className="">

      <div className="Bg2">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-md-12 ">
              <div className="Top-Menu fixed-top d-flex justify-content-start align-items-center">
                <img src={''} className="logo img-fluid" />
                {/* <span className='Header_name ms-5'>Comments</span> */}

              </div>
            </div>
          </div>


          <div className="row m-0 AppCont">
            <div className="col-md-12 mb-5 pad-20">
              <div className="Register-tab">
                <p className="txt">
                  Chola <br /> <span className="fw-semibold">Field Visit</span> Check-In
                  <span className="fw-semibold"> Portal</span>

                </p>
                <img
                  // src={field_visit}
                  className="ico img-fluid Moneyimg"
                />
              </div>
              <div className="enter-otp">
                <p className="fw-medium mt-5  mb-">Login</p>
                <label for="exampleFormControlInput1" class="form-label text-white">Username</label>
                <div className="mobile-number mb-4">
                  <div className="input-group">

                    <input type="text" placeholder="Username" className="form-control" onChange={(e) =>
                      setUserName(e.target.value)
                    } />
                    {/* <button className="btn btn-primary" type="button" id="">Continue</button> */}
                  </div>
                </div>
                <label for="exampleFormControlInput1" class="form-label text-white">Password</label>
                <div className="mobile-number mb-5">
                  <div className="input-group">
                    <input type="Password" placeholder="Password" className="form-control" onChange={(e) =>
                      setPassword(e.target.value)
                    } />
                    {/* <button className="btn btn-primary" type="button" id="">Continue</button> */}
                  </div>
                </div>
                <p className="fs-7 fw-light mt-2">
                  {/* Don't worry, your information is safe with us By clicking “Continue” you agree
            to
            the terms & conditions */}
                </p>
              </div>
              <div className="thebtn"> <button className="next2" onClick={handleSubmit}>Login</button></div>

            </div>

          </div>


        </div>








      </div>
    </div>
  );
};

export default LoginPage;

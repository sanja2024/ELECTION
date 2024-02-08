import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { getProduct, PrivateRoute, PublicRoute } from "./ConfigRoute";

// import User from "../../Components/Master/User/User";
import {
  DASHBOARD_ROUTE,
  LOGIN_ROUTE,
  LoginPage_ROUTE,
  LoginPage2_ROUTE,
  MainDashboard_ROUTE,
  EnterMobile_ROUTE,
  OTP_ROUTE,
  Page5_ROUTE,
  Forgot_ROUTE,
} from "./Routes";
import Layout from "../../Common/Layout/Layout";
// import LoginPage0 from "../../Components/First Page/LoginPage0";
import Login from "../../Login/Login";
import AddAgents from "../../Components/Agents/AddAgents";
import Dashboard from "../../Components/Dashboard/Dashboard";
import EnterMobile from "../../Components/Dashboard/EnterMobile";
import OTPverify from "../EnterMobile/OTPverify";
import Page5 from "../../Components/Dashboard/Page5";
import Forgot from "../../Components/Dashboard/Forgot";

function RoutePath() {
  const token = localStorage.getItem("CUSTOMTOKEN");
  const productsCode = localStorage.getItem("product_code");
  const [ProCode, setProCode] = useState("EL");
  return (
    <div>
      <Router>
        <Routes>
          <Route
            index
            path="/"
            element={
              token && ProCode === "EL" ? (
                <Navigate to={MainDashboard_ROUTE} />
              ) : (
                <Navigate to={DASHBOARD_ROUTE} />
              )
            }
          />
          <Route path={DASHBOARD_ROUTE} element={<PublicRoute><Dashboard /></PublicRoute>} />
          <Route
            path={LOGIN_ROUTE}
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="/*"
            index
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          />

          <Route path={EnterMobile_ROUTE} element={<PublicRoute><EnterMobile /></PublicRoute>} />

          <Route path={OTP_ROUTE} element={<PublicRoute><OTPverify /></PublicRoute>} />
          <Route path={Page5_ROUTE} element={<PublicRoute><Page5 /></PublicRoute>} />
          <Route path={Forgot_ROUTE} element={<PublicRoute><Forgot /></PublicRoute>} />
          
          {/* <Route path={"/Add_Agents"} element={<AddAgents />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default RoutePath;

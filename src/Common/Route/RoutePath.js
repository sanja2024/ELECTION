import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { getProduct, PrivateRoute, PublicRoute } from "./ConfigRoute";
import Login from "../../Login/Login";
// import User from "../../Components/Master/User/User";
import {
  DASHBOARD_ROUTE,
  LOGIN_ROUTE,
  LoginPage_ROUTE,
  LoginPage2_ROUTE,
} from "./Routes";
import Layout from "../../Common/Layout/Layout";
// import LoginPage0 from "../../Components/First Page/LoginPage0";
import LoginPage from "../../Login/Login";
import AddAgents from "../../Components/Agents/AddAgents";

function RoutePath() {
  const token = localStorage.getItem("CUSTOMTOKEN");
  const productsCode = localStorage.getItem("product_code");
  const [ProCode, setProCode] = useState("MIS");
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route
            index
            path="/"
            element={
              token && ProCode === "MIS" ? (
                <Navigate to={'/'} />
              ) : (
                <Navigate to={LOGIN_ROUTE} />
              )
            }
          /> */}

          {/* <Route
            path={LOGIN_ROUTE}
            element={
              <PublicRoute>
                
                <LoginPage0/>
               
              </PublicRoute>
            }
          /> */}

          <Route path="/*" index element={<Layout />} />

          {/* <Route path={"/Add_Agents"} element={<AddAgents />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default RoutePath;

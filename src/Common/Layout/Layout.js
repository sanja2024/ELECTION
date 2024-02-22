import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import {
  Dashboard_ROUTE, Login_ROUTE
} from "../Route/Routes";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Login from "../../Components/Login/Login";
const Layout = () => {
  return (
    <>
      {console.log("sfedfsf")}
      <Routes>
        <Route path={Dashboard_ROUTE} element={<Dashboard />} />
        <Route path={Login_ROUTE} element={<Login />} />

      </Routes>
    </>
  );
};

export default Layout;

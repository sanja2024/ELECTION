import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { getProduct, PrivateRoute, PublicRoute } from "./ConfigRoute";
import Layout from "../../Common/Layout/Layout";

function RoutePath() {
  // const token = localStorage.getItem("CUSTOMTOKEN");
  // const productsCode = localStorage.getItem("product_code");
  // const [ProCode, setProCode] = useState("EL");
  return (

    <div>

      <Router>
        <Routes>
          {/* <Route
            index
            path="/"
            element={
              token && ProCode === "EL" ? (
                <Navigate to={MainDashboard_ROUTE} />
              ) : (
                <Navigate to={DASHBOARD_ROUTE} />
              )
            }
          /> */}

          {/* <Route
            path={LOGIN_ROUTE}
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          /> */}

          <Route
            path="/*"
            index
            element={

              <Layout />

            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default RoutePath;

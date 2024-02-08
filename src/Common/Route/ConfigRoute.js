// import { Navigate, useLocation, useNavigate } from "react-router-dom";

import {
  BrowserRouter as Router,
  Link,
  Navigate,
  Outlet,
  Route,
  Routes
} from "react-router-dom";
import { DASHBOARD_ROUTE, MainDashboard_ROUTE } from "./Routes";

export function authHeader() {
  const token = localStorage.getItem("CUSTOMTOKEN");
  return `${token}`;
}
export function getProduct() {
  const name = localStorage.getItem("product_code");
  return name;
}

 

export function getMenu() {
  const name = JSON.parse(localStorage.getItem("MENU") || "[]");
  return name;
}

export function getDate() {
  const name = JSON.parse(localStorage.getItem("date"));
  return name;
}
export function employeeCode() {
  const name = localStorage.getItem("emp_code");
  return name;
}
// export function PublicRoute({ children }) {
//   const token = localStorage.getItem("custom_token");
//   // const location = useLocation();
//   const employeeTitle = localStorage.getItem("emp_title");
//   const product = employeeCode();
//   return !product ? children : <Navigate to={'/'} />;
//   return !token ? children : <Navigate to={'/homepage'} />;
// }

// export function PrivateRoute({ children }) {
//   const token = localStorage.getItem("custom_token");
//   const employeeTitle = localStorage.getItem("emp_title");
//   const product = employeeCode();

//   return product ? children : <Navigate to={MainDashboard_ROUTE} />;
//   return token ? children : <Navigate to={'/login'} />;
// }



// // const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
// //   return isAuthenticated ? children : <Navigate to="/login" />;
// // };

// const PrivateWrapper = ({ auth: { isAuthenticated } }) => {
//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
// };

export function PublicRoute({ children }) {
  const token = localStorage.getItem("CUSTOMTOKEN");
  // const location = useLocation();
  // const employeeTitle = localStorage.getItem("emp_title");
  // const product = employeeCode();
  return !token ? children : <Navigate to={MainDashboard_ROUTE} />;
  // return !token ? children : <Navigate to={'/homepage'} />;
}

export function PrivateRoute({ children }) {
  const token = localStorage.getItem("CUSTOMTOKEN");
  // const employeeTitle = localStorage.getItem("emp_title");
  // const product = employeeCode();

  return token ? children : <Navigate to={DASHBOARD_ROUTE} />;
  // return token ? children : <Navigate to={'/login'} />;
}



// const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

const PrivateWrapper = ({ auth: { isAuthenticated } }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
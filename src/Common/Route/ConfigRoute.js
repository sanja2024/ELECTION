// import { Navigate, useLocation, useNavigate } from "react-router-dom";

import {
  BrowserRouter as Router,
  Link,
  Navigate,
  Outlet,
  Route,
  Routes
} from "react-router-dom";

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
export function PublicRoute({ children }) {
  const token = localStorage.getItem("custom_token");
  // const location = useLocation();
  const employeeTitle = localStorage.getItem("emp_title");
  const product = employeeCode();
  return !product ? children : <Navigate to={'/'} />;
  return !token ? children : <Navigate to={'/homepage'} />;
}

export function PrivateRoute({ children }) {
  const token = localStorage.getItem("custom_token");
  const employeeTitle = localStorage.getItem("emp_title");
  const product = employeeCode();

  return product ? children : <Navigate to={'/Add_Agents'} />;
  return token ? children : <Navigate to={'/login'} />;
}



// const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

const PrivateWrapper = ({ auth: { isAuthenticated } }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
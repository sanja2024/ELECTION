import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import {
  DASHBOARD_ROUTE,
  WelcomeBack_ROUTE,
  EnterMobile_ROUTE,
  OTP_ROUTE,
  Page5_ROUTE,
  MainDashboard_ROUTE,
  AddAgents_ROUTE,
  RoleMapping_ROUTE,
  SearchAgent_ROUTE,
  Survey_ROUTE,
  SurveyForm_ROUTE,
  CompleteSurvey_ROUTE,
  Assign_ROUTE,
  Assign2_ROUTE,
  BoothStatus_ROUTE,
  VoterSearch_ROUTE,
        
} from "../Route/Routes";
import Dashboard from "../../Components/Dashboard/Dashboard";

import WelcomeBack from "../../Components/Dashboard/WelcomeBack";
// import EnterMobile from "../../Components/Dashboard/EnterMobile";
import EnterMobile from "../../Common/EnterMobile/EnterMobile";
import Page4 from "../../Components/Dashboard/Page4";
import Page5 from "../../Components/Dashboard/Page5";
import MainDashboard from "../../Components/MainDashboard/MainDashboard";
import AddAgents from "../../Components/Agents/AddAgents";
import RoleMapping from "../../Components/Agents/RoleMapping";
import SearchAgent from "../../Components/Agents/SearchAgents";
import Assign from "../../Components/Agents/Assign";
import Assign2 from "../../Components/Agents/Assign2";
import Survey from "../../Components/Survey/Survey";
import SurveyForm from "../../Components/Survey/SurveyForm";
import CompleteSurvey from "../../Components/Survey/CompleteSurvey";
import BoothStatus from "../../Components/BoothStatus/BoothStatus";


import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import OTPverify from "../EnterMobile/OTPverify";
import SearchVoter from "../../Components/Agents/SearchVoter";

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        {/* Dashboard Path Start /main*/}
        {/* <Route path={DASHBOARD_ROUTE} element={<Dashboard />} /> */}
        <Route path={WelcomeBack_ROUTE} element={<WelcomeBack />} />
        {/* <Route path={EnterMobile_ROUTE} element={<EnterMobile />} /> */}
        
        {/* <Route path={OTP_ROUTE} element={<OTPverify />} /> */}

        <Route path={MainDashboard_ROUTE} element={<MainDashboard />} />
        <Route path={AddAgents_ROUTE} element={<AddAgents />} />
        <Route path={RoleMapping_ROUTE} element={<RoleMapping />} />
        <Route path={SearchAgent_ROUTE} element={<SearchAgent />} />
        <Route path={Survey_ROUTE} element={<Survey />} />
        <Route path={SurveyForm_ROUTE} element={<SurveyForm />} />
        <Route path={CompleteSurvey_ROUTE} element={<CompleteSurvey />} />
        <Route path={Assign_ROUTE} element={<Assign />} />
        <Route path={Assign2_ROUTE} element={<Assign2 />} />
        <Route path={BoothStatus_ROUTE} element={<BoothStatus />} />

        <Route path={VoterSearch_ROUTE} element={<SearchVoter />} />
        

        {/* <Route path={'/CongratsPage'} element={<CongratsPage />} /> */}

        {/* Dashboard Path End */}

        {/* Master Path Start */}
        {/* <Route path={USER_MASTER_ROUTE} element={<User />} />
        <Route path={MENU_MASTER_ROUTE} element={<Menu />} />
        <Route path={ROLE_MASTER_ROUTE} element={<Role />} />
        <Route path={PRODUCT_MASTER_ROUTE} element={<Product />} /> */}
        {/* Master Path End */}

        {/* Mapping Path Start */}
        {/* <Route path={ROLE_RIGHTS_ROUTE} element={<RoleRights />} />
        <Route path={ROLE_MAPPING_ROUTE} element={<RoleMapping />} />
        <Route path={PRODUCT_MAPPING_ROUTE} element={<ProductMapping />} />
        <Route path={TIMELINE_ROUTE} element={<Timeline />} /> */}
        {/* <Route path={DISINTEGERATION_ROUTE} element={<DisintegrationTarget />} /> */}
        {/* <Route path={LoginPage0_ROUTE} element={<LoginPage0 />} />
        <Route path={LoginPage_ROUTE} element={<LoginPage />} /> */}
        {/* <Route path={ProductPage_ROUTE} element={<ProductPage />} /> */}

        {/* <Route path={LoginPage2_ROUTE} element={<LoginPage2 />} />
        <Route path={LoginPage3_ROUTE} element={<LoginPage3 />} />
        <Route path={LoginOTP_ROUTE} element={<LoginPage4 />} />
        <Route path={LoginPage5_ROUTE} element={<LoginPage5 />} />
        <Route path={LoginPage6_ROUTE} element={<LoginPage6 />} />
        <Route path={LoginPage7_ROUTE} element={<LoginPage7 />} />
        <Route path={CustumerAll_ROUTE} element={<CustomerAll />} />
        <Route path={ResonForVisit_ROUTE} element={<ResonForVIsit />} /> */}

        {/* Mapping Path End */}
      </Routes>
      {/* <Footer/> */}
    </>
  );
};

export default Layout;

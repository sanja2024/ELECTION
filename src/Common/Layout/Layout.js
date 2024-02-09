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
  ComingSoon_ROUTE

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
import ComingSoon from "../../Components/Survey/ComingSoon";


import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import OTPverify from "../EnterMobile/OTPverify";
import SearchVoter from "../../Components/Agents/SearchVoter";
import { AgentAccessCode } from "../Route/ConfigRoute";

const Layout = () => {
  const AccessCode = AgentAccessCode()
  return (
    <>
      {/* <Header /> */}
      <Routes>
        {/* Dashboard Path Start /main*/}
        {/* <Route path={DASHBOARD_ROUTE} element={<Dashboard />} /> */}
        {AccessCode == "GUEST" ? (<>

          <Route path={WelcomeBack_ROUTE} element={<WelcomeBack />} />
          <Route path={MainDashboard_ROUTE} element={<MainDashboard />} />
          <Route path={Survey_ROUTE} element={<Survey />} />
          <Route path={SurveyForm_ROUTE} element={<SurveyForm />} />
          <Route path={CompleteSurvey_ROUTE} element={<CompleteSurvey />} />
          <Route path={VoterSearch_ROUTE} element={<SearchVoter />} />
          <Route path={ComingSoon_ROUTE} element={<ComingSoon />} />

        </>) : (<>

          <Route path={WelcomeBack_ROUTE} element={<WelcomeBack />} />
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
          <Route path={ComingSoon_ROUTE} element={<ComingSoon />} />
        </>)}


      </Routes>
      {/* <Footer/> */}
    </>
  );
};

export default Layout;

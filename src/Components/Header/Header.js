import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BackButton from "../../Common/asset/images/voteimg/BackButton.svg";


const Header = () => {
  const [pageName, setPageName] = useState("");
  const currentPath = window.location.pathname;

  useEffect(() => {
    // Update the page name based on the last segment of the path
    const pathSegments = currentPath.split("/")?.filter((segment) => segment !== "");
    const updatedPageName =
      pathSegments[pathSegments.length - 1].charAt(0).toUpperCase() +
      pathSegments[pathSegments.length - 1].slice(1);
    setPageName(updatedPageName);
  }, [currentPath]);

  const headerNames = {
    "/homepage": "Dashboard",
    "/dashboard": "Dashboard",
    "/Survey": "Survey",
    "/survey": "Survey",
    "/SurveyForm": "Survey",
    "/SurveyQuestionaire": "Survey",
    "/CompleteSurvey": "Survey",
    "/Add_Agents": "Add Agent",
    "/SearchAgent": "Search Agent",
    "/searchagent": "Search Agent",
    "/RoleMapping": "Role Mapping",
    "/Assign": " Assign",
    "/assign": " Assign",
    "/Assign2": " Assign",
    "/BoothStatus": " Booth Status",
    "/SearchVoter": "Search Voter",
    "/VoterPage": "Voter",
    "/NonSearchVoter": "Non Voter",
    "/Rating": "Customer Satisfaction",

  };

  return (
    <div className="Header">
      <div>
        <img
          className=""
          onClick={() => {
            window.history.back();
          }}
          src={BackButton}
          alt="Back Button"
        ></img>
      </div>
      <div className="Header_name_div ">
        <span className="Header_name">{headerNames[currentPath] || "Default Header Name"}</span>
      </div>
    </div>
  );
};

export default Header;

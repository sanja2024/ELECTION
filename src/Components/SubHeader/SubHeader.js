import React, { useEffect } from "react";
// import "./SubHeader.css";
import {
  MENU_MASTER_ROUTE,
  PRODUCT_MAPPING_ROUTE,
  PRODUCT_MASTER_ROUTE,
  ROLE_MAPPING_ROUTE,
  ROLE_MASTER_ROUTE,
  ROLE_RIGHTS_ROUTE,
  USER_MASTER_ROUTE,
} from "../../Common/Route/Routes";
import { Link } from "react-router-dom";
// import chev_right from "../../Common/Assets/Images/SVG/chev_right.svg";

const SubHeader = () => {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      // make it as accordion for smaller screens
      if (window.innerWidth < 992) {
        // close all inner dropdowns when parent is closed
        document
          .querySelectorAll(".navbar .dropdown")
          .forEach(function (everydropdown) {
            everydropdown.addEventListener("hidden.bs.dropdown", function () {
              // after dropdown is hidden, then find all submenus
              this.querySelectorAll(".submenu").forEach(function (
                everysubmenu
              ) {
                // hide every submenu as well
                everysubmenu.style.display = "none";
              });
            });
          });

        document
          .querySelectorAll(".dropdown-menu a")
          .forEach(function (element) {
            element.addEventListener("click", function (e) {
              let nextEl = this.nextElementSibling;
              if (nextEl && nextEl.classList.contains("submenu")) {
                // prevent opening link if link needs to open dropdown
                e.preventDefault();
                if (nextEl.style.display === "block") {
                  nextEl.style.display = "none";
                } else {
                  nextEl.style.display = "block";
                }
              }
            });
          });
      }
      // end if innerWidth
    });
  }, []);

  return (
  <></>
  );
};

export default SubHeader;

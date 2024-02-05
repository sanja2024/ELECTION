import React from "react";
import "./AddAgents.css";
import BackButton from "../../Common/asset/images/voteimg/BackButton.svg";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const RoleMapping = () => {
  const navigate = useNavigate();
  return (
    <div className="container p-0">
      <div className="Header">
        <div>
          <img className="" onClick={() => navigate(-1)} src={BackButton}></img>
        </div>
        <div className="Header_name_div ">
          <span className="Header_name">Role Mapping </span>
        </div>
      </div>

      <div className="agentadd_datas">
        <div className="addAgent_datapoints">
          <label for="exampleFormControlInput1" class="form-label">
            User ID
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="User ID"
          />
        </div>

        <div class="addAgent_datapoints dropdown">
          <label for="exampleFormControlInput1" class="form-label">
            Election Type
          </label>
          <button
            class="addAgent_datapointsdropdown  dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            data-bs-auto-close="inside"
            aria-expanded="false"
          >
            Election Type
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <div class="addAgent_datapoints dropdown">
          <label for="exampleFormControlInput1" class="form-label">
            Role Type
          </label>
          <button
            class="addAgent_datapointsdropdown  dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            data-bs-auto-close="inside"
            aria-expanded="false"
          >
            Role Type
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <div className="addAgent_datapoints">
          <label for="exampleFormControlInput1" class="form-label">
            State
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="FState"
          />
        </div>

        <div class="addAgent_datapoints dropdown">
          <label for="exampleFormControlInput1" class="form-label">
            Constituency
          </label>
          <button
            class="addAgent_datapointsdropdown  dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            data-bs-auto-close="inside"
            aria-expanded="false"
          >
            Constituency
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <div className="addAgent_datapoints">
          <label for="exampleFormControlInput1" class="form-label">
            Division
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Division"
          />
        </div>
        <div className="addAgent_datapoints">
          <label for="exampleFormControlInput1" class="form-label">
            Booth
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Booth"
          />
        </div>

        <button className="wb_login mt-4 mb-4">Submit</button>
      </div>
      <Footer />
    </div>
  );
};

export default RoleMapping;

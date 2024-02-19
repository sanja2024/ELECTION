import React, { useState, useEffect, useRef } from "react";
import "./AddAgents.css";
import BackButton from "../../Common/asset/images/voteimg/BackButton.svg";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { fetchPosts } from "../../Common/redux/slices/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../Common/redux/slices/usersSlice";
import { ADD_AGENT_SEARCH_URL, BOOTH_API, GET_AGENT_MNO_URL, GET_ROLE_URL, MAPPING_CREATE_API, ROLE_SEARCH_API } from "../../Common/Url/ServerConfig";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { agentSearch, getAgentMno, getRoleList } from "../../Common/redux/slices/agentSlice";
const RoleMapping = () => {
  const initialValues = {
    // barCode: "",
    // remark: "",
    // currentStage: "",
    // leadId: "",
  };
  // const data = useSelector((state) => state.users.data);
  const agentMno = useSelector((state) => state.agent.agentMnoData);
  const roleList = useSelector((state) => state.agent.roleRepData);

  const [selectedElection, setSelectedElection] = useState([]);
  const [selectedstate, setSelectedstate] = useState([]);

  const [state, setState] = useState([]);
  const [constituency, setConstituency] = useState([]);
  const [booth, setBooth] = useState([]);
  const [division, setDivision] = useState([]);
  const [roleDisable, setRoleDisable] = useState(false);

  const [mobile_no, setSelectedMobile] = useState("");
  const [agentDetails, setAgentDetails] = useState("");


  const [selectedRole, setSelectedRole] = useState("");
  const [selectedRoleID, setSelectedRoleID] = useState("");

  const [selectedConstituency, setSelectedConstituency] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedBooth, setSelectedBooth] = useState("");


  const [stateRole, setStateRole] = useState("Select State");
  const [constituencyRole, setConstituencyRole] = useState("Select Constituency");
  const [divisionRole, setDivisionRole] = useState("Select Assembly");
  const [boothRole, setBoothRole] = useState("Select Booth");

  const [electionNames, setElectionNames] = useState([]);
  const [role, setRole] = useState([]);

  const [selectedAgentType, setSelectedAgentType] = useState('');
  
  const dispatch = useDispatch();
  const navigate = useNavigate();




  useEffect(() => {

    const reqParams = {
      payload: {
        mobile_no: parseInt(localStorage.getItem("mobile"))
      },
      endPoint: GET_AGENT_MNO_URL
    }

    dispatch(getAgentMno(reqParams))
  }, [])

  useEffect(() => {

    const reqParams = {
      payload: {
        mobile_no: parseInt(localStorage.getItem("mobile"))
      },
      endPoint: GET_ROLE_URL
    }

    dispatch(getRoleList(reqParams)).then((res) => {
      if (res?.payload?.message === "success") {
        setRole(res?.payload.data.list);
      }
    });
  }, [])
  const handleSelectChange = async (event, selectedValue) => {
    // console.log('agenttype',event.target.value)
    // const selectedRoleData = JSON.parse(event.target.value);
    // const selectedRoleData = JSON.parse(event.target.value);

    if (selectedValue === 'Mobile') {

      const finalselectedMob = JSON.parse(event.target.value);

    
      setSelectedMobile(finalselectedMob?.mobileNo);
      setAgentDetails(finalselectedMob?.mappingresult);

      if(finalselectedMob?.agentType=="agent"){
        // console.log(finalselectedMob,'finalselectedMob')
        setSelectedAgentType(finalselectedMob?.agentType);
        // const selectedRoleData = JSON.parse(event.target.value);
        setSelectedRole("AGENT");
        setSelectedRoleID("6")
      }else{
        setSelectedAgentType("");
        setSelectedRole("");
        setSelectedRoleID("")
      }
     

      if (event.target.value.length == 10) {

        const userData = {
          payload: event.target.value,
          endPoint: ADD_AGENT_SEARCH_URL,
        };
        dispatch(agentSearch(userData)).then((res) => {
          if (res?.payload?.message === "success") {
            // setState(res?.payload.data.list);
            //  console.log(res?.payload?.data.list[0].agentType,'wwewewe')
            if (res?.payload?.data.list[0]?.agentType == 'AGENT') {
              setSelectedRole("AGENT")
              setRoleDisable(true)
            } else {
              setRoleDisable(false)
            }

          }
        });

      }
    }
    else if (selectedValue === 'election') {
      setSelectedElection(event.target.value);
      // await dispatch(fetchPosts(ROLE_SEARCH_API)).then((res) => {
      //   if (res?.payload?.message === "success") {
      //     setRole(res?.payload.data.list);
      //   }
      // });

      const electionUserData = {
        payload: {
          type: 'state',
          election_code: event.target.value
        },
        endPoint: BOOTH_API,
      };

      dispatch(createUser(electionUserData)).then((res) => {
        if (res?.payload?.message === "success") {
          setState(res?.payload.data.list);
        }
      });
    } else if (selectedValue === 'Role') {

      const selectedRoleData = JSON.parse(event.target.value);
      // console.log("SFsds", selectedRoleData?.roleCode)
      setSelectedRole(selectedRoleData?.roleCode);
      setSelectedRoleID(selectedRoleData?.roleId)

      // console.log(event.target.value, 'sdsdsddsdRole')
      if (selectedRoleData?.roleCode == 'CPO') {
        setSelectedstate("All")
        setSelectedConstituency('All')
        setSelectedDivision("All")
        setSelectedBooth("All")
      }
      else if (selectedRoleData?.roleCode == 'SCO') {
        setSelectedstate("")
        setSelectedConstituency('All')
        setSelectedDivision("All")
        setSelectedBooth("All")
      }
      else if (selectedRoleData?.roleCode == 'CCO') {
        setSelectedstate("")
        setSelectedConstituency('')
        setSelectedDivision("All")
        setSelectedBooth("All")
      }
      else if (selectedRoleData?.roleCode == 'DCO') {
        setSelectedstate("")
        setSelectedConstituency('')
        setSelectedDivision("")
        setSelectedBooth("All")
      }
      else if (selectedRoleData?.roleCode == 'BLO') {
        setSelectedstate("")
        setSelectedConstituency('')
        setSelectedDivision("")
        setSelectedBooth("")
      }
      else {
        setSelectedstate("")
        setSelectedConstituency('')
        setSelectedDivision("")
        setSelectedBooth("")
      }
    }

    else if (selectedValue === 'state') {
      setSelectedstate(event.target.value);
      const stateUserData = {
        payload: {
          type: 'constituency',
          election_code: selectedElection,
          state_code: event.target.value
        },
        endPoint: BOOTH_API,
      };

      dispatch(createUser(stateUserData)).then((res) => {
        if (res?.payload?.message === "success") {
          setConstituency(res?.payload.data.list);
        }
      });
    } else if (selectedValue === 'Constituency') {
      setSelectedConstituency(event.target.value);
      const constituencyUserData = {
        payload: {
          type: 'division',
          election_code: selectedElection,
          state_code: selectedstate,
          constituency_code: event.target.value
        },
        endPoint: BOOTH_API,
      };

      dispatch(createUser(constituencyUserData)).then((res) => {
        if (res?.payload?.message === "success") {

          // const resultt = res?.payload?.data?.list?.filter(el1 => {
          //   return agentDetails.some(el2 => el2?.divisionCode === el1?.divisionCode.toString());
          // });
          const divisionCodes = agentDetails[0].map(agent => agent.divisionCode);
          const resultt = res?.payload?.data?.list?.filter(el1 => {
              return divisionCodes.includes(el1?.divisionCode.toString());
          });

          setDivision(resultt?.length > 0 ? resultt : res?.payload?.data?.list);
        }
      });
    } else if (selectedValue === 'Division') {
      setSelectedDivision(event.target.value);
      const divisionUserData = {
        payload: {
          type: 'booth',
          election_code: selectedElection,
          state_code: selectedstate,
          // division_code:selectedDivision,
          constituency_code: selectedConstituency,
          division_code: event.target.value
        },
        endPoint: BOOTH_API,
      };

      dispatch(createUser(divisionUserData)).then((res) => {
        if (res?.payload?.message === "success") {

          // const resultt = res?.payload?.data?.list?.filter(el1 => {
          //   return agentDetails.some(el2 => el2?.boothCode === el1?.boothCode.toString());
          // });
          const boothCodes = agentDetails[0].map(agent => agent.boothCode);
          const resultt = res?.payload?.data?.list?.filter(el1 => {
              return boothCodes.includes(el1?.boothCode.toString());
          });
          setBooth(resultt?.length > 0 ? resultt : res?.payload?.data?.list)
        }
      });
    } else if (selectedValue === 'Booth') {
      
      setSelectedBooth(event.target.value);
    }
  };








  useEffect(() => {
    const QueryPayload = {
      type: "election"
    };

    const userData = {
      payload: QueryPayload,
      endPoint: BOOTH_API,
    };

    // dispatch(createUser(userData));
    dispatch(createUser(userData)).then((res) => {
      if (res?.payload?.message == "success") {
        setElectionNames(res?.payload.data.list)
      } else {
        // toast.error(res?.payload?.message, {
        //   position: "top-right",
        // });
      }
    })

    // ****old role api*****
    // dispatch(fetchPosts(ROLE_SEARCH_API)).then((res) => {
    //   if (res?.payload?.message === "success") {
    //     setRole(res?.payload.data.list);
    //   }
    // });


    //  setElectionNames(data.data.list)
  }, []);


  const handleSubmit = () => {
    // Check if all required parameters are selected
    if (
      selectedElection &&
      selectedstate &&
      selectedConstituency &&
      selectedDivision &&
      selectedBooth &&
      selectedRole &&
      selectedRoleID &&
      mobile_no
    ) {
      const userData = {
        payload: {
          agent_mobile_no: parseInt(mobile_no, 10),
          role_id: parseInt(selectedRoleID),
          role_code: selectedRole,
          election_code: selectedElection,
          state_code: selectedstate,
          constituency_code: selectedConstituency,
          division_code: selectedDivision,
          booth_code: selectedBooth,
        },
        endPoint: MAPPING_CREATE_API,
      };

      dispatch(createUser(userData)).then((res) => {
        if (res.payload.message == 'success') {
          toast.success("Data Created Successfull", {
            position: "top-right",
          });
          // setSelectedMobile("")
          setSelectedElection("");
          setSelectedstate("");
          setSelectedConstituency("");
          setSelectedDivision("");
          setSelectedBooth("");
          setSelectedRole("");
          setSelectedRoleID("")
          setSelectedMobile("");
        } else {
          toast.error("Error", {
            position: "top-right",

          });
        }

      });
    } else {
      toast.error("Enter Valid Field", {
        position: "top-right",

      });
    }
  };

{/* <option key={index} value={JSON.stringify(mno)} onChange={()=>{JSON.stringify(mno.agentType)}}> */}

  return (
    <div className="container p-0">
      <Header />

      <div className="rolemapping_data">
        <div className="addAgent_datapoints">

          {/* <label htmlFor="exampleFormControlInput1" className="form-label">
            Agent
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Agent Mobile No."
            onChange={(event) => handleSelectChange(event, 'Mobile')}
            value={mobile_no}
          /> */}
          <label htmlFor="roleType" className="form-label">
            Agent
          </label>
          <select
            id="Mobile"
            className="form-select"
            aria-label="Mobile"
            onChange={(event) => handleSelectChange(event, 'Mobile')}
          // value={mobile_no}

          >
            <option value="">Select Agent Mno</option>
            {agentMno?.data?.list?.map((mno, index) => (
              <option key={index} value={JSON.stringify(mno)}  onChange={(event) => handleSelectChange(event, 'agenttype')}>
                {mno.mobileNo}
              </option>
            ))}
          </select>

        </div>

        <div className="addAgent_datapoints">
          <label htmlFor="roleType" className="form-label">
            Role Type
          </label>
          <select
            id="roleType"
            className="form-select"
            aria-label="Role Type"
            onChange={(event) => handleSelectChange(event, 'Role')}
            // value={selectedRole}
            disabled={selectedAgentType=="agent"?true: roleDisable}
          >
            <option value="">{selectedAgentType == "agent" ? "Agent" : "Select Role"}</option>
            {role.map((role, index) => (
              <option key={index} value={JSON.stringify(role)}>

                {role.roleName}
              </option>
            ))}
          </select>
        </div>

        <div className="addAgent_datapoints dropdown">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Election Type
          </label>
          <select
            className="form-control"
            onChange={(event) => handleSelectChange(event, 'election')}
            value={selectedElection}
          >
            <option value="">Select Election</option>
            {electionNames.map((election, index) => (
              <option key={index} value={election.electionCode}>
                {election.electionName}
              </option>
            ))}
          </select>
        </div>

        <div className="addAgent_datapoints dropdown">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            State
          </label>
          <select
            className="form-control"
            onChange={(event) => handleSelectChange(event, 'state')}
            value={selectedstate}
            disabled={selectedstate == "All" ? true : false}
          >
            <option value="">{selectedstate == "All" ? selectedstate : stateRole}</option>
            {state?.map((state, index) => (
              <option key={index} value={state.stateCode}>
                {state.stateName}
              </option>
            ))}
          </select>
        </div>
        <div className="addAgent_datapoints dropdown">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Constituency
          </label>
          <select
            className="form-control"
            onChange={(event) => handleSelectChange(event, 'Constituency')}
            value={selectedConstituency}
            disabled={selectedConstituency == "All" ? true : false}
          >
            <option value="">{selectedConstituency == "All" ? selectedConstituency : constituencyRole}</option>
            {constituency.map((constituency, index) => (
              <option key={index} value={constituency?.constituencyCode}>
                {constituency?.constituencyName}
              </option>
            ))}
          </select>
        </div>
        <div className="addAgent_datapoints dropdown">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Assembly
          </label>
          <select
            className="form-control"
            onChange={(event) => handleSelectChange(event, 'Division')}
            value={selectedDivision}
            disabled={selectedDivision == "All" ? true : false}
          >
            <option value="">{selectedDivision == "All" ? selectedDivision : divisionRole}</option>
            {division.map((division, index) => (
              <option key={index} value={division.divisionCode}>
                {division.divisionName}
              </option>
            ))}
          </select>
        </div>

        <div className="addAgent_datapoints dropdown">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Booth
          </label>
          <select
            className="form-control"
            onChange={(event) => handleSelectChange(event, 'Booth')}
            value={selectedBooth}
            disabled={selectedBooth == "All" ? true : false}
          >
            <option value="">{selectedBooth == "All" ? "All" : boothRole}</option>
            {booth.map((booth, index) => (
              <option key={index} value={booth.boothCode}>
                {booth.boothName}
              </option>
            ))}
          </select>
        </div>



      </div>

      <button className="wb_login mt-4 mb-4" onClick={handleSubmit}>Submit</button>
      <Footer />
    </div>
  );
};

export default RoleMapping;

import React, { useState, useEffect, useRef } from "react";
import "./AddAgents.css";
import BackButton from "../../Common/asset/images/voteimg/BackButton.svg";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { fetchPosts } from "../../Common/redux/slices/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../Common/redux/slices/usersSlice";
import { BOOTH_API, ROLE_SEARCH_API } from "../../Common/Url/ServerConfig";
import { useFormik } from "formik";
const RoleMapping = () => {
  const initialValues = {
    // barCode: "",
    // remark: "",
    // currentStage: "",
    // leadId: "",
  };
  // const data = useSelector((state) => state.users.data);
  const [selectedElection, setSelectedElection] = useState([]);
  const [selectedstate, setSelectedstate] = useState([]);
  
  const [state, setState] = useState([]);
  const [constituency, setConstituency] = useState([]);
  const [booth, setBooth] = useState([]);
  const [division, setDivision] = useState([]);


  // const [selectedElection, setSelectedElection] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedConstituency, setSelectedConstituency] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedBooth, setSelectedBooth] = useState("");

  // const [division, setDivision] = useState("");
  // const handleSelectChange = (event) => {
  //   setSelectedElection(event.target.value);

  //   dispatch(fetchPosts(ROLE_SEARCH_API)).then((res) => {
  //     // console.log(res.payload,'dddddwoeiwope')
  //     if (res?.payload?.message == "success") {
  //       setRole(res?.payload.data.list)

  //     } 

  //   })


  // };

  // const handleSelectChange = async (event) => {
  //   const selectedValue = event.target.value;
  //   setSelectedElection(selectedValue);
  
  //   // Fetch the roles based on the selected value
  //   await dispatch(fetchPosts(ROLE_SEARCH_API)).then((res) => {
  //     if (res?.payload?.message === "success") {
  //       setRole(res?.payload.data.list);



  //     } else {
  //       // Handle error if needed
  //     }
  //   });
  
  //   let queryType = "";
  
  //   // Determine the query type based on the selected value
  //   // switch (selectedValue) {
  //   //   case "election":
  //   //     queryType = "state";
  //   //     break;
  //   //   case "state":
  //   //     queryType = "constituency";
  //   //     break;
  //   //   case "constituency":
  //   //     queryType = "division";
  //   //     break;
  //   //   case "division":
  //   //     queryType = "booth";
  //   //     break;
  //   //   default:
  //   //     queryType = "";
  //   // }
  
  //   // if (queryType) {
  //   //   const userData = {
  //   //     payload: {
  //   //       type: queryType,
  //   //       election_code: selectedValue
  //   //     },
  //   //     endPoint: BOOTH_API,
  //   //   };
  
  //   //   dispatch(createUser(userData)).then((res) => {
  //   //     if (res?.payload?.message === "success") {
  //   //       switch (queryType) {
  //   //         case "state":
  //   //           setState(res?.payload.data.list);
  //   //           break;
  //   //         case "constituency":
  //   //           setConstituency(res?.payload.data.list);
  //   //           break;
  //   //         case "division":
  //   //           setDivision(res?.payload.data.list);
  //   //           break;
  //   //         case "booth":
  //   //           setBooth(res?.payload.data.list);
  //   //           break;
  //   //         default:
  //   //           break;
  //   //       }
  //   //     } else {
  //   //       // Handle error if needed
  //   //     }
  //   //   });
  //   // }
  // };
  
  const handleSelectChange = async (event, selectedValue) => {
    // console.log(selectedValue,'eventevent')

    // Fetch the roles based on the selected value
    if(selectedValue=='election'){
      setSelectedElection(event.target.value);
      await dispatch(fetchPosts(ROLE_SEARCH_API)).then((res) => {
        if (res?.payload?.message === "success") {
          setRole(res?.payload.data.list);
        } 
      });

      const userData = {
        payload: {
          type: 'state',
          election_code: event.target.value
        },
        endPoint: BOOTH_API,
      };

      dispatch(createUser(userData)).then((res) => {
        if (res?.payload?.message == "success") {
          setState(res?.payload.data.list)
        } 
      })
    }
    if(selectedValue=='state'){
      setSelectedstate(event.target.value);
      const userData = {
        payload: {
          type: 'constituency',
          state_code: event.target.value
        },
        endPoint: BOOTH_API,
      };

      dispatch(createUser(userData)).then((res) => {
        if (res?.payload?.message == "success") {
          setConstituency(res?.payload.data.list)
        } 
      })
    }

  
    // let queryType = "";

    // switch (selectedValue) {
    //   case "election":
    //     queryType = "state";
    //     break;
    //   case "state":
    //     queryType = "constituency";
    //     break;
    //   case "constituency":
    //     queryType = "division";
    //     break;
    //   case "division":
    //     queryType = "booth";
    //     break;
    //   default:
    //     queryType = "";
    // }
  
    // if (queryType) {
    //   const userData = {
    //     payload: {
    //       type: queryType,
    //       election_code: selectedValue
    //     },
    //     endPoint: BOOTH_API,
    //   };
  
    //   dispatch(createUser(userData)).then((res) => {
    //     if (res?.payload?.message === "success") {
    //       switch (queryType) {
    //         case "state":
    //           setState(res?.payload.data.list);
    //           break;
    //         case "constituency":
    //           setConstituency(res?.payload.data.list);
    //           break;
    //         case "division":
    //           setDivision(res?.payload.data.list);
    //           break;
    //         case "booth":
    //           setBooth(res?.payload.data.list);
    //           break;
    //         default:
    //           break;
    //       }
    //     } else {
    //       // Handle error if needed
    //     }
    //   });
    // }
  };
  
  // Then in your select element:
  // <select
  //   className="form-control"
  //   onChange={(event) => handleSelectChange(event, selectedElection)}
  //   value={selectedElection}
  // >
  //   {/* Options */}
  // </select>
  

  const [electionNames, setElectionNames] = useState([]);
  const [role, setRole] = useState([]);

  const [formValues, setFormValues] = useState(initialValues);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    // handleSubmit,
    handleChange,
    setValues,
    values,
    handleBlur,
    errors,
    touched,
    resetForm,
    setFieldError,
    setFieldValue,
  } = useFormik({
    initialValues: {
      ...formValues,
    },
    // enableReinitialize: true,
    // validationSchema,
    onSubmit: (values) => {
      const QueryPayload = {
        ...values,

      };

      const userData = {
        payload: QueryPayload,
        endPoint: BOOTH_API,
      };

      // const transformedPayload = {
      //   leadId: state.leadId,
      //   document: docList?.map(({ document_code, copy, original }) => ({
      //     document_code,
      //     copy,
      //     original
      //   }))
      // };

      // console.log(transformedPayload,'transformedPayload');
      // dispatch(createUser(userData));
      // dispatch(createUser(userData)).then((res) => {
      //   if (res?.payload?.status == "success") {
      //     toast.success(res?.payload?.message, {
      //       position: "top-right",

      //     });
      //     setTimeout(() => {
      //       navigate('/HHC')
      //       dispatch(clearUserData())
      //     }, 1000);

      //   } else {
      //     toast.error(res?.payload?.message, {
      //       position: "top-right",

      //     });
      //   }

      // })

    },
  });

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

    //  setElectionNames(data.data.list)
  }, []);


  const handleSubmit = () => {
    // Check if all required parameters are selected
    if (
      selectedElection &&
      selectedState &&
      selectedConstituency &&
      selectedDivision &&
      selectedBooth
    ) {
      const userData = {
        payload: {
          agent_mobile_no: "agent_mobile_no_value",
          role_code: "role_code_value",
          election_code: selectedElection,
          state_code: selectedState,
          constituency_code: selectedConstituency,
          division_code: selectedDivision,
          booth_code: selectedBooth,
        },
        // endPoint: YOUR_API_ENDPOINT_HERE, // Replace with your actual API endpoint
      };

      // Dispatch the action to submit the form data
      dispatch(createUser(userData)).then((res) => {
        // Handle the response as needed
        console.log(res);
      });
    } else {
      // Display an error message or handle the lack of selection
      console.error("Please select all required parameters");
    }
  };

  console.log(role, 'rolee')
  return (
    <div className="container p-0">
      <Header />

      <div className="agentadd_datas">
        <div className="addAgent_datapoints">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Agent ID
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="User ID"
          />
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
        <div className="addAgent_datapoints">
          <label htmlFor="roleType" className="form-label">
            Role Type
          </label>
          <select
            id="roleType"
            className="form-select"
            aria-label="Role Type"
          >
            <option value="">Select Role</option>
            {role.map((role, index) => (
              <option key={index} value={role.roleCode}>
                {role.roleName}
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
          >
            <option value="">Select Election</option>
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
            onChange={(event) => handleSelectChange(event, 'constituency')}
            value={selectedElection}
          >
            <option value="">Select Election</option>
            {constituency.map((constituency, index) => (
              <option key={index} value={constituency.constituencyCode}>
                {constituency.constituencyName}
              </option>
            ))}
          </select>
        </div>
        <div className="addAgent_datapoints dropdown">
          <label htmlFor="exampleFormControlInput1" className="form-label">
          Division
          </label>
          <select
            className="form-control"
            onChange={(event) => handleSelectChange(event, 'division')}
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
          Booth
          </label>
          <select
            className="form-control"
            onChange={(event) => handleSelectChange(event, 'booth')}
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

     

        <button className="wb_login mt-4 mb-4" onClick={handleSubmit}>Submit</button>
      </div>
      <Footer />
    </div>
  );
};

export default RoleMapping;

import React, { useState, useEffect, useRef } from "react";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ADD_AGENT_SEARCH_URL, BOOTH_API, VOTER_SEARCH_URL } from "../../Common/Url/ServerConfig";
import { agentSearch } from "../../Common/redux/slices/agentSlice";
import { createUser } from "../../Common/redux/slices/usersSlice";
import { toast } from "react-toastify";
import { Assign_ROUTE, MainDashboard_ROUTE } from "../../Common/Route/Routes";
const Assign2 = () => {
    const [selectedElection, setSelectedElection] = useState([]);
    const [selectedstate, setSelectedstate] = useState([]);

    const [state, setState] = useState([]);
    const [constituency, setConstituency] = useState([]);
    const [booth, setBooth] = useState([]);
    const [division, setDivision] = useState([]);
    const [roleDisable, setRoleDisable] = useState(false);

    const [mobile_no, setSelectedMobile] = useState("");
    const [selectedRole, setSelectedRole] = useState("");
    const [selectedConstituency, setSelectedConstituency] = useState("");
    const [selectedDivision, setSelectedDivision] = useState("");
    const [selectedBooth, setSelectedBooth] = useState("");

    const [voteToNo, setVoteToNo] = useState("");
    const [agentMobileNo, setAgentMobileNo] = useState("");

    const [voteFromNo, setVoteFromNo] = useState("");

    const [stateRole, setStateRole] = useState("Select State");
    const [constituencyRole, setConstituencyRole] = useState("Select Constituency");
    const [divisionRole, setDivisionRole] = useState("Select Division");
    const [boothRole, setBoothRole] = useState("Select Booth");

    const [electionNames, setElectionNames] = useState([]);
    const [role, setRole] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleVoteFromNoChange = (event) => {
        setVoteFromNo(event.target.value);
    };

    const handleVoteToNoChange = (event) => {
        setVoteToNo(event.target.value);
    };

    const handleSelectChange = async (event, selectedValue) => {

        if (selectedValue === 'Mobile') {
            setSelectedMobile(event.target.value);
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
            setSelectedRole(event.target.value);

            // console.log(event.target.value, 'sdsdsddsdRole')
            if (event.target.value == 'CPO') {
                setSelectedstate("All")
                setSelectedConstituency('All')
                setSelectedDivision("All")
                setSelectedBooth("All")
            }
            else if (event.target.value == 'SCO') {
                setSelectedstate("")
                setSelectedConstituency('All')
                setSelectedDivision("All")
                setSelectedBooth("All")
            }
            else if (event.target.value == 'CCO') {
                setSelectedstate("")
                setSelectedConstituency('')
                setSelectedDivision("All")
                setSelectedBooth("All")
            }
            else if (event.target.value == 'DCO') {
                setSelectedstate("")
                setSelectedConstituency('')
                setSelectedDivision("")
                setSelectedBooth("All")
            }
            else if (event.target.value == 'BLO') {
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
                    setDivision(res?.payload.data.list);
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
                    setBooth(res?.payload.data.list);
                }
            });
        } else if (selectedValue === 'Booth') {
            setSelectedBooth(event.target.value);

            const UserData = {
                payload: {
                    // type: 'booth',
                    // election_code: selectedElection,
                    // state_code: selectedstate,
                    // division_code:selectedDivision,
                    ac_no: selectedDivision, //Constituency
                    part_no: event.target.value
                },
                endPoint: VOTER_SEARCH_URL,
            };
            dispatch(createUser(UserData)).then((res) => {
                if (res?.payload?.message === "success") {
                    // setBooth(res?.payload.data.list);
                    const minNumber = Math.min(...res?.payload.data.list.map(item => parseInt(item.slnoinpart)));
                    const maxNumber = Math.max(...res?.payload.data.list.map(item => parseInt(item.slnoinpart)));
                    setVoteFromNo(res?.payload.data.list?.[0]?.minSlnoinpart)
                    setVoteToNo(res?.payload.data.list?.[0]?.maxSlnoinpart)
                    // console.log("Minimum Number:", minNumber);
                    // console.log("Maximum Number:", maxNumber);
                }
            });
        }
    };


    const handleSubmit = () => {
        if (
            voteFromNo && voteToNo

        ) {
            const userData = {
                payload: {
                    ac_no: selectedDivision, //Constituency
                    part_no: selectedBooth,//booth no
                    from_slnoinpart: voteFromNo,
                    to_slnoinpart: voteToNo,
                    agent_mobile_no: agentMobileNo
                },
                endPoint: VOTER_SEARCH_URL,
            };

            dispatch(createUser(userData)).then((res) => {
                if (res.payload.message == 'success') {
                    console.log(res?.payload.data.list, 'sjkbdsjkdbsbd')
                    toast.success("Voter Assigned Successfully", {
                        position: "top-right",

                    });
                    // navigate(Assign_ROUTE, {
                    //     state: {
                    //         response: res?.payload.data.list
                    //     },
                    // });
                    navigate(MainDashboard_ROUTE);
                    //   setSelectedElection("");
                    //   setSelectedstate("");
                    //   setSelectedConstituency("");
                    //   setSelectedDivision("");
                    //   setSelectedBooth("");
                    //   setSelectedRole("");
                    //   setSelectedMobile("");
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

    }, []);

    return (
        <div>
            <Header />
            <div className='assign_datas'>
                <div className="addAgent_datapoints">
                    <label for="exampleFormControlInput1" class="form-label">
                        Agent
                    </label>
                    <input
                        type="text"
                        class="form-control p-3"
                        id="exampleFormControlInput1"
                        placeholder="Agent Mobile No."
                        value={agentMobileNo}
                        onChange={(e) => { setAgentMobileNo(e.target.value) }}
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
                        Division
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

                <div className="addAgent_datapoints">
                    <label for="exampleFormControlInput1" class="form-label">
                        Vote From No.
                    </label>
                    <input
                        type="text"
                        class="form-control p-3"
                        id="exampleFormControlInput1"
                        placeholder=" Vote From No."
                        value={voteFromNo}
                        onChange={handleVoteFromNoChange}
                    />
                </div>
                <div className="addAgent_datapoints">
                    <label for="exampleFormControlInput1" class="form-label">
                        Vote To No.
                    </label>
                    <input
                        type="text"
                        class="form-control p-3"
                        id="exampleFormControlInput1"
                        placeholder=" Vote To No."
                        value={voteToNo}
                        onChange={handleVoteToNoChange}
                    />
                </div>

            </div>
            <button className="wb_login mt-4 mb-4" onClick={handleSubmit}>Submit</button>
            <Footer />
        </div>
    )
}

export default Assign2
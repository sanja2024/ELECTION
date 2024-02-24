import React, { useState, useEffect, useRef } from "react";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import "./BoothStatus.css"
import { ADD_AGENT_SEARCH_URL, BOOTH_API, GET_BOOTH_STATUS_URL, VOTER_SEARCH_URL } from '../../Common/Url/ServerConfig'
import { useDispatch, useSelector } from 'react-redux'
import { getBoothStatusList } from '../../Common/redux/slices/boothSlice'
import { toast } from 'react-toastify'
import { createUser } from "../../Common/redux/slices/usersSlice";

const BoothStatus = () => {
    const boothResp = useSelector((state) => state.booth.boothData);

    const [boothStatus, setBoothStatus] = useState(false);
    const [selectedElection, setSelectedElection] = useState([]);
    const [selectedstate, setSelectedstate] = useState([]);
    const [selectedAgentType, setSelectedAgentType] = useState('');
    const [selectedRoleID, setSelectedRoleID] = useState("");
    const [agentDetails, setAgentDetails] = useState("");

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
    const [selectedBoothName, setSelectedBoothName] = useState("");



    const [voteToNo, setVoteToNo] = useState("");
    const [agentMobileNo, setAgentMobileNo] = useState("");

    const [voteFromNo, setVoteFromNo] = useState("");

    const [stateRole, setStateRole] = useState("Select State");
    const [constituencyRole, setConstituencyRole] = useState("Select Constituency");
    const [divisionRole, setDivisionRole] = useState("Select Assembly");
    const [boothRole, setBoothRole] = useState("Select Booth");

    const [electionNames, setElectionNames] = useState([]);
    const [role, setRole] = useState([]);

    const dispatch = useDispatch();
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

    // useEffect(() => {


    // }, [])
    const handleSelectChange = async (event, selectedValue) => {

        // if (selectedValue === 'Mobile') {
        //     setSelectedMobile(event.target.value);
        //     if (event.target.value.length == 10) {

        //         const userData = {
        //             payload: event.target.value,
        //             endPoint: ADD_AGENT_SEARCH_URL,
        //         };
        //         dispatch(agentSearch(userData)).then((res) => {
        //             if (res?.payload?.message === "success") {
        //                 // setState(res?.payload.data.list);
        //                 //  console.log(res?.payload?.data.list[0].agentType,'wwewewe')
        //                 if (res?.payload?.data.list[0]?.agentType == 'AGENT') {
        //                     setSelectedRole("AGENT")
        //                     setRoleDisable(true)
        //                 } else {
        //                     setRoleDisable(false)
        //                 }

        //             }
        //         });

        //     }
        // }
        if (selectedValue === 'Mobile') {


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

                    const divisionCodes = agentDetails[0]?.map(agent => agent.divisionCode);
                    const resultt = res?.payload?.data?.list?.filter(el1 => {
                        return divisionCodes?.includes(el1?.divisionCode.toString());
                    });

                    // const resultt = res?.payload?.data?.list?.filter(el1 => {
                    //     // console.log(el1,'dkkmskmdm')
                    //     return agentDetails.some(el2 => el2?.divisionCode === el1?.divisionCode.toString());
                    // });

                    setDivision(resultt?.length > 0 ? resultt : res?.payload?.data?.list);
                    // setDivision(res?.payload.data.list);
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

                    const boothCodes = agentDetails[0]?.map(agent => agent.boothCode);
                    const resultt = res?.payload?.data?.list?.filter(el1 => {
                        return boothCodes?.includes(el1?.boothCode.toString());
                    });


                    // const resultt = res?.payload?.data?.list?.filter(el1 => {
                    //     return agentDetails.some(el2 => el2?.boothCode === el1?.boothCode.toString());
                    // });
                    // const resultt = res?.payload?.data?.list?.filter((el1) => {
                    //   return agentDetails.some((el2) => array.includes(el2?.boothCode));
                    // });
                    // setBooth(res?.payload.data.list);
                    setBooth(resultt?.length > 0 ? resultt : res?.payload?.data?.list)
                    // setBooth(res?.payload.data.list);
                }
            });
        } else if (selectedValue === 'Booth') {


            const selectedVal = JSON.parse(event.target.value);

            console.log("sdcas", selectedVal);
            setSelectedBooth(selectedVal?.boothCode);
            setSelectedBoothName(selectedVal?.boothName?.[0])
            const reqParams = {
                payload: {
                    ac_no: selectedDivision,//division
                    part_no: selectedVal?.boothCode.toString()  //booth
                },
                endpoint: GET_BOOTH_STATUS_URL
            }
            dispatch(getBoothStatusList(reqParams)).then((res) => {
                if (res?.payload?.message == "success") {
                    setBoothStatus(true)
                    // toast.success(res?.payload?.data?.message, {
                    //     position: toast.POSITION.TOP_RIGHT,
                    // });

                } else {
                    toast.error(res?.payload?.message, {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                }
            })
        }
    };

    const totalVoteCount = boothResp?.data?.list?.[0]?.count + boothResp?.data?.list?.[1]?.count + boothResp?.data?.list?.[2]?.count;

    // const totalVoteCount =boothResp?.data?.list[0]?.genderCounts.M + boothResp?.data?.list[0]?.genderCounts.F + boothResp?.data?.list[0]?.genderCounts.O+boothResp?.data?.list[1]?.genderCounts.M + boothResp?.data?.list[1]?.genderCounts.F + boothResp?.data?.list[1]?.genderCounts.O;

    return (
        <div>
            <Header />
            <div className='BoothStatus'>

                {boothStatus ? (<div className='boothdatanew'>
                    <div className='boothscroll'>
                        <div className='card border m-2 p-0 pb-2'>
                            <div className='card-body p-0'>
                                <div className='BoothName'>
                                    <div className='d-flex flex-column justify-content-start pt-2'>
                                        <span className='boothName'>

                                            {selectedBoothName}
                                        </span>
                                        <span className='boothAdd'>
                                            {/* {constituency}, {division}, {state} */}

                                        </span>
                                    </div>
                                    <div className='VoteNo'>
                                        <span className='noVote'> Votes</span>
                                        <span className='noOFVote'>{totalVoteCount}</span>
                                    </div>
                                </div>
                                <div className='boothdata'>
                                    <div className='data1 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Male</span>
                                        <span className='booth_val'>{boothResp?.data?.list?.[0]?.count}</span>
                                    </div>
                                    <div className='data2  d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Female</span>
                                        <span className='booth_val'>{boothResp?.data?.list?.[1]?.count}</span>
                                    </div>
                                    <div className='data3 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Others</span>
                                        <span className='booth_val'>{boothResp?.data?.list?.[2]?.count}</span>
                                    </div>


                                </div>
                                {/* <div className='boothdata'>
                                    <div className='data1 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Male</span>
                                        <span className='booth_val'>{totalMaleVoteCount}</span>
                                    </div>
                                    <div className='data2  d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Female</span>
                                        <span className='booth_val'>{totalFeMaleVoteCount}</span>
                                    </div>
                                    <div className='data3 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Others</span>
                                        <span className='booth_val'>{totalOtherVoteCount}</span>
                                    </div>


                                </div> */}
                                <div className='boothdata border-0'>
                                    <div className='data1 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Total</span>
                                        <span className='booth_val'>{0}</span>
                                    </div>
                                    <div className='data2 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Percentage</span>
                                        <span className='booth_val'>{0}</span>
                                    </div>
                                    <div className='data3 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Survey</span>
                                        <span className='booth_val'>{0}</span>
                                    </div>


                                </div>
                                <div className='boothdata2'>
                                    <div className='Polled'>
                                        POLLED
                                    </div>
                                    <div className='d-flex justify-content-between p-1'>


                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Male</span>
                                            <span className='booth_val'>{0}</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Female</span>
                                            <span className='booth_val'>{0}</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Others</span>
                                            <span className='booth_val'>{0}</span>
                                        </div>
                                    </div>

                                </div>
                                <div className='boothdata2'>
                                    <div className='Polled'>
                                        NOT-POLLED
                                    </div>
                                    <div className='d-flex justify-content-between p-1'>


                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Male</span>
                                            <span className='booth_val'>{0}</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Female</span>
                                            <span className='booth_val'>{0}</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Others</span>
                                            <span className='booth_val'>{0}</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        {/* )
                        })
                        } */}

                    </div>
                    <button className="wb_login mt-4 mb-4" onClick={() => { setBoothStatus(false) }}>Back</button>

                </div>) : (<>
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
                            {electionNames?.map((election, index) => (
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
                            {constituency?.map((constituency, index) => (
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
                            {division?.map((division, index) => (
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
                            {booth?.map((booth, index) => (
                                <option key={index} value={JSON.stringify(booth)}>
                                    {booth.boothCode}- {booth.boothName}
                                </option>
                            ))}
                        </select>
                    </div></>)}


            </div>
            <Footer />
        </div>
    )
}

export default BoothStatus
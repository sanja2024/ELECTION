import React, { useState, useEffect, useRef } from "react";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import "../BoothStatus/BoothStatus.css"
import { ADD_AGENT_SEARCH_URL, AGENTSTATUS_ROLE_URL, BOOTH_API, GET_AGENT_MNO_URL, GET_BOOTH_STATUS_URL, VOTER_SEARCH_URL } from '../../Common/Url/ServerConfig'
import { useDispatch, useSelector } from 'react-redux'
import { getBoothStatusList } from '../../Common/redux/slices/boothSlice'
import { toast } from 'react-toastify'
import { createUser } from "../../Common/redux/slices/usersSlice";
import { agentSearch, getAgentMno } from "../../Common/redux/slices/agentSlice";

const AgentStatus = () => {
    const agentMno = useSelector((state) => state.agent.agentMnoData);
    // const boothResp = useSelector((state) => state.booth.boothData);
    const [boothResp, setBoothResp] = useState([]);
    const [trueCount, setTrueCount] = useState([]);
    const [agentName, setAgentName] = useState([]);

    const [boothStatus, setBoothStatus] = useState(true);
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
    // useEffect(() => {
    //     const QueryPayload = {
    //         type: "election"
    //     };

    //     const userData = {
    //         payload: QueryPayload,
    //         endPoint: BOOTH_API,
    //     };

    //     // dispatch(createUser(userData));
    //     dispatch(createUser(userData)).then((res) => {
    //         if (res?.payload?.message == "success") {
    //             setElectionNames(res?.payload.data.list)
    //         } else {
    //             // toast.error(res?.payload?.message, {
    //             //   position: "top-right",
    //             // });
    //         }
    //     })

    // }, []);

    // useEffect(() => {


    // }, [])
    const handleSelectChange = async (event, selectedValue) => {
        // console.log(event.target.value, selectedValue,'selectedValue')
        // mobileNo
        console.log(event.target.value, selectedValue, 'selectedValue')
        if (event.target.value == "") {
            return
        }
        if (selectedValue === 'Mobile') {
            if (event.target.value == "All") {
                const arrayNumMob = agentMno?.data?.list?.map(mno => mno.mobileNo);
                // console.log(arrayNumMob,'arrayNumMob')
                setSelectedMobile(arrayNumMob);
                const DivCodes = ["All"]
                const boothCodes = ["All"]

                const userData = {
                    payload: {
                        ac_no: DivCodes,
                        part_no: boothCodes,
                        agent_mobile_no: arrayNumMob,
                    },

                    endPoint: AGENTSTATUS_ROLE_URL,
                };
                dispatch(createUser(userData)).then((res) => {
                    if (res?.payload?.message === "success") {
                        setBoothResp(res?.payload?.data?.list)

                        // setState(res?.payload.data.list);
                        console.log(res?.payload?.data, 'wwewewe')

                    }
                });

            } else {


                const finalselectedMob = JSON.parse(event.target.value);


                // return
                setSelectedMobile(finalselectedMob?.mobileNo);
                setAgentDetails(finalselectedMob?.mappingresult);

                const DivCodes = finalselectedMob?.mappingresult[0]?.map(agent => agent.divisionCode);
                const boothCodes = finalselectedMob?.mappingresult[0]?.map(agent => agent.boothCode);

                // const resultt = res?.payload?.data?.list?.filter(el1 => {
                //     return boothCodes.includes(el1?.boothCode.toString());
                // });
                // console.log(boothCodes, 'ddddd')
                // ac_no

                // if (event.target.value.length == 10) {

                const userData = {
                    payload: {
                        ac_no: DivCodes,
                        part_no: boothCodes,
                        agent_mobile_no: [finalselectedMob?.mobileNo],
                    },

                    endPoint: AGENTSTATUS_ROLE_URL,
                };
                dispatch(createUser(userData)).then((res) => {
                    if (res?.payload?.message === "success") {
                        setBoothResp(res?.payload?.data?.list)
                        setTrueCount(res?.payload?.data?.topicList[0]?.trueCount)

                        // setState(res?.payload.data.list);
                        console.log(res?.payload?.data, 'wwewewe')
                        // if (res?.payload?.data.list[0]?.agentType == 'AGENT') {
                        //     setSelectedRole("AGENT")
                        //     setRoleDisable(true)
                        // } else {
                        //     setRoleDisable(false)
                        // }

                    }
                });


                const reqParams = {
                    payload: {
                        name: parseInt(finalselectedMob?.mobileNo, 10),
                    },
                    endPoint: ADD_AGENT_SEARCH_URL,
                };
                dispatch(agentSearch(reqParams)).then((res) => {
                    if (res?.payload?.message === "success") {
                        //   setCardList(res?.payload?.data.list);
                        console.log(res?.payload?.data?.list?.[0]?.name, 'wwewewe')

                        setAgentName(res?.payload?.data?.list?.[0]?.name)

                    }
                });

            }
            // }
        }

        else if (selectedValue === 'Booth') {
            setSelectedBooth(event.target.value);

            const reqParams = {
                payload: {
                    ac_no: selectedDivision,//division
                    part_no: event.target.value  //booth
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
    useEffect(() => {

        const reqParams = {
            payload: {
                mobile_no: parseInt(localStorage.getItem("mobile"))
            },
            endPoint: GET_AGENT_MNO_URL
        }

        dispatch(getAgentMno(reqParams))
    }, [])
    const totalVoteCount = boothResp[0]?.genderCounts.M + boothResp[0]?.genderCounts.F + boothResp[0]?.genderCounts.O + boothResp[1]?.genderCounts.M + boothResp[1]?.genderCounts.F + boothResp[1]?.genderCounts.O;
    const totalMaleVoteCount = boothResp[0]?.genderCounts.M + boothResp[1]?.genderCounts.M;
    const totalFeMaleVoteCount = boothResp[0]?.genderCounts.F + boothResp[1]?.genderCounts.F;
    const totalOtherVoteCount = boothResp[0]?.genderCounts.O + boothResp[1]?.genderCounts.O;

    const totalPerc = parseInt(boothResp[0]?.genderCounts.M + boothResp[0]?.genderCounts.F + boothResp[0]?.genderCounts.O) / (totalVoteCount * 100);
    // boothResp[0]?.genderCounts?.M
    //    console.log(boothResp[0].genderCounts.O,'boothRespboothResp')
    return (
        <div>
            <Header />
            <div className='BoothStatus'>
                {/* { boothStatus?  ( */}

                {/* ):(
                    <> */}
                <div className="addAgent_datapoints">
                    <label for="exampleFormControlInput1" class="form-label">
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
                        {/* <option value="All">All</option> */}
                        {agentMno?.data?.list?.map((mno, index) => (
                            <option key={index} value={JSON.stringify(mno)} onChange={(event) => handleSelectChange(event, 'agenttype')}>
                                {mno.mobileNo}
                            </option>
                        ))}
                    </select>

                </div>

                {boothResp.length > 0 && <div className='boothdatanew'>
                    <div className='boothscroll'>
                        <div className='card border m-2 p-0 pb-2'>
                            <div className='card-body p-0'>
                                <div className='BoothName'>
                                    <div className='d-flex flex-column justify-content-start pt-2'>
                                        <span className='boothName'>
                                            {agentName || "-"}
                                        </span>
                                        <span className='boothAdd'>
                                            {/* Ayanvaram, Tamilnadu, Chennai, India */}

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


                                </div>
                                <div className='boothdata border-0'>
                                    <div className='data1 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Total</span>
                                        <span className='booth_val'>{totalVoteCount}</span>
                                    </div>
                                    <div className='data2 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Percentage</span>
                                        <span className='booth_val'>{totalPerc.toFixed(2)}</span>
                                    </div>
                                    <div className='data3 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Survey</span>
                                        <span className='booth_val'>{trueCount}</span>
                                    </div>


                                </div>
                                <div className='boothdata2'>
                                    <div className='Polled'>
                                        POLLED
                                    </div>
                                    <div className='d-flex justify-content-between p-1'>


                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Male</span>
                                            <span className='booth_val'>{boothResp[0]?.genderCounts?.M}</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Female</span>
                                            <span className='booth_val'>{boothResp[0]?.genderCounts?.F}</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Others</span>
                                            <span className='booth_val'>{boothResp[0]?.genderCounts?.O}</span>
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
                                            <span className='booth_val'>{boothResp[1]?.genderCounts?.M}</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Female</span>
                                            <span className='booth_val'>{boothResp[1]?.genderCounts?.F}</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Others</span>
                                            <span className='booth_val'>{boothResp[1]?.genderCounts?.O}</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        {/* )
                        })
                        } */}

                    </div>
                    {/* <button className="wb_login mt-4 mb-4" onClick={() => { setBoothStatus(false) }}>Back</button> */}

                </div>}
                {/* </> */}
                {/* )} */}


            </div>
            <Footer />
        </div>
    )
}

export default AgentStatus


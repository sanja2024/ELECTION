import React, { useState, useEffect, useRef } from "react";
import "./../Agents/AddAgents.css";

import profile_img from "../../Common/asset/images/voteimg/agents_img.svg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { ADD_AGENT_SEARCH_URL, GET_POLL_STATUS_URL, GET_VISITOR_URL, VOTER_SEARCH_URL } from "../../Common/Url/ServerConfig";
import { useDispatch, useSelector } from "react-redux";
import { createRegion } from "../../Common/redux/slices/geoSlice";
import { agentSearch, getVisitor } from "../../Common/redux/slices/agentSlice";
import { createUser } from "../../Common/redux/slices/usersSlice";
import { useNavigate } from "react-router-dom";
const VoterPage = () => {
    const [expand, setExpand] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchList, setSearchList] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [totalData, setTotalData] = useState([]);


    const [cardList, setCardList] = useState([]);

    const visitorResp = useSelector((state) => state.agent.visitorData);

    const voterResp = useSelector((state) => state.users.data);

    const [selectedVisit, setSelectedVisit] = useState("");


    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
    };

    useEffect(() => {

        const mNo = localStorage.getItem("mobile");

        const userData = {
            payload: {
                agent_mobile_no: parseInt(mNo)
            },
            endPoint: GET_POLL_STATUS_URL,
        };
        dispatch(createUser(userData)).then((res) => {
            if (res?.payload?.message === "success") {
                setCardList(res?.payload?.data?.list);


            }
        });
    }, [])
    const handleAgentSearch = () => {
        console.log(searchQuery, 'searchdddk')
        // setSearchList(true);
        // const userData = {
        //   payload: {
        //     name: searchQuery,
        //   },
        //   endPoint: VOTER_SEARCH_URL,
        // };
        const userData = {
            payload: {
                voter_id: searchQuery
            },
            endPoint: VOTER_SEARCH_URL,
        };
        dispatch(createUser(userData)).then((res) => {
            if (res?.payload?.message === "success") {
                setCardList(res?.payload?.data.list);
                console.log(res?.payload?.data.list, 'wwewewe')

            }
        });

        //   dispatch(agentSearch(userData)).then((res) => {
        //     if (res?.payload?.message === "success") {
        // console.log(res?.payload?.data.list[0],'searchdddk')
        //      if(res?.payload?.data.list[0]){
        //       // setSelectedRole("AGENT")
        //       // setRoleDisable(true)
        //      }else{
        //       // setRoleDisable(false)
        //     }

        //     }
        //   });
    };

    useEffect(() => {
        if (voterResp?.data?.list?.length > 0) {

            const falseData = voterResp?.data?.list?.filter(item => item._id === false);
            const trueData = voterResp?.data?.list?.filter(item => item._id === true);
            console.log(trueData, "Dasdas", falseData)

            setTotalData([...(trueData?.[0]?.data || []), ...(falseData?.[0]?.data || [])])
        }

    }, [voterResp])
    return (
        <div className="container p-0">
            <Header />
            {(!Array.isArray(voterResp?.data?.list)) ?
                <>LOADING....</> :
                <div className="searchedcardHead mt-3">
                    <div className="scroll_cards">
                        {console.log("DSfcadas", totalData)}
                        {totalData ? totalData?.map((item) => {
                            return (<div className="card saerched_dataCard1" >

                                <div className="card-body pb-1 p-0">
                                    <div className="d-flex justify-content-between border-bottom pb-2">
                                        <div className="name_img">



                                            <div className="d-flex flex-column">
                                                <span className="searchedAgentName">{item?.VoterDetailInfo?.fmNameEn}</span>
                                                <span className="searchedAgentName">{item?.VoterDetailInfo?.fmNameV1}</span>
                                            </div> </div>

                                        <div className='VoteNo1'>

                                            <span className='noVote1'>{item?.VoterDetailInfo?.slnoinpart}</span>
                                        </div>
                                    </div>
                                    <div className="searched_data">
                                        <div className="d-flex flex-column pb-2">
                                            <span className="searchedTitle">S/O</span>
                                            <span className="searchedData">{item?.VoterDetailInfo?.rlnFmNmEn}</span>
                                            <span className="searchedData">{item?.VoterDetailInfo?.rlnFmNmV1}</span>
                                        </div>
                                        <div className="d-flex flex-column pb-2">
                                            <span className="searchedTitle">Gender</span>
                                            <span className="searchedData">{item?.VoterDetailInfo?.gender}</span>
                                        </div>
                                        <div className="d-flex flex-column pb-2">
                                            <span className="searchedTitle">Age</span>
                                            <span className="searchedData">{item?.VoterDetailInfo?.age}</span>
                                        </div>
                                        <div className="d-flex flex-column pb-2">
                                            <span className="searchedTitle">Voter Id</span>
                                            <span className="searchedData">{item?.VoterDetailInfo?.epicNo}</span>
                                        </div>

                                    </div>
                                    <div className="searched_data border-0">
                                        <div className="d-flex flex-column">
                                            <span className="searchedTitle">Address</span>
                                            <span className="searchedData">{item?.VoterDetailInfo?.cHouseNo}, {item?.VoterDetailInfo?.sectionNo}</span>
                                        </div>

                                    </div>

                                    <div className="">
                                        <div>
                                            <div className="d-flex justify-content-evenly">
                                                <div>
                                                    <button
                                                        onClick={() => {
                                                            navigate("/Survey", {
                                                                state: {
                                                                    data: {
                                                                        label: "",
                                                                        item: item?.VoterDetailInfo
                                                                    }
                                                                },
                                                            })
                                                        }}
                                                        className="searched_status">SURVEY</button>
                                                </div>
                                                <div>
                                                    <button
                                                        className="searched_status "
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#collapseExample${"index"}`}
                                                        aria-expanded="false"
                                                        aria-controls={`collapseExample${"index"}`}
                                                        onClick={() => { setExpand("poll") }}
                                                    >
                                                        Poll Status
                                                    </button>
                                                </div>
                                                <div>
                                                    <button
                                                        className="searched_status"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#visit${"index"}`}
                                                        aria-expanded="false"
                                                        aria-controls={`visit${"index"}`}
                                                        onClick={() => { setExpand("visit") }}
                                                    >
                                                        Visit Status
                                                    </button>
                                                </div>
                                            </div>
                                            {expand == "poll" ? <div className="collapse coll_width" id={`collapseExample${"index"}`}>
                                                <div className="card card-body">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <div className="form-group">
                                                                <div>
                                                                    <label className="switch">
                                                                        <input
                                                                            type="checkbox"
                                                                        />
                                                                        <span className="slider round"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <span className="searchedTitle p-1">Polled</span>
                                                            <span className="searchedTitle p-1">Not-Polled</span>
                                                        </div>

                                                        <div className="btn-group dropdown">
                                                            <button className="btn border rounded p-2 btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                Time
                                                            </button>
                                                            <ul className="dropdown-menu scrollvisit_status">
                                                                <li><a className="dropdown-item" href="#">07:00 AM</a></li>
                                                                <li><a className="dropdown-item" href="#">08:00 AM</a></li>
                                                                <li><a className="dropdown-item" href="#">09:00 AM</a></li>
                                                                <li><a className="dropdown-item" href="#">10:00 AM</a></li>
                                                                <li><a className="dropdown-item" href="#">11:00 AM</a></li>
                                                                <li><a className="dropdown-item" href="#">12:00 PM</a></li>
                                                                <li><a className="dropdown-item" href="#">01:00 PM</a></li>
                                                                <li><a className="dropdown-item" href="#">02:00 PM</a></li>
                                                                <li><a className="dropdown-item" href="#">03:00 PM</a></li>
                                                                <li><a className="dropdown-item" href="#">04:00 PM</a></li>
                                                                <li><a className="dropdown-item" href="#">05:00 PM</a></li>
                                                                <li><a className="dropdown-item" href="#">06:00 PM</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div> :
                                                <div className="collapse coll_width" id={`visit${"index"}`}>
                                                    <div className="card card-body">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="btn-group dropdown">
                                                                <label htmlFor="roleType" className="form-label">
                                                                    Visitor Status
                                                                </label>
                                                                <select
                                                                    id=" VisitorStatus"
                                                                    className="form-select"
                                                                    aria-label=" Visitor Status"
                                                                >

                                                                    {visitorResp?.data?.list?.map((visit, index) => (
                                                                        <option key={index} value={visit?.roleCode}>
                                                                            {visit?.visitName}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>)

                        })
                            :
                            "No data"
                        }
                    </div>
                </div>
            }
            <Footer />
        </div>
    );
};

export default VoterPage;

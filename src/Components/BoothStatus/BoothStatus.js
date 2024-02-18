import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import "./BoothStatus.css"
import { GET_BOOTH_STATUS_URL } from '../../Common/Url/ServerConfig'
import { useDispatch, useSelector } from 'react-redux'
import { getBoothStatusList } from '../../Common/redux/slices/boothSlice'
import { toast } from 'react-toastify'

const BoothStatus = () => {
    const boothResp = useSelector((state) => state.booth.boothData);


    const dispatch = useDispatch();
    useEffect(() => {

        const reqParams = {
            payload: {
                ac_no: "201",//division
                part_no: '1'  //booth
            },
            endpoint: GET_BOOTH_STATUS_URL
        }
        dispatch(getBoothStatusList(reqParams)).then((res) => {
            // if (res?.payload?.message == "success") {

            //     toast.success(res?.payload?.data?.message, {
            //         position: toast.POSITION.TOP_RIGHT,
            //     });

            // } else {
            //     toast.error(res?.payload?.message, {
            //         position: toast.POSITION.TOP_RIGHT,
            //     });
            // }
        })
    }, [])
    const totalVoteCount = boothResp?.data?.list?.[0]?.count + boothResp?.data?.list?.[1]?.count + boothResp?.data?.list?.[2]?.count;
    return (
        <div>
            <Header />
            <div className='BoothStatus'>
                <div className="search_agent_inside ">
                    <div className="d-flex " style={{ flexBasis: "90%" }}>
                        <form className="searchagentform" role="search">
                            <input
                                className="form-control searchagentinput "
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            // value={searchQuery}
                            // onChange={(e) => setBarCode(e.target.value)}
                            />
                        </form>
                    </div>
                    <div style={{ flexBasis: "10%" }}>
                        <button
                            className="search_agent_btn  "
                        // onClick={() => handleClick(searchLeadID)}
                        >
                            {" "}
                            <h4
                                className="text-white bi bi-search mb-0"
                            // src={search_new_img}
                            ></h4>
                        </button>
                    </div>
                </div>
                <div className='boothdatanew'>
                    <div className='boothscroll'>
                        <div className='card border m-2 p-0 pb-2'>
                            <div className='card-body p-0'>
                                <div className='BoothName'>
                                    <div className='d-flex flex-column justify-content-start pt-2'>
                                        <span className='boothName'>
                                            Panchayat Union Elementary School
                                        </span>
                                        <span className='boothAdd'>
                                            Ayanvaram, Tamilnadu, Chennai, India

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
                                <div className='boothdata border-0'>
                                    <div className='data1 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Male</span>
                                        <span className='booth_val'>0</span>
                                    </div>
                                    <div className='data2 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Female</span>
                                        <span className='booth_val'>0</span>
                                    </div>
                                    <div className='data3 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Percentage</span>
                                        <span className='booth_val'>0</span>
                                    </div>


                                </div>
                                <div className='boothdata2'>
                                    <div className='Polled'>
                                        POLLED
                                    </div>
                                    <div className='d-flex justify-content-between p-1'>


                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Male</span>
                                            <span className='booth_val'>0</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Female</span>
                                            <span className='booth_val'>0</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Others</span>
                                            <span className='booth_val'>0</span>
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
                                            <span className='booth_val'>0</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Female</span>
                                            <span className='booth_val'>0</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Others</span>
                                            <span className='booth_val'>0</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        {/* )
                        })
                        } */}

                    </div>


                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BoothStatus
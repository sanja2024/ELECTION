import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import "./BoothStatus.css"

const BoothStatus = () => {
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
                        <div className='card border m-2 p-0'>
                            <div className='card-body p-0'>
                                <div className='BoothName'>
                                    <div className='d-flex flex-column justify-content-start pt-2'>
                                        <span className='boothName'>
                                            Booth name
                                        </span>
                                        <span className='boothAdd'>
                                            Guindy, Chennai, Tamil Nadu, India
                                        </span>
                                    </div>
                                    <div className='VoteNo'>
                                        <span className='noVote'>No. of Votes</span>
                                        <span className='noOFVote'>200</span>
                                    </div>
                                </div>
                                <div className='boothdata'>
                                    <div className='data1 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Male</span>
                                        <span className='booth_val'>100</span>
                                    </div>
                                    <div className='data2  d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Female</span>
                                        <span className='booth_val'>70</span>
                                    </div>
                                    <div className='data3 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Others</span>
                                        <span className='booth_val'>30</span>
                                    </div>


                                </div>
                                <div className='boothdata border-0'>
                                    <div className='data1 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Male</span>
                                        <span className='booth_val'>100</span>
                                    </div>
                                    <div className='data2 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Female</span>
                                        <span className='booth_val'>100</span>
                                    </div>
                                    <div className='data3 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Percentage</span>
                                        <span className='booth_val'>100</span>
                                    </div>


                                </div>
                                <div className='boothdata2'>
                                    <div className='Polled'>
                                        POLLED
                                    </div>
                                    <div className='d-flex justify-content-between p-1'>


                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Male</span>
                                            <span className='booth_val'>100</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Female</span>
                                            <span className='booth_val'>100</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Others</span>
                                            <span className='booth_val'>100</span>
                                        </div>
                                    </div>

                                </div>
                                <div className='boothdata2'>
                                    <div className='Polled'>
                                        POLLED
                                    </div>
                                    <div className='d-flex justify-content-between p-1'>


                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Male</span>
                                            <span className='booth_val'>100</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Female</span>
                                            <span className='booth_val'>100</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Others</span>
                                            <span className='booth_val'>100</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='card border m-2 p-0'>
                            <div className='card-body p-0'>
                                <div className='BoothName'>
                                    <div className='d-flex flex-column justify-content-start pt-2'>
                                        <span className='boothName'>
                                            Booth name
                                        </span>
                                        <span className='boothAdd'>
                                            Guindy, Chennai, Tamil Nadu, India
                                        </span>
                                    </div>
                                    <div className='VoteNo'>
                                        <span className='noVote'>No. of Votes</span>
                                        <span className='noOFVote'>200</span>
                                    </div>
                                </div>
                                <div className='boothdata'>
                                    <div className='data1 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Male</span>
                                        <span className='booth_val'>100</span>
                                    </div>
                                    <div className='data2  d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Female</span>
                                        <span className='booth_val'>70</span>
                                    </div>
                                    <div className='data3 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Others</span>
                                        <span className='booth_val'>30</span>
                                    </div>


                                </div>
                                <div className='boothdata border-0'>
                                    <div className='data1 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Male</span>
                                        <span className='booth_val'>100</span>
                                    </div>
                                    <div className='data2 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Female</span>
                                        <span className='booth_val'>100</span>
                                    </div>
                                    <div className='data3 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Percentage</span>
                                        <span className='booth_val'>100</span>
                                    </div>


                                </div>
                                <div className='boothdata2'>
                                    <div className='Polled'>
                                        POLLED
                                    </div>
                                    <div className='d-flex justify-content-between p-1'>


                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Male</span>
                                            <span className='booth_val'>100</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Female</span>
                                            <span className='booth_val'>100</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Others</span>
                                            <span className='booth_val'>100</span>
                                        </div>
                                    </div>

                                </div>
                                <div className='boothdata2'>
                                    <div className='Polled'>
                                        POLLED
                                    </div>
                                    <div className='d-flex justify-content-between p-1'>


                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Male</span>
                                            <span className='booth_val'>100</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Female</span>
                                            <span className='booth_val'>100</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Others</span>
                                            <span className='booth_val'>100</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='card border m-2 p-0'>
                            <div className='card-body p-0'>
                                <div className='BoothName'>
                                    <div className='d-flex flex-column justify-content-start pt-2'>
                                        <span className='boothName'>
                                            Booth name
                                        </span>
                                        <span className='boothAdd'>
                                            Guindy, Chennai, Tamil Nadu, India
                                        </span>
                                    </div>
                                    <div className='VoteNo'>
                                        <span className='noVote'>No. of Votes</span>
                                        <span className='noOFVote'>200</span>
                                    </div>
                                </div>
                                <div className='boothdata'>
                                    <div className='data1 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Male</span>
                                        <span className='booth_val'>100</span>
                                    </div>
                                    <div className='data2  d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Female</span>
                                        <span className='booth_val'>70</span>
                                    </div>
                                    <div className='data3 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Others</span>
                                        <span className='booth_val'>30</span>
                                    </div>


                                </div>
                                <div className='boothdata border-0'>
                                    <div className='data1 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Male</span>
                                        <span className='booth_val'>100</span>
                                    </div>
                                    <div className='data2 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Female</span>
                                        <span className='booth_val'>100</span>
                                    </div>
                                    <div className='data3 d-flex flex-column justify-content-center align-items-start'>
                                        <span className='boothname'>Percentage</span>
                                        <span className='booth_val'>100</span>
                                    </div>


                                </div>
                                <div className='boothdata2'>
                                    <div className='Polled'>
                                        POLLED
                                    </div>
                                    <div className='d-flex justify-content-between p-1'>


                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Male</span>
                                            <span className='booth_val'>100</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Female</span>
                                            <span className='booth_val'>100</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Others</span>
                                            <span className='booth_val'>100</span>
                                        </div>
                                    </div>

                                </div>
                                <div className='boothdata2'>
                                    <div className='Polled'>
                                        POLLED
                                    </div>
                                    <div className='d-flex justify-content-between p-1'>


                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Male</span>
                                            <span className='booth_val'>100</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Female</span>
                                            <span className='booth_val'>100</span>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <span className='boothname'>Others</span>
                                            <span className='booth_val'>100</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BoothStatus
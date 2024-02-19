import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import logo from "../../Common/asset/images/voteimg/admin_icon.svg";
import "./ProfilePage.css"

import userprofile from "../../Common/asset/images/voteimg/Group 17.svg"
import phone from "../../Common/asset/images/voteimg/phone.svg"
import vid from "../../Common/asset/images/voteimg/voterid_no.svg"
import email from "../../Common/asset/images/voteimg/email_icon.svg"
import profilelogo from "../../Common/asset/images/voteimg/profilelogo.svg"




const ProfilePage = () => {
    const sData = localStorage.getItem("userData");
    const userData = JSON.parse(sData)

    return (
        <div>
            <div className="container p-0">
                <div className="bgImgprofile">
                    <div className="wb_ballot">
                        <span className='underline'>Ballot Spot</span>
                        <span className="wb_ballot_text">
                            Vote as if your choices today will pave the path for a brighter and
                            stronger tomorrow.
                        </span>
                    </div>
                </div>

                <div className="welcomebackprofile pt-5 p-3">
                    <div className="prof_logo">
                        <img className='proflogo' src={profilelogo}></img>
                    </div>
                    <div className='profile_info'>
                        <div>
                            <img src={userprofile}></img>
                        </div>
                        <div className='profilename'>
                            <span >{userData?.name || "-"}</span>
                        </div>
                    </div>
                    <div className='profile_info'>
                        <div>
                            <img src={phone}></img>
                        </div>
                        <div className='profilename'>
                            <span >{userData?.mobileNo || "-"}</span>
                        </div>
                    </div>
                    <div className='profile_info'>
                        <div>
                            <img src={vid}></img>
                        </div>
                        <div className='profilename'>
                            <span >{userData?.voterId || "-"}</span>
                        </div>
                    </div>
                    <div className='profile_info'>
                        <div>
                            <img src={email}></img>
                        </div>
                        <div className='profilename'>
                            <span >{userData?.mailId || "-"}</span>
                        </div>
                    </div>





                    {/* <Survey finalResp={true} /> */}
                </div>


            </div>
            <Footer />
        </div>
    )
}

export default ProfilePage
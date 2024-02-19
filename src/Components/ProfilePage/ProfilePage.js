import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import logo from "../../Common/asset/images/voteimg/admin_icon.svg";
import "./ProfilePage.css"
const ProfilePage = () => {
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

                <div className="welcomebackCS pt-5">
                    





                    {/* <Survey finalResp={true} /> */}
                </div>


            </div>
            <Footer />
        </div>
    )
}

export default ProfilePage
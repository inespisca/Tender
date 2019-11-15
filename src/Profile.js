import React from 'react';
import './Profile.css';
import Description from './Description';
import { withRouter, useHistory } from "react-router-dom";



const Profile = ({ user, settings }) => {
    let history = useHistory()

    const handleRedirectToChat = () => {
        history.push("/chat");
    }

    return (
        <>
            <div className="description-container">
                <div classeName="profile-pict-container">
                    <img src={user.picture.large} alt="Tender user" className="profile-pict" />
                </div>

                <Description user={user} settings={settings} />
                <div>
                    {user.contact ? user.contact.LinkedIn : ""}
                </div>
                <div>
                    {user.contact ? user.contact.GitHub : ""}
                </div>
                <button className="matchText-goToChatBtn"
                    onClick={handleRedirectToChat}
                > Send a message </button>
            </div>


        </>

    )
}


export default withRouter(Profile); 
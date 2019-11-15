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
            <div className="profile-pict">
                <img src={user.picture.large} alt="Tender user" />
            </div>

            <Description user={user} settings={settings} />
            <div>
                {user.contact ? user.contact.LinkedIn : "https://www.linkedin.com/school/wild-codes-chool/"}
            </div>
            <div>
                {user.contact ? user.contact.GitHub : "https://github.com/orgs/WildCodeSchool"}
            </div>
            <button className="matchText-goToChatBtn"
                onClick={handleRedirectToChat}
            > Send a message </button>

        </>

    )
}


export default withRouter(Profile); 
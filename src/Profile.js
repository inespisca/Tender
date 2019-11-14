import React from 'react';
import './Profile.css';
import Description from './Description';



const Profile = ({ user, settings }) => {


    return (
        <>
            <div className="profile-pict">
                <img src={user.picture.large} alt="Tender user" />
            </div>
            <Description user={user} settings={settings} />
            <div className="profile-name">
                {user.name.first} {user.name.last}
            </div>
            <div>
                {user.contact ? user.contact.LinkedIn : "https://www.linkedin.com/school/wild-codes-chool/"}
            </div>
            <div>
                {user.contact ? user.contact.GitHub : "https://github.com/orgs/WildCodeSchool"}
            </div>
  
        </>

    )
}

export default Profile;
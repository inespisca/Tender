import React from 'react';
import './Profile.css';



const Profile = ({ user }) => {

    console.log(user.picture)
    return (
        <>
            <div className="profile-pict">
                <img src={user.picture.large} alt="Tender user" />
            </div>
            <div className="profile-name">
                {user.name.first} {user.name.last}
            </div>
            <div>
                {user.contact ? user.contact.LinkedIn : "https://www.linkedin.com/school/wild-codes-chool/"}
            </div>
            <div>
                {user.contact ? user.contact.GitHub : "https://github.com/orgs/WildCodeSchool"}
            </div>
            <div className="profile-content">
                {user.description}
            </div>
        </>

    )
}

export default Profile;
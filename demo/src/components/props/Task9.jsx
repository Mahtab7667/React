import React from "react";


const Profile=({user})=>{


    console.log(user);

    return(
        <>
        <div>task9</div>
        <h1>Name is {user.name} and email is {user.email}</h1>
        </>
    )
}

export default Profile;
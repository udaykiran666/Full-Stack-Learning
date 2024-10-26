import { useEffect } from "react";

function Profile() {
    useEffect(()=>{
        console.log("component has mounted")
    },[])
    return <h2>This is the Profile Page</h2>;
  }

export default Profile;
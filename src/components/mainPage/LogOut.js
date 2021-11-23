import React from "react";
import useStore from "../../bll/state/store";
import {useNavigate} from "react-router";

const LogOut =() =>{
    const logOut = useStore(state => state.logOut)
    const navigate = useNavigate()
    return <div>
        <button onClick={()=>{logOut(navigate)}}>Log Out</button>
    </div>
}
export default LogOut
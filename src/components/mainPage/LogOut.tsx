import React from "react";
import useStore from "../../bll/state/store";
import {useNavigate} from "react-router";
import "../startPage/App.css"

const LogOut =() =>{
    const logOut = useStore(state => state.logOut)
    const navigate = useNavigate()
    return <div>
        {/*<button onClick={()=>{logOut(navigate)}}>Log Out</button>*/}
        <button onClick={()=>{logOut(navigate)}} className="btn btn-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 className="inline-block w-6 h-6 mr-2 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            Log Out
        </button>
    </div>
}
export default LogOut
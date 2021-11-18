import React, {useRef} from "react";
import useStore from "../../bll/state/store";
import {useNavigate} from "react-router-dom";

const Registration = () => {

    const inputRefUN = useRef()
    const inputRefP = useRef()
    const messRef = useRef()
    const registr = useStore(state => state.registration)

    const navigate = useNavigate();
    const reg = () => {
        registr(inputRefUN.current.value, inputRefP.current.value, setMessage, navigate)
    }

    const setMessage = (message) => {
        messRef.current.innerHTML = message
    }


    return <div>
        <input type="text" ref={inputRefUN}/>
        <input type="text" ref={inputRefP}/>
        <label ref={messRef}/>
        <button onClick={reg}>Registr</button>
    </div>
}

export default Registration;
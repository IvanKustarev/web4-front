import React, {useRef} from "react";
import useStore from "../../bll/state/store";
import {useNavigate} from "react-router-dom";

const Registration = () => {

    const inputRefUN:{current: any} = useRef()
    const inputRefP:{current: any} = useRef()
    const messRef:{current: any} = useRef()
    const registration = useStore(state => state.registration)

    const navigate = useNavigate();
    const reg = () => {
        registration(inputRefUN.current.value, inputRefP.current.value, setMessage, navigate)
    }

    const setMessage = (message:string) => {
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
import React, {useRef} from "react";
import useStore from "../../bll/state/store";
import {useNavigate} from "react-router-dom";

const Authorisation = () => {

    const inputRefUN = useRef()
    const inputRefP = useRef()
    const messRef = useRef()
    const authorisation = useStore(state => state.authorisation)

    const navigate = useNavigate();
    const auth = () => {
        authorisation(inputRefUN.current.value, inputRefP.current.value, setMessage, navigate)
    }

    const setMessage = (message) => {
        messRef.current.innerHTML = message
    }

    return <div>
        <input type="text" ref={inputRefUN}/>
        <input type="text" ref={inputRefP}/>
        <label ref={messRef}/>
        <button onClick={auth}>Auth</button>
    </div>
}

export default Authorisation;
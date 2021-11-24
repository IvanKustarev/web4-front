import React, {useRef} from "react";
import useStore from "../../bll/state/store";
import {useNavigate} from "react-router-dom";
import GoogleSignIn from "./GoogleSignIn";
import VKSignIn from "./VKSignIn";

const Authorisation = () => {

    const inputRefUN:{current: any} = useRef()
    const inputRefP:{current: any} = useRef()
    const messRef:{current: any} = useRef()
    const authorisation = useStore(state => state.authorisation)

    const navigate = useNavigate();
    const auth = () => {
        authorisation(inputRefUN.current.value, inputRefP.current.value, setMessage, navigate)
    }

    const setMessage = (message:string) => {
        messRef.current.innerHTML = message
    }

    return <div>
        <input type="text" ref={inputRefUN}/>
        <input type="text" ref={inputRefP}/>
        <label ref={messRef}/>
        <button onClick={auth}>Auth</button>
        <GoogleSignIn/>
        <VKSignIn/>
    </div>
}

export default Authorisation;
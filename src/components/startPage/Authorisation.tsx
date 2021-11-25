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
        <div className="form-control">
            <label className="label">
                <span className="label-text">Username</span>
            </label>
            <input type="text" ref={inputRefUN} placeholder="username" className="input input-info input-bordered"/>
        </div>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="text" ref={inputRefP} placeholder="password" className="input input-info input-bordered"/>
        </div>
        <label ref={messRef}/>
        <button className="btn btn-outline btn-secondary" onClick={auth}>Authorization</button>
        <GoogleSignIn/>
        <VKSignIn/>
    </div>
}

export default Authorisation;
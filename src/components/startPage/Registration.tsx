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
        <label ref={messRef}/>
        <button className="btn btn-outline btn-secondary" onClick={reg}>Registr</button>
    </div>
}

export default Registration;
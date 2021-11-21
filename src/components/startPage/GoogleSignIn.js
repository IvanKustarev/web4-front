import React, {useEffect} from "react";
import axios from "axios";
import useStore from "../../bll/state/store";
import {useNavigate} from "react-router";

const GoogleSignIn = () => {

    useEffect(() => {
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                client_id: '326055707950-1lbfi3leui4j86b50f1dqcnmnupatip9.apps.googleusercontent.com'
            })
        })
    })

    const signByGoogle = useStore(state => state.signByGoogle)

    const navigate = useNavigate()

    return <button onClick={()=>{signByGoogle(navigate)}}>Sign by Google</button>
}

export default GoogleSignIn;
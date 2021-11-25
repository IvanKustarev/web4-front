import React, {useEffect} from "react";
import useStore from "../../bll/state/store";
import {useNavigate} from "react-router";

const GoogleSignIn = () => {

    useEffect(() => {
        (window as any).gapi.load('auth2', () => {
            (window as any).gapi.auth2.init({
                client_id: '326055707950-1lbfi3leui4j86b50f1dqcnmnupatip9.apps.googleusercontent.com'
            })
        })
    })

    const signByGoogle = useStore(state => state.signByGoogle)

    const navigate = useNavigate()

    //     < button
    // className = "btn btn-primary" > primary < /button>
    //

    return <button className="btn btn-primary" onClick={()=>{signByGoogle(navigate)}}>by Google</button>
    // return <button className="btn btn-primary"> primary < /button>
}

export default GoogleSignIn;
import React, {useEffect} from "react";
import useStore from "../../bll/state/store";
import {useNavigate} from "react-router";

const VKSignIn = () => {

    // https://vk.com/dev/openapi_2?f=6.1.+VK.Observer.subscribe



    useEffect(()=>{
        (window as any).VK.init({
            apiId: 8006074
        });
    })

    const signByVk = useStore(state => state.signByVk)

    const navigate = useNavigate()

    return <button className="btn btn-secondary" onClick={()=>{signByVk(navigate)}}>by VK</button>
    // <button className="btn btn-secondary">secondary</button>
};

export default VKSignIn;
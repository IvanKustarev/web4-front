import React, {useEffect} from "react";
import useStore from "../../bll/state/store";

const VKSignIn = () => {

    // https://vk.com/dev/openapi_2?f=6.1.+VK.Observer.subscribe

    useEffect(()=>{
        window.VK.init({
            apiId: 8006074
        });
    })

    const signByVk = useStore(state => state.signByVk)

    return <button onClick={signByVk}>Sing by VK</button>
};

export default VKSignIn;
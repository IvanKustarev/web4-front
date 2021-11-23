import React, {useEffect} from "react";
import useStore from "../../bll/state/store";
import {useNavigate} from "react-router";
import Results from "./Results";
import DotAdding from "./DotAdding";
import LogOut from "./LogOut";

const MainPage = () => {


    // const auth = useStore(state => state.authorized)
    //
    // const navigate = useNavigate()
    //
    // const listeningServer = useStore(state => state.listeningServer)
    //
    // const updateDots = useStore(state => state.updateDots)

    const logIn = useStore(state => state.logIn)

    const navigate = useNavigate()

    useEffect(() => {
        logIn(navigate)
        // if (!auth) {
        //     navigate('/start')
        // }
        // listeningServer(true)
        // updateDots()
    })

    return <div>
        {/*здесь только компоненты ставить*/}
        <LogOut/>
        <DotAdding/>
        <Results/>
    </div>
}

export default MainPage;
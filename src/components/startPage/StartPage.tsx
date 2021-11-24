import React, {useEffect} from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import Authorisation from "./Authorisation";
import Registration from "./Registration";
import useStore from "../../bll/state/store";

const StartPage = () => {

    // const listeningServer = useStore(state=>state.listeningServer)
    //
    // useEffect(() => {
    //     listeningServer(false)
    // })

    return (
        /*здесь только компоненты ставить*/
        <div>
            <NavLink to={"authorisation"}>authorisation</NavLink>
            <NavLink to={"registration"}>registration</NavLink>

            <Routes>
                <Route path={"authorisation"} element={<Authorisation/>}/>
                <Route path={"registration"} element={<Registration/>}/>
            </Routes>
        </div>
    )
}

export default StartPage;
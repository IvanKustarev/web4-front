import React, {useRef} from "react";
import useStore from "../../bll/state/store";
import {NavLink, Route, Routes} from "react-router-dom";
import MainPage from "../mainPage/MainPage";
import Authorisation from "./Authorisation";
import Registration from "./Registration";

const StartPage = () => {
    return (
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
import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import Authorisation from "./Authorisation";
import Registration from "./Registration";
import "./App.css"

const StartPage = () => {

    return (
        /*здесь только компоненты ставить*/
        <div className={"start"}>
            <NavLink className="btn btn-outline btn-wide authorisation" to={"authorisation"}>authorisation</NavLink>
            <NavLink className="btn btn-outline btn-wide registration" to={"registration"}>registration</NavLink>

            <div className={"routes"}>
                <Routes>
                    <Route path={"authorisation"} element={<Authorisation/>}/>
                    <Route path={"registration"} element={<Registration/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default StartPage;
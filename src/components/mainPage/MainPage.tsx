import React, {useEffect, useRef} from "react";
import useStore from "../../bll/state/store";
import {useNavigate} from "react-router";
import LogOut from "./LogOut";
import DotsWorkContainer from "./DotWork/DotsWorkContainer";
import Results from "./Results";
import "../startPage/App.css"

const MainPage = () => {

    const authorized = useStore(state => state.getAuthorized())

    const navigate = useNavigate()
    const rRef: { current: any } = useRef()
    const messRef: { current: any } = useRef()

    useEffect(() => {
        if (!authorized) {
            navigate('/start')
        }
    })

    return <div className={"main"}>
        {/*здесь только компоненты ставить*/}
        <div className={"logout"}>
            <LogOut/>
        </div>
        <div className={"dotsWorkContainer"}>
            <DotsWorkContainer/>
        </div>
        <div className={"results"}>
            <Results/>
        </div>
    </div>
}

export default MainPage;
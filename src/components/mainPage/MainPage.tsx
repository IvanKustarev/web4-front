import React, {useEffect} from "react";
import useStore from "../../bll/state/store";
import {useNavigate} from "react-router";
import Results from "./Results";
import DotAdding from "./DotAdding";
import LogOut from "./LogOut";

const MainPage = () => {

    const authorized = useStore(state=>state._authorized)

    const navigate = useNavigate()

    useEffect(() => {
        if (!authorized) {
            navigate('/start')
        }
    })

    return <div>
        {/*здесь только компоненты ставить*/}
        <LogOut/>
        <DotAdding/>
        <Results/>
    </div>
}

export default MainPage;
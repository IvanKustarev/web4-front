import React, {useRef} from "react";
import useStore from "../../bll/state/store";
import {getMyDots} from "../../bll/communication/communication";

const MainPage = () => {

    const xRef = useRef()
    const yRef = useRef()
    const messRef = useRef()

    const setMessage = (message) => {
        messRef.current.innerHTML = message
    }

    const add = useStore(state => state.addDot)
    const getMyDots = useStore(state => state.getMyDots)

    const addDot = () => {
        add({x: xRef.current.value, y: yRef.current.value}, setMessage)
    }

    const getDots = () => {
        let dots
        getMyDots(dots)
    }

    return <div>
        <input type="text" ref={xRef}/>
        <input type="text" ref={yRef}/>
        <label ref={messRef}/>
        <button onClick={addDot}>addDot</button>
        <button onClick={getDots}>getDots</button>
    </div>
}

export default MainPage;
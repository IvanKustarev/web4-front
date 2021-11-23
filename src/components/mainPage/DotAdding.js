import React, {useRef} from "react";
import useStore from "../../bll/state/store";

const DotAdding = () => {

    const xRef = useRef()
    const yRef = useRef()
    const rRef = useRef()
    const messRef = useRef()

    const setMessage = (message) => {
        messRef.current.innerHTML = message
    }

    const send = useStore(state => state.sendDot)

    const sendDot = () => {
        send({x: xRef.current.value, y: yRef.current.value, r: rRef.current.value})
    }


    return <div>
        <input type="text" ref={xRef}/>
        <input type="text" ref={yRef}/>
        <input type="text" ref={rRef}/>
        <label ref={messRef}/>
        <button onClick={sendDot}>addDot</button>
    </div>
}
export default DotAdding

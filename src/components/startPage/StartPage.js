import React, {useRef} from "react";
import useStore from "../../bll/state/store";

const StartPage = () => {
    const inputRefUN = useRef()
    const inputRefP = useRef()
    const registr = useStore(state => state.registration)

    const reg = () => {
        registr(inputRefUN.current.value, inputRefP.current.value)
    }

    return (
        <div>
            <input type="text" ref={inputRefUN}/>
            <input type="text" ref={inputRefP}/>
            <button onClick={reg}>Registr</button>
        </div>
    )
}

export default StartPage;
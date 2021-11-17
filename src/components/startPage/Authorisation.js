import React, {useRef} from "react";
import useStore from "../../bll/state/store";

const Authorisation = () => {

    const inputRefUN = useRef()
    const inputRefP = useRef()
    const authorisation = useStore(state => state.authorisation)

    const auth = () => {
        authorisation(inputRefUN.current.value, inputRefP.current.value)
    }

    return <div>
        <input type="text" ref={inputRefUN}/>
        <input type="text" ref={inputRefP}/>
        <button onClick={auth}>Auth</button>
    </div>
}

export default Authorisation;
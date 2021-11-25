import React, {useEffect, useRef} from "react";
import useStore from "../../../bll/state/store";

const Inputs = (props: { sendByButton: (x: string, y: string) => void }) => {

    const xRef: any = useRef()
    const yRef: any = useRef()

    const xErr = useStore(state => state.xErr)
    const yErr = useStore(state => state.yErr)
    const rErr = useStore(state => state.rErr)
    const message = useStore(state => state.message)

    const rParam = useStore(state => state.rParam)
    const setRParam = useStore(state => state.setRParam)

    const rGetClassName = (buttonValue: number) => {
        if (buttonValue === rParam) {
            return "btn btn-active"
        } else {
            return "btn"
        }
    }

    const rOnClick = (value: number) => {
        setRParam(value)
    }

    let x = 0

    return <div>

        {/*<input type="text" ref={xRef}/>*/}
        <div className="form-control">
            <label className="label">
                <span className="label-text">X parameter</span>
            </label>
            <span style={{fontSize: "large", color: "red"}}>{xErr}</span>
            <input ref={xRef} type="text" placeholder="X parameter" className="input input-primary input-bordered"/>
        </div>

        <div className="form-control">
            <label className="label">
                <span className="label-text">Y parameter</span>
            </label>
            <span style={{fontSize: "large", color: "red"}}>{yErr}</span>
            <input ref={yRef} type="text" placeholder="Y parameter" className="input input-primary input-bordered"/>
        </div>


        <div className="form-control">
            <label className="label">
                <span className="label-text">R parameter</span>
            </label>
        </div>
        <span style={{fontSize: "large", color: "red"}}>{rErr}</span>
        <div className="btn-group">
            <button onClick={() => {
                rOnClick(-5)
            }} className={rGetClassName(-5)}>-5
            </button>
            <button onClick={() => {
                rOnClick(-4)
            }} className={rGetClassName(-4)}>-4
            </button>
            <button onClick={() => {
                rOnClick(-3)
            }} className={rGetClassName(-3)}>-3
            </button>
            <button onClick={() => {
                rOnClick(-2)
            }} className={rGetClassName(-2)}>-2
            </button>
            <button onClick={() => {
                rOnClick(-1)
            }} className={rGetClassName(-1)}>-1
            </button>
            <button onClick={() => {
                rOnClick(1)
            }} className={rGetClassName(1)}>1
            </button>
            <button onClick={() => {
                rOnClick(2)
            }} className={rGetClassName(2)}>2
            </button>
            <button onClick={() => {
                rOnClick(3)
            }} className={rGetClassName(3)}>3
            </button>
        </div>

        <label>{message}</label>
        <button className="btn btn-block btn-accent" onClick={() => {
            props.sendByButton(xRef.current.value, yRef.current.value)
        }}>Check Dot
        </button>
        {/*<button className="btn btn-block">block</button>*/}

    </div>
}
export default Inputs

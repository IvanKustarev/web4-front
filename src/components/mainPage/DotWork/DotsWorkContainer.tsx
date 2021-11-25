import React, {useRef} from "react";
import useStore from "../../../bll/state/store";
import Area from "./Area/Area";
import {DotType} from "../../../types";
import Inputs from "./Inputs";
import AreaContainer from "./Area/AreaContainer";

const DotsWorkContainer = () => {


    const dots: Array<DotType> = useStore(state => state.getDots())
    const sendDot = useStore(state => state.sendDot)
    // const rRef: any = useRef()
    const setErrX = useStore(state => state.setXErr)
    const setErrY = useStore(state => state.setYErr)
    const setErrR = useStore(state => state.setRErr)
    const rParam = useStore(state => state.rParam)

    const areaClick = (e: any) => {
        // console.log(e.nativeEvent.offsetX + " " + e.nativeEvent.offsetY)
        let x: number = e.nativeEvent.offsetX - 249.5
        let y: number = e.nativeEvent.offsetY - 249.5
        let r: string | number = rParam

        try {
            x = x / 200 * Number(r)
            y = -y / 200 * Number(r)
            x = Math.round(x * 1000) / 1000
            y = Math.round(y * 1000) / 1000
            if (validate(x, y, r)) {
                sendDot({x: x, y: y, r: Number(r)})
            }
        } catch (e) {
            setErrR("R - не число")
        }
    }

    const buttonClick = (x: string, y: string) => {
        if (validate(x, y, rParam)) {
            sendDot({x: Number(x), y: Number(y), r: Number(rParam)})
        }
    }

    const cleanMessages = () => {
        setErrR("")
        setErrX("")
        setErrY("")
    }

    const validateParam = (param: any, min: number, max: number, setErr: (err: string) => void) => {
        try {
            param = String(param)
            if (param === "") {
                throw "Пустая строка!"
            }
            if (param.length > 17) {
                setErr("В поле не может быть больше 17 символов");
                return false;
            } else {
                try {
                    param = Number(param)
                    if (isNaN(param)) {
                        setErr("Должно быть число!")
                        return false;
                    } else if (!(param >= min && param <= max)) {
                        setErr(`Значение должно быть в диапозоне [${min}...${max}]`);
                        return false;
                    } else {
                        return true;
                    }
                } catch (e) {
                    setErr("Должно быть число!")
                    return false;
                }
            }
        } catch (e) {
            setErr("Нельзя оставить параметр пустым!")
            return false;
        }
    }

    const rNotNullNumber = (r: number) => {
        if (r === 0) {
            return false
        } else {
            return true
        }
    }

    const validate: (x: any, y: any, r: any) => boolean = (x, y, r) => {

        cleanMessages()

        if (validateParam(x, -5, 3, setErrX) && validateParam(y, -3, 5, setErrY) && validateParam(r, -5, 3, setErrR)) {
            if (rNotNullNumber(r)) {
                return true
            } else {
                setErrR("R не может быть нулём")
                return false
            }
        } else {
            return false
        }

    }

    return <div className={"dotsWork"}>
        <div className={"area"}>
            <AreaContainer dots={dots} click={areaClick}/>
        </div>
        <div className={"inputs"}>
            <Inputs sendByButton={buttonClick}/>
        </div>
    </div>
}
export default DotsWorkContainer
import React from "react";
import Area from "./Area";
import {DotType} from "../../../../types";
import useStore from "../../../../bll/state/store";

const AreaContainer = (props: { dots: Array<DotType>, click: Function }) => {

    const rParam = useStore(state=>state.rParam)

    const checkDot = (dot: DotType) => {
        if(rParam>0) {
            if (dot.x < 0 && dot.y < 0) {
                return false;
            } else if (dot.x >= 0 && dot.y <= 0) {
                if (Math.pow(Math.abs(dot.x), 2) + Math.pow(Math.abs(dot.y), 2) <= Math.pow(rParam, 2)) {
                    return true;
                } else {
                    return false;
                }
            } else if (dot.x >= 0 && dot.y >= 0) {
                if (dot.x <= rParam / 2 && dot.y <= rParam) {
                    return true;
                } else {
                    return false;
                }
            } else if (dot.x <= 0 && dot.y >= 0) {
                if (dot.x + rParam - dot.y >= 0) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }else {
            if (dot.x > 0 && dot.y > 0) {
                return false;
            } else if (dot.x <= 0 && dot.y >= 0) {
                if (Math.pow(Math.abs(dot.x), 2) + Math.pow(Math.abs(dot.y), 2) <= Math.pow(rParam, 2)) {
                    return true;
                } else {
                    return false;
                }
            } else if (dot.x <= 0 && dot.y <= 0) {
                if (dot.x >= rParam / 2 && dot.y >= rParam) {
                    return true;
                } else {
                    return false;
                }
            } else if (dot.x >= 0 && dot.y <= 0) {
                if (dot.x + rParam - dot.y <= 0) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }


    return <Area dots={props.dots} click={props.click} checkDot={checkDot}/>
}
export default AreaContainer
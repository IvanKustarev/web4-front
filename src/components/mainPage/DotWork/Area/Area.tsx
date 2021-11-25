import React from "react";
import {DotType} from "../../../../types";
import useStore from "../../../../bll/state/store";

const Area = (props: { dots: Array<DotType>, click: Function, checkDot: (dot: DotType) => boolean }) => {

    const rParam = useStore(state => state.rParam)

    return <div style={{width: '500px', height: '500px'}}>
        <svg onClick={(e) => {
            props.click(e)
        }} viewBox="0 0 500 500">
            <path style={{fill: "rgb(0, 174, 255)"}}
                  transform="matrix(0, -0.469777, -0.469777, 0, 529.047546, 685.953064)"
                  d="M 502.266 594 A 425.734 425.734 0 0 1 928 168.266 L 928 594 Z"/>
            <path d="M 447.111 -27.607 L 447.111 172.403 L 247.111 172.403 L 447.111 -27.607 Z"
                  style={{fill: "rgb(0, 174, 255)"}}
                  transform="matrix(1, -0.000048, 0.000048, 1, -197.10994, 77.625443)"/>
            <rect x="250" y="50" width="100" height="200" style={{"fill": "rgb(0, 174, 255)"}}/>
            <rect y="249" width="500" height="2"/>
            <rect y="249" width="500" height="2" transform="matrix(0, 1, -1, 0, 499.97699, 0)"/>
            <rect x="49" y="240" width="2" height="20"/>
            <rect x="449" y="240" width="2" height="20"/>
            <rect x="124" y="240" width="2" height="20" transform="matrix(0, 1, -1, 0, 500, -75)"/>
            <rect x="124" y="240" width="2" height="20" transform="matrix(0, 1, -1, 0, 500, 325)"/>
            <rect x="149" y="240" width="2" height="20"/>
            <rect x="349" y="240" width="2" height="20"/>
            <rect x="124" y="240" width="2" height="20" transform="matrix(0, 1, -1, 0, 500, 25)"/>
            <rect x="124" y="240" width="2" height="20" transform="matrix(0, 1, -1, 0, 500, 225)"/>

            <text fontFamily={"Arial, sans-serif"} fontSize={"27.2px"} white-space="" font-family={"Arial"}
                  font-size={"27.2px"} x="268.52" y="49.135">R
            </text>
            <text fontFamily={"Arial, sans-serif"} fontSize={"27.2px"} white-space="" font-family={"Arial"}
                  font-size={"27.2px"} x="274.354" y="147.337">R/2
            </text>
            <text fontFamily={"Arial, sans-serif"} fontSize={"27.2px"} white-space="" font-family={"Arial"}
                  font-size={"27.2px"} x="267.548" y="349.573">-R/2
            </text>
            <text fontFamily={"Arial, sans-serif"} fontSize={"27.2px"} white-space="" font-family={"Arial"}
                  font-size={"27.2px"} x="271.437" y="448.747">-R
            </text>
            <text fontFamily={"Arial, sans-serif"} fontSize={"27.2px"} white-space="" font-family={"Arial"}
                  font-size={"27.2px"} x="350.193" y="218.314">R/2
            </text>
            <text fontFamily={"Arial, sans-serif"} fontSize={"27.2px"} white-space="" font-family={"Arial"}
                  font-size={"27.2px"} x="450.339" y="220.258">R
            </text>
            <text fontFamily={"Arial, sans-serif"} fontSize={"27.2px"} white-space="" font-family={"Arial"}
                  font-size={"27.2px"} x="149.901" y="212.48">-R/2
            </text>
            <text fontFamily={"Arial, sans-serif"} fontSize={"27.2px"} white-space="" font-family={"Arial"}
                  font-size={"27.2px"} x="48.782" y="210.536">-R
            </text>

            {props.dots.map(dot => {
                if (props.checkDot(dot)) {
                    return <circle cx={(250 + (Math.round(dot.x / rParam * 200 * 10) / 10))}
                                   cy={(250 - (Math.round(dot.y / rParam * 200 * 10) / 10))} r="3" stroke="black"
                                   fill="green"/>
                } else {
                    return <circle cx={(250 + (Math.round(dot.x / rParam * 200 * 10) / 10))}
                                   cy={(250 - (Math.round(dot.y / rParam * 200 * 10) / 10))} r="3" stroke="black"
                                   fill="red"/>
                }
            })}

        </svg>
    </div>
}

export default Area
import React, {useEffect} from "react";
import useStore from "../../bll/state/store";

const Results = () => {

    const dots = useStore(state=>state.dots)

    // useEffect(()=>{
    //     updateDots()
    //     // console.log("aaa")
    // })

    let res = dots.map(function(item) {
        return <p key={item.id}>
            <span>{item.x}</span>
            <span>{item.y}</span>
            <span>{item.r}</span>
            <span>{`${item.get}`}</span>
        </p>;
    });

    return <div>
        {res}
    </div>;
}

export default Results
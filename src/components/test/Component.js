import React, {useState} from "react";

function Component() {

    const [likes, setLikes] = useState(0)

    function increment(){
        setLikes()
    }function decrement(){
        setLikes(likes-1)
    }

    return (
        <div>
            <h1>{likes}</h1>
            <button onClick={increment} value={"a"}>aaaaaa</button>
            <button onClick={decrement} value={"b"}>bbbbbb</button>
        </div>
    )
}

export default Component;
import React, {useState} from "react";

function Component() {

    const [likes, setLikes] = useState(0)

    function increment(){
        setLikes(likes + 1)
    }function decrement(){
        setLikes(likes-1)
    }

    return (
        <div>
            <h1>{likes}</h1>
            <button onClick={increment} >incr</button>
            <button onClick={decrement} >dec</button>
        </div>
    )
}

export default Component;
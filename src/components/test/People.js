import React from "react";
import useStore from "../../bll/state/store";

const People = () => {
    const people = useStore(state => state.people) //селектор

    return(
        <div>
            <p>
                We have {people.length} people in our collection
                <ui>
                    {people.map(p => (
                        <li>{p}</li>
                    ))}
                </ui>
            </p>
        </div>
    )
}

export default People;
import React, {useEffect} from "react";
import useStore from "../../bll/state/store";

const Results = () => {

    const dots = useStore(state=>state.getDots())
    let res = dots.map(function(item) {
        return <tr key={item.id}>
            <th>{item.id}</th>
            <td>{item.x}</td>
            <td>{item.y}</td>
            <td>{item.r}</td>
            <td>{String(item.get)}</td>
        </tr>;
    });


    return <div className="overflow-x-auto">
        <table className="table w-full table-compact">
            <thead>
            <tr>
                <th></th>
                <th>X</th>
                <th>Y</th>
                <th>R</th>
                <th>Get</th>
            </tr>
            </thead>
            <tbody>

            {res}
            {/*<tr>*/}
            {/*    <th>1</th>*/}
            {/*    <td>Cy Ganderton</td>*/}
            {/*    <td>Quality Control Specialist</td>*/}
            {/*    <td>Littel, Schaden and Vandervort</td>*/}
            {/*    <td>Canada</td>*/}
            {/*    <td>12/16/2020</td>*/}
            {/*    <td>Blue</td>*/}
            {/*</tr>*/}
            </tbody>
            <tfoot>
            <tr>
                <th></th>
                <th>X</th>
                <th>Y</th>
                <th>R</th>
                <th>Get</th>
            </tr>
            </tfoot>
        </table>
    </div>
}

export default Results
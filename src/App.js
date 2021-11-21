import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes, withRouter} from "react-router-dom";
import StartPage from "./components/startPage/StartPage";
import MainPage from "./components/mainPage/MainPage";
import {useNavigate} from "react-router";


function App() {
    /*const people = useStore(state => state.people)*/


    /*if (auth) {
        // return <BrowserRouter>
        //         <Navigate to={"/to"}/>
        // </BrowserRouter>
    } else {*/
        return (
            <BrowserRouter>
                <Routes>
                    <Route path={"/start/*"} element={<StartPage/>}/>
                    <Route path={"/main/*"} element={<MainPage/>}/>
                </Routes>
            </BrowserRouter>
        );
    // }
}

export default App;

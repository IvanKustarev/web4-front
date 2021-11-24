import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import StartPage from "./components/startPage/StartPage";
import MainPage from "./components/mainPage/MainPage";
import useStore from "./bll/state/store";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/start/*"} element={<StartPage/>}/>
                <Route path={"/main/*"} element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

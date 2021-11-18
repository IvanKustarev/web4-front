import React from "react";
import useStore from "./bll/state/store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import StartPage from "./components/startPage/StartPage";
import MainPage from "./components/mainPage/MainPage";
import Component from "./components/test/Component";

function App() {
    const people = useStore(state => state.people)
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

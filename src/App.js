import React from "react";
import useStore from "./bll/state/store";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import StartPage from "./components/startPage/StartPage";
import MainPage from "./components/mainPage/MainPage";

function App() {
    const people = useStore(state => state.people)
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/start"} element={<StartPage/>}/>
                <Route path={"/main"} element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

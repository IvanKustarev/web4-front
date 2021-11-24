import React, {useEffect} from "react";


function App() {

    useEffect(()=>{
        history.push("/aaa")
    })

    // browserHistory.listen(location => {
    //     browserHistory.push('/super/url');
    // });
    //     return (
    //         <BrowserRouter>
    //             <Routes>
    //                 <Route path={"/start/*"} element={<StartPage/>}/>
    //                 <Route path={"/main/*"} element={<MainPage/>}/>
    //             </Routes>
    //         </BrowserRouter>
    //     );
}

export default App;

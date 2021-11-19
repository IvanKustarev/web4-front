import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {updateTokens} from "./bll/communication/communication";

// updateTokens({accessToken: "sdfghj", refreshToken: "fghjkl;"})

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

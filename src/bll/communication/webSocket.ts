import React from "react";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import {StateType} from "../../types";

var stompClient:{connect:Function, subscribe:Function, connected: boolean, disconnect: Function};

export const connect = (state: StateType, callBack: Function, errCallBack: Function) => {
    let SockJScl = new SockJS("http://localhost:8080/ws");
    stompClient = Stomp.over(SockJScl);
    stompClient.connect({}, () => {
            onConnected(state.getUserId(), callBack)
        }
        , () => {
            console.log("err in webSocket connecting")
            errCallBack()
        });
};

const onConnected = (userId: number, callBack: Function) => {
    console.log("connected");

    stompClient.subscribe(
        "/user/" + userId + "/queue/messages",
        () => {
            console.log("Сообщение получено!")
            callBack()
        }
    );
};

export const disconnect = () => {
    if (stompClient !== undefined) {
        if (stompClient.connected) {
            stompClient.disconnect()
        }
    }
}
import React from "react";
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import useStore from "../state/store";

// const WebSocketFun = () => {
//
//     return<div>
//         <button onClick={connect}>Connect button</button>
//         <button onClick={sendMessage}>Send button</button>
//     </div>
// }

var stompClient;

export const connect = (updateDots, userId) => {
    let SockJScl = new SockJS("http://localhost:8080/ws");
    stompClient = Stomp.over(SockJScl);
    stompClient.connect({}, () => {
        onConnected(updateDots, userId)
    }, () => {
        console.log("err in webSocket connecting")
    });
};

const onConnected = (updateDots, userId) => {
    console.log("connected");

    stompClient.subscribe(
        "/user/" + userId + "/queue/messages",
        () => {
            console.log("Сообщение получено!")
            updateDots()
        }
    );
};

export const disconnect = () => {
    if (stompClient !== undefined) {
        if(stompClient.connected) {
            stompClient.disconnect()
        }
    }
}

// export const createDotListener = () => {
//
// }

// const sendMessage = (msg) => {
//     // if (msg.trim() !== "") {
//         const message = {
//             // senderId: 1,
//             // recipientId: 1,
//             // senderName: "sender1",
//             // recipientName: "sender2",
//             // content: msg,
//             // timestamp: new Date(),
//             message: "hello"
//         };

//         stompClient.send("/app/chat", {}, JSON.stringify(message));
//     // }
// };

// export default WebSocketFun;
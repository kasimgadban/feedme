'use strict'
// import eventBus, { GET_NOTIFICATION } from '../services/eventBusService'
import ioClient from 'socket.io-client'

const BASE_URL = (process.env.NODE_ENV !== 'development')
    ? ''
    : 'http://localhost:3000';

var socket = null;



function connectSocket() {
    socket = ioClient(BASE_URL,{
        transports: ['websocket'],
        upgrade: false
      });
    socket.on('message', function (msg) {
        console.log(msg); 
    });
    socket.emit('message', msg);
}
// const send = (msg) => {
//     console.log('socket',msg);
    
//     socket.emit('chatmsg', msg);
//     // eventBus.$on(GET_NOTIFICATION)
// }

  
export default {
    // send
    connectSocket
   
}


'use strict'
// import eventBus, { GET_NOTIFICATION } from '../services/eventBusService'
import ioClient from 'socket.io-client'

const BASE_URL = (process.env.NODE_ENV !== 'development')
    ? ''
    : 'http://localhost:3000';

var socket = null;

connectSocket()

function connectSocket() {
    socket = ioClient(BASE_URL);
    socket.on('notification', function (msg) {
        console.log(msg); 
    });
}
const send = (msg) => {
    socket.emit('chatmsg', msg);
    // eventBus.$on(GET_NOTIFICATION)
}

  
export default {
    send
   
}


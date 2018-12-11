// 'use strict'
// import eventBus, { GET_MSG } from '../services/eventBus-service.js'
// import Vue from 'vue';
// import Vuex from 'vuex';
// import msgService from '../services/msg-service.js'
// import socketService from '../services/socket-service.js'

// Vue.use(Vuex);

// export default {
//     strict: true,
//     state: {
//         msgs: [],
//     },
//     mutations: {
//         addMsg(state, { msg }) {
//             state.msgs.push(msg)
//         },
//     },
//     actions: {
//         connectSocket(state, { userId, userDest }) {
//             this.commit({ type: 'gotMsg' });
//             socketService.connectSocket(userId, userDest)
//         },
//         gotMsg(state) {
//             eventBus.$on(GET_NOTIFICATION, (msg) => {
//                 this.commit({ type: 'addMsg', msg })
//             })
//         }

//     },
//     getters: {
//         getMsgs(state) {
//             return state.msgs;
//         },
//         getRooms(state) {
//             return state.rooms;
//         }
//     }
// };

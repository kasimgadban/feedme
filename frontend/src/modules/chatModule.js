import chatService from '../services/chatService.js'

export default {
    state: {
        chat: null,
        currCity: null,
        eventsByCity: null
    },
    mutations: {
        setChat(state, { chat }) {
            state.chat = chat
        },
    },
    actions: {
        loadChat(context) {
            return chatService.query()
                .then(chat => {
                    context.commit({ type: 'setchat', chat })
                })
        },
        
        getChatById(context, { chatId }) {
            return chatService.getById(chatId)
                .then(chat => {
                    context.commit({ type: 'setCity', chat })
                    console.log('chat returned is',chat);
                    
                    return chat;
                })
        },
    },
    getters: {
        getChat: (state) => {
            return state.chat
        },
        getCurrChat: (state) => {
            return state.currChat
        },
    },




}

import cookService from '../services/cookService.js'
import eventService from '../services/eventService.js'
// import storageService, { LOGGEDIN_USER_KEY } from '../services/storageService'
// import { stat } from 'fs';


export default {
    state: {
        cooks: null,
        cookId: null,
        currCook: null,
        newCook: null,
        events: null,
        loggedUser: null
    },
    mutations: {
        setCooks(state, { cooks }) {
            state.cooks = cooks
        },
        setCook(state, { user }) {
            state.currCook = user
        },
        setLoggedUser(state, { user }) {
            state.loggedUser = user
        },
        setEvents(state, { events }) {
            state.events = events
        }

    },
    actions: {
        logout(context) {
            
            return cookService.logout().then(() => {
                context.commit({ type: 'setLoggedUser', user: null })
                
            })
        },
        loadCooks(context) {
            return cookService.query()
                .then(cooks => {
                    context.commit({ type: 'setCooks', cooks })
                })
        },
        getCookById(context, { cookId }) {
            return cookService.getById(cookId)
                .then(cook => {
                    context.commit({ type: 'setCook', cook })
                    return cook;
                })
        },
        checkLoggedUser(context, { loggedInUser }) {
            return cookService.checkUser(loggedInUser)
                .then(user => {
                    // console.log('I am user in cook module 48', user);

                    context.commit({ type: 'setLoggedUser', user })
                    return user;
                })
                .catch(err => console.log(err))
        },

        getEventsByCook(context, { cookId }) {
            return eventService.query({ byCookId: cookId })
                .then(events => {
                    context.commit({ type: 'setEvents', events })
                    return events;
                })
        },
        addCook(context, { cook }) {
           return cookService.saveCook(cook)
                .then(user => {
                    context.commit({ type: 'setLoggedUser', user })
                    return user
                })
        },
        editCook(context, { cook }) {
            // console.log('cook module {} ',{cook})
            // console.log('cook module cook module', cook)
            return cookService.saveCook(cook)
                .then(cook => {
                    context.commit({ type: 'setCook', cook })
                    // console.log('the new cook isssss edit:', cook)
                    return cook
                })
        },
    },

    getters: {
        getCooks: (state) => { return state.cooks },
        getCookById: (state) => { return state.currCook },
        getLoggedCook: (state) => {
            // console.log('state is',state);
            return state.loggedUser
        }
    }
}


import cookService from '../services/cookService.js'
import eventService from '../services/eventService.js'

export default {
    state: {
        cooks: null,
        cookId: null,
        currCook: null,
        newCook:null,
        events:null,
    },
    mutations: {
        setCooks(state, { cooks }) {
            state.cooks = cooks
        },
        setCook(state, {cook}){
            state.currCook = cook
        },
        setEvents(state, {events}){
            state.events = events
        }

    },
    actions: {
        loadCooks(context) {
            return cookService.query()
                .then(cooks => {
                    context.commit({ type: 'setCooks', cooks })
                })
        },
        getCookById(context,{cookId}){
            return cookService.getById(cookId)
            .then(cook => {                
                context.commit({type: 'setCook',cook})
                return cook;
            })
        },
        getEventsByCook(context,{cookId}){
            return eventService.query({byCookId:cookId})
            .then(events => {
                context.commit({type: 'setEvents',events})
                return events;
            })
        },
        addCook(context,{cook}){
            // console.log('cook module {} ',{cook})
            console.log('cook module',cook)

            return cookService.saveCook(cook)
                .then(cook => {
                    context.commit({type: 'setCook', cook})
                    console.log('the new cook isssss:',cook)
                    return cook
            })
        },
        editCook(context,{cook}){
            // console.log('cook module {} ',{cook})
            console.log('cook module cook module',cook)

            return cookService.saveCook(cook)
                .then(cook => {
                    context.commit({type: 'setCook', cook})
                    console.log('the new cook isssss edit:',cook)
                    return cook
            })
        },
    },

    getters: {
        getCooks: (state) => { return state.cooks },
        getCookById: (state) => {
             return state.currCook 
            },
        
    }


}


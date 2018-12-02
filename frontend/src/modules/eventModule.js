import eventService from '../services/eventService.js'

export default {
    state: {
        events: null,
        currEvent: null
    },
    mutations: {
        setEvents(state, { events }) {
            state.events = events
        },
        setEvent(state,{event}){
            state.currEvent = event;
        }
    },
    
    actions: {
        loadEvents(context) {
            return eventService.query()
                .then(events => {
                    context.commit({ type: 'setEvents', events })
                })
        },
        getById(context, { eventId }) {
            return eventService.getById(eventId)
                    .then(event => {
                        context.commit({type: 'setEvent', event})
                        return event;
                    })
        },
    },
    getters: {
        getEvents: (state) => { 
            return state.events 
        },
        getEventById: (state) => { return state.eventId },
    },
    




}


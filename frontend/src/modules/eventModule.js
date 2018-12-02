import eventService from '../services/eventService.js'
import cityService from '../services/cityService.js';

export default {
    state: {
        events: eventService.query(),
        // eventId: eventService.getById(id),
        eventsCities: eventService.getEventsCities(),

        // cities: cityService.query()
    },
    getters: {
        getEvents: (state) => { 
            // console.log('events getters',state.events);
            
            return state.events 
        },
        getEventById: (state) => { return state.eventId },
        getEventsCities: (state) => { return state.eventsCities },
        // getCities: (state) => {return state.cities}
    },
    mutations: {
        setEvents(state, { events }) {
            state.events = events
        },

    },
    actions: {
        loadEvents(context) {
            return eventService.query()
                .then(events => {
                    // console.log('events in module',{ events })
                    context.commit({ type: 'setEvents', events })
                })
        },
        getById(context, { eventId }) {
            return eventService.getById(eventId)
        },
        getEventsCities(context) {

        }
    },




}


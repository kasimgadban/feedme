import cityService from '../services/cityService.js'
import eventService from '../services/eventService.js'

export default {
    state: {
        cities: null,
        currCity: null,
        eventsByCity: null
    },
    mutations: {
        setCities(state, { cities }) {
            state.cities = cities
        },
        setCity(state, { city }) {
            state.currCity = city
        },
        setEventsByCity(state, { events }) {
            state.eventsByCity = events
        },


    },
    actions: {
        loadCities(context) {
            return cityService.query()
                .then(cities => {
                    context.commit({ type: 'setCities', cities })
                })
        },
        
        getCityById(context, { cityId }) {
            return cityService.getById(cityId)
                .then(city => {
                    context.commit({ type: 'setCity', city })
                    console.log('city returned is',city);
                    
                    return city;
                })
        },
        loadEventsByCity(context,{cityId}) {  
            return eventService.query({byCityId:cityId})
                .then(events => {
                    context.commit({ type: 'setEventsByCity', events })
                    return events;
                })
        },
    },
    getters: {
        getCities: (state) => {
            return state.cities
        },
        getCurrCity: (state) => {
            return state.currCity
        },
        getEventsByCity: (state) => {
            return state.eventsByCity
        },
    },




}

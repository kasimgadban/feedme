import userService from '../services/userService.js'

export default {
    state: {
        user: null
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user
        },
    },
    actions: {
       getUser(context, { cityId }) {
            return cityService.getById(cityId)
                .then(city => {
                    context.commit({ type: 'setCity', city })
                    console.log('city returned is',city);
                    
                    return city;
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

import cityService from '../services/cityService.js'

export default {
    state: {
        cities: null,
        currCity: null
    },
    mutations: {
        setCities(state, { cities }) {
            state.cities = cities
        },
        setCity(state, { city }) {
            state.currCity = city
        }

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
                    return city;
                })
        }
    },
    getters: {
        getCities: (state) => {
            return state.cities
        },
        getCurrCity: (state) => {
            return state.currCity
        },
    },




}


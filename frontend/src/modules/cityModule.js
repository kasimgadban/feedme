import cityService from '../services/cityService.js'

export default {
    state: {
        cities: cityService.query(),
        currCity: null
    },
    mutations: {
        setCities(state, { cities }) {
            state.cities = cities
        },
        setCity(state, { city }) {
            console.log('set city ', city);
            state.currCity = city
            console.log('set  state.currCity  ', state.currCity);
        }

    },
    actions: {
        loadCities(context,payload) {
            return cityService.query()
                .then(cities => {
                    context.commit({ type: 'setCities', cities })
                })
        },
        getCityById(context, { cityId }) {
            return cityService.getById(cityId)
                .then(city => {
                    console.log('then of get by id cityservice', city);

                    context.commit({ type: 'setCity', city })
                    // console.log('commit cityservice',city);
                    return city;
                })
        }
    },
    getters: {
        getCities: (state) => {
            // console.log('cities getters',state.cities);

            return state.cities
        },
        getCurrCity: (state) => {
            console.log('printing from city module', state.currCity)
            return state.currCity
        },
    },




}


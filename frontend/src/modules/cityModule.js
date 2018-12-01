import cityService from '../services/cityService.js'

export default {
    state: {
        cities: cityService.query(),
        currCity: null
    },
    getters: {
        getCities: (state) => { 
            console.log('cities getters',state.cities);
            
            return state.cities 
        },
        getCurrCity: (state) => {return state.currCity },
    },
    mutations: {
        setCities(state, { cities }) {
            state.cities = cities
        },
        setCity(state, {city}){
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
        getCityById(context,{x}){
            console.log('getbyid from city service module',x);
            return cityService.getById(x)
            .then(city => {
                
                context.commit({type: 'setCity',city})
                return city;
            })
        }
    },

    
    

}


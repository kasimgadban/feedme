import cityService from '../services/cityService.js'

export default {
    state: {
        cities: cityService.query(),
        currCity: null
    },
<<<<<<< HEAD
    getters: {
        getCities: (state) => {
            console.log('cities getters', state.cities);

            return state.cities
        },
        getCurrCity: (state) => { return state.currCity },
    },
=======
>>>>>>> 5b59c53d1968fe8c0f0c77e4c5dc4abc8aba155d
    mutations: {
        setCities(state, { cities }) {
            state.cities = cities
        },
<<<<<<< HEAD
        setCity(state, { city }) {
=======
        setCity(state, {city}){
            console.log('set city ',city);
>>>>>>> 5b59c53d1968fe8c0f0c77e4c5dc4abc8aba155d
            state.currCity = city
            console.log('set  state.currCity  ', state.currCity );
        }

    },
    actions: {
        loadCities(context) {
            return cityService.query()
                .then(cities => {
                    context.commit({ type: 'setCities', cities })
                })
        },
<<<<<<< HEAD
        getCityById(context, { x }) {
            console.log('getbyid from city service module', x);
            return cityService.getById(x)
                .then(city => {

                    context.commit({ type: 'setCity', city })
                    return city;
                })
=======
        getCityById(context,{cityId}){
            return cityService.getById(cityId)
            .then(city => {
                console.log('then of get by id cityservice',city);
                
                context.commit({type: 'setCity',city})
                // console.log('commit cityservice',city);
                return city;
            })
>>>>>>> 5b59c53d1968fe8c0f0c77e4c5dc4abc8aba155d
        }
    },
    getters: {
        getCities: (state) => { 
            // console.log('cities getters',state.cities);
            
            return state.cities 
        },
         getCurrCity: (state) => {
            console.log('printing from city module',state.currCity )
            return  state.currCity 
        },
    },




}


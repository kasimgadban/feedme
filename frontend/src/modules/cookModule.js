import cookService from '../services/cookService.js'


export default {
    state: {
        cooks: null,
        cookId: null,
        currCook: null
    },
    mutations: {
        setCooks(state, { cooks }) {
            state.cooks = cooks
        },
        setCook(state, {cook}){
            state.currCook = cook
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
        }
    },

    getters: {
        getCooks: (state) => { return state.cooks },
        getCookById: (state) => {
             return state.currCook 
            },
    }


}


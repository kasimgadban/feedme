import cookService from '../services/cookService.js'


export default {
    state: {
        cooks: cookService.query(),
        cookId: cookService.getById(),
        currCook: null
    },
    mutations: {
        setCooks(state, { cooks }) {
            state.cooks = cooks
        },
        setCook(state, {cook}){
            console.log('set cook ',cook);
            state.currCook = cook
            console.log('set  state.currCook  ', state.currCook );
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
            console.log('state.currCook getters ',state.currCook )
             return state.currCook 
            },
    }


}


import cookService from '../services/cookService.js'


export default {
    state: {
        cooks: cookService.query(),
        // cookId: cookService.getById(id)
    },
    mutations: {
        setCooks(state, { cooks }) {
            state.cooks = cooks
        },

    },
    actions: {
        loadCooks(context) {
            return cookService.query()
                .then(cooks => {
                    console.log({ cooks })
                    context.commit({ type: 'setCooks', cooks })
                })
        },
        getById(context,{cookId}){
            return cookService.getById(cookId)
        }
    },

    getters: {
        getCooks: (state) => { return state.cooks },
        getCookById: (state) => { return state.cookId },
    }
    

}


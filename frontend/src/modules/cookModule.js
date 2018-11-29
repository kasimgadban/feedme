import cookService from '../services/cookService.js'


export default {
    state: {
        cooks: cookService.query(),
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
        }
    },
    getters: {
        getCooks: (state) => { return state.cooks },
    }
    

}


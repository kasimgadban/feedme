// import cookService from '../service/cookService.js'


export default {
    state: {
        cooks: [],
    },
    mutations: {
        setCooks(state, { cooks }) {
            state.cooks = cooks
        },
    },
    actions: {
    },
    getters: {
        getCooks: (state) => { return state.cooks },
    }
}


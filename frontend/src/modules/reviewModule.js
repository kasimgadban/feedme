// import cookService from '../services/cookService.js'
import reviewService from '../services/ReviewService.js'

export default {
    state: {
        review: null
    },
    mutations: {
        setReview(state, { review }) {
            state.review = review
        },
    },
    actions: {
        saveReview(context, { fullReview }) {
           return reviewService.saveReview(fullReview)
        }
    },

    getters: {
        getReviews: (state) => { return state.cooks },
    }
}
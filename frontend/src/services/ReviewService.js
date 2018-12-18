import axios from "axios"

const BASE_URL = process.env.NODE_ENV !== 'development'
    ? '/api/review'
    : '//localhost:3000/api/review'

function saveReview(review) {

    return axios.post(BASE_URL, {
        review
    })
        .then(res => res.data)
}

export default {
    saveReview
}

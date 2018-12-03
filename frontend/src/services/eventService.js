import axios from 'axios'


const BASE_URL = process.env.NODE_ENV !== 'development'
    ? '/event/'
    : '//localhost:3000/event/'

function query() {
    return axios.get(BASE_URL)
        .then(res => res.data)
}


function getById(eventId) {
    return axios.get(`${BASE_URL}${eventId}`)
        .then(res => res.data)
}


export default {
    query,
    getById,
    // getEventsCities
}

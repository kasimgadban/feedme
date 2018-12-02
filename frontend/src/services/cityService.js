import axios from 'axios'


const BASE_URL = process.env.NODE_ENV !== 'development'
    ? '/city/'
    : '//localhost:3000/city/'

function query() {
    return axios.get(BASE_URL)
        .then(res => res.data)
}


function getById(cityId) {
    return Axios.get(`${BASE_URL}${cityId}`)
        .then(res => res.data)
}


export default {
    query,
    getById,

}
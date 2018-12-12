import axios from 'axios'


const BASE_URL = process.env.NODE_ENV !== 'development'
    ? '/chat'
    : '//localhost:3000/chat'

function query() {
    return axios.get(BASE_URL)
        .then(res => res.data)
}


function getById(chatId) {
    return axios.get(`${BASE_URL}/${chatId}`)
        .then(res => res.data)
}


export default {
    query,
    getById,

}
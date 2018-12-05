import axios from 'axios'

const BASE_URL = process.env.NODE_ENV !== 'development'
    ? '/event/'
    : '//localhost:3000/event'

function query(filter = {}) {

    var queryParams = new URLSearchParams()
    if(filter.byCityId) queryParams.append('cityId',filter.byCityId)
    if(filter.byCookId) queryParams.append('cookId',filter.byCookId)
    
    if(filter.byCityId || filter.byCookId){
      
        return axios.get(`${BASE_URL}?${queryParams}`)
            .then(res => res.data)
    }
    else
        return axios.get(BASE_URL)
            .then(res => res.data)
}

function getById(eventId) {
    return axios.get(`${BASE_URL}/${eventId}`)
    .then(res => res.data)  
}

export default {
    query,
    getById,
}

import axios from 'axios'

const BASE_URL = process.env.NODE_ENV !== 'development'
    ? '/event/'
    : '//localhost:3000/event'

function query(filter = {}) {
    console.log('filter',filter);

    var queryParams = new URLSearchParams()
    if(filter.byCityId) queryParams.append('cityId',filter.byCityId)
    if(filter.byCookId) queryParams.append('cookId',filter.byCookId)
    
    if(filter.byCityId || filter.byCookId){
        console.log('eventService of axios frontEnd', `${BASE_URL}?${queryParams}`)
        console.log('eventService of axios filter.byCityId', filter.byCityId)

        return axios.get(`${BASE_URL}?${queryParams}`)
            .then(res => res.data)
    }
    else
        return axios.get(BASE_URL)
            .then(res => res.data)

}


function getById(eventId) {
    return axios.get(`${BASE_URL}${eventId}`)
    .then(res => res.data)  
    // console.log('and I was called as an axios for the event id',eventId);
    
    // return axios.get(`${BASE_URL}/${eventId}`) 
}

// function getEventsByCity(cityId){
//     console.log('I am from axios cityId ',cityId);
//     console.log('I am from axios ${BASE_URL}/${cityId}:',`${BASE_URL}city/${cityId}`);
    
//     return axios(`${BASE_URL}city/${cityId}`)
//     .then(res => res.data)
// }


export default {
    query,
    getById,
    // getEventsByCity
}

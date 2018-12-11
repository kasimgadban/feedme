import axios from 'axios'

const BASE_URL = process.env.NODE_ENV !== 'development'
    ? '/event'
    : '//localhost:3000/event'

function query(filter = {}) {
    console.log('front eventService query',filter);
    
    // const a = [];
    // a[0] = filter.date;
    // a[1] = filter.address
    var queryParams = new URLSearchParams()
    if (filter.byCityId) queryParams.append('cityId', filter.byCityId)
    if (filter.byCookId) queryParams.append('cookId', filter.byCookId)
    if(filter.byAddress) queryParams.append('address',filter.byAddress)
    if (filter.byCityId || filter.byCookId || filter.byAddress) {
        console.log('CHECK',`${BASE_URL}?${queryParams}` );
        return axios.get(`${BASE_URL}?${queryParams}`)
                        .then(res => res.data)
    }
    else
        return axios.get(BASE_URL)
            .then(res => res.data)
}

function getById(eventId) {
    console.log('axios eventid',eventId);
    
    return axios.get(`${BASE_URL}/${eventId}`)
    .then(res => {
        console.log('res.data',res.data);
         return  res.data
    })
}

function saveEvent(event) {

    if (event._id) {
        console.log('I should take care of saving an edit event',event);
        
        return axios.put(`${BASE_URL}/${event._id}`, event).then(res=>res.data)
    } else {
        console.log('the url sent is',BASE_URL);
        console.log('the event sent to the url above is for saving',event);
        
        return axios.post(`${BASE_URL}`, event).then(res=>res.data)
    }


}
function deleteEvent(event){
    return axios.delete(`${BASE_URL}/${event._id}`)
}
export default {
    query,
    getById,
    saveEvent,
    deleteEvent
}

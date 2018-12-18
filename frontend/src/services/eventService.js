import axios from 'axios'

const BASE_URL = process.env.NODE_ENV !== 'development'
    ? '/event'
    : '//localhost:3000/event'

function query(filter = {}) {
    var queryParams = new URLSearchParams()
    if (filter.byCityId) queryParams.append('cityId', filter.byCityId)
    if (filter.byCookId) queryParams.append('cookId', filter.byCookId)
    if(filter.byAddress) queryParams.append('address',filter.byAddress)
    if (filter.byCityId || filter.byCookId || filter.byAddress) {
        return axios.get(`${BASE_URL}?${queryParams}`)
                        .then(res => res.data)
    }
    else
        return axios.get(BASE_URL)
            .then(res => res.data)
}

function getById(eventId) {
    // console.log('axios eventid',eventId);
    
    return axios.get(`${BASE_URL}/${eventId}`)
    .then(res => {
        // console.log('res.data',res.data);
         return  res.data
    })
}

function saveImage(imageToSave){
    return axios.post(`${BASE_URL}/saveImage`,imageToSave)
    .then(res => res.data)
}

function saveEvent(event) {

    if (event._id) {
         return axios.put(`${BASE_URL}/${event._id}`, event).then(res=>res.data)
    } else {
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
    deleteEvent,
    saveImage
}

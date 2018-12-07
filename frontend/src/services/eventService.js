import axios from 'axios'

const BASE_URL = process.env.NODE_ENV !== 'development'
    ? '/event'
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

function addOrder(order) {
    console.log('order from front',order);
    
    return axios.put(`${BASE_URL}/${order.eventId}`, order)
      .then(res => res.data)
      .catch(err => {
        console.warn(err);
        return Promise.reject(err);
      });
  }

export default {
    query,
    getById,
    addOrder
}

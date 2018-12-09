import axios from 'axios'

const BASE_URL = process.env.NODE_ENV !== 'development'
    ? '/event'
    : '//localhost:3000/event'

function query(filter = {}) {
    // const a = [];
    // a[0] = filter.date;
    // a[1] = filter.address
    var queryParams = new URLSearchParams()
    if (filter.byCityId) queryParams.append('cityId', filter.byCityId)
    if (filter.byCookId) queryParams.append('cookId', filter.byCookId)
    if (filter.date) queryParams.append('date', filter.date)

    if (filter.byCityId || filter.byCookId || filter.date ) {
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

function update(event) {
    return axios.put(`${BASE_URL}/${event._id}`, event)
        .then(res => res.data)
        .catch(err => {
            console.warn(err);
            return Promise.reject(err);
        });
}


export default {
    query,
    getById,
    update,
}

// import fs from 'fs'; 
// import eventService from './eventService.js'



import axios from 'axios'


const BASE_URL = process.env.NODE_ENV !== 'development'
    ? '/city'
    : '//localhost:3000/city'

function query() {
    return axios.get(BASE_URL)
        .then(res => res.data)
}

function getById(id) {
    console.log('get city service id is,', id);

    var city = cities.find(city => city.id === id);
    console.log('test city', city)
    if (city) return Promise.resolve(city);
    else return Promise.reject('Unknown city');
}


export default {
    query,
    getById,

}
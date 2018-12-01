import fs from 'fs'; 
import eventService from './eventService.js'

export default {
    query,
    getById,
    
}

 var cities =  _createCities()

function query() {
    return Promise.resolve(cities);
}

function getById(id) {
    console.log('get city service id is,',id);
    
    var city = cities.find(city => city.id === id);
    if (city)  return Promise.resolve(city);
    else return Promise.reject('Unknown city');
}


function _createCities() {

    var allCities = require('../../data/city.json')
    // console.log('cities line 24',allCities);
    
    if (allCities && allCities.length) return allCities;
}

<<<<<<< HEAD
import fs from 'fs';
import eventService from './eventService.js'
=======
// import fs from 'fs'; 
// import eventService from './eventService.js'
>>>>>>> 5b59c53d1968fe8c0f0c77e4c5dc4abc8aba155d

export default {
    query,
    getById,

}

var cities = _createCities()

function query() {
    return Promise.resolve(cities);
}

function getById(id) {
    console.log('get city service id is,',id);
    
    var city = cities.find(city => city.id === id);
<<<<<<< HEAD
    if (city) return Promise.resolve(city);
=======
    console.log('test city',city)
    if (city)  return Promise.resolve(city);
>>>>>>> 5b59c53d1968fe8c0f0c77e4c5dc4abc8aba155d
    else return Promise.reject('Unknown city');
}


function _createCities() {

    var allCities = require('../../data/city.json')
<<<<<<< HEAD
    console.log('cities line 24', allCities);

=======
    // console.log('cities line 24',allCities);
    
>>>>>>> 5b59c53d1968fe8c0f0c77e4c5dc4abc8aba155d
    if (allCities && allCities.length) return allCities;
}

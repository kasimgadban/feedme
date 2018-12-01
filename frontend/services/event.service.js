const fs = require('fs') 

module.exports = {
    query,
    getById,
}

var events = _createEvents();

function query() {
    return Promise.resolve(events);
}

function getById(id) {
    var event = events.find(event => event.id === id);
    if (event)  return Promise.resolve(event);
    else return Promise.reject('Unknown Event');
}


function _createEvents() {

    var events = require('../data/event.json')
    if (events && events.length) return events;
}

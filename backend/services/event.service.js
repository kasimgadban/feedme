const mongoService = require('./mongo.service') 

const ObjectId = require('mongodb').ObjectId;

function query(filter = {}) {
    console.log('be filter',filter);
    
    let byCityId = filter.cityId
    let byCookId = filter.cookId

    if(byCityId) 
    {
        byCityId = new ObjectId(byCityId)
        console.log('I am from event services be my id is as a city:',byCityId);
    }

    if(byCityId)
        filter = {cityId:byCityId}
    if(byCookId)
        filter = {cookId:byCookId}
    else    filter = {}

    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('event_db');
            if(byCityId)
                var events = collection.find({cityId:byCityId}).toArray()
            else
                var events = collection.find({}).toArray()
                
            console.log('events from the core of be ',events);
            return events
        })
}

function getById(eventId) {
    eventId = new ObjectId(eventId)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('event_db');
            return collection.findOne({ _id: eventId })
        })
}

// function getEventsByCityId(cityId) {
//     cityId = new ObjectId(cityId)
//     return mongoService.connectToDb()
//         .then(db => {
//             const collection = db.collection('event_db');
//             console.log('I am in here 26 cityId',cityId);
            
//             return collection.find({cityId:cityId}).toArray()
//         })
// }


function remove(eventId){
     eventId = new ObjectId(eventId)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('event_db');
            return collection.remove({ _id: eventId })
        })
}


function add(event){
     
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('event_db');
            return collection.insertOne(event)
                .then(result => {
                    event._id = result.insertedId;
                    return event;
                })
        })
}

function update(event){
    event._id = new ObjectId(event._id)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('event_db');
            return collection.updateOne({ _id: event._id }, { $set: event })
                .then(result => {
                    return result;
                })
        })
}


module.exports = {
    query,
    getById,
    remove,
    add,
    update,
    // getEventsByCityId
}

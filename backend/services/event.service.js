const mongoService = require('./mongo.service') 

const ObjectId = require('mongodb').ObjectId;

function query() {
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('event_db');
            return collection.find({}).toArray()
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
    update
}

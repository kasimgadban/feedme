const mongoService = require('./mongo.service')

const ObjectId = require('mongodb').ObjectId;

function query(filter = {}) {
    console.log('backend Service ',filter);
    
    let byCityId = filter.cityId;
    let byCookId = filter.cookId;
    let byAddress = filter.address
    // console.log(byAddress);
    
    if (byCityId) {
        byCityId = new ObjectId(byCityId)
        filter = { cityId: byCityId }
    }
    if (byCookId) {
        byCookId = new ObjectId(byCookId)
        filter = { cookId: byCookId }
    }
    if (byAddress) {
        filter = { 
            address: byAddress,
        }
    }
    else filter = {}
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('event_db');
            if (byCityId)
                var events = collection.find({ cityId: byCityId }).toArray()
            else if (byCookId)
                var events = collection.find({ cookId: byCookId }).toArray()
            else if (byAddress){
                var events = collection.aggregate([
                    {$match : { 
                        'address' : {$regex: filter.address},
                        // 'dates.book.eventDate': filter.date
                    }
}
]).toArray()
}else
                var events = collection.find({}).toArray()

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

function remove(eventId) {
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
            const collection = db.collection('event_db')
            event.cityId = new ObjectId(event.cityId)
            event.cookId = new ObjectId(event.cookId)
            event.image =  "http://www.trestelle.ca/images/recipes/5866BOC-Puttan-1080.jpg"
            event.bgImage = "http://www.trestelle.ca/images/recipes/5866BOC-Puttan-1080.jpg"
            return collection.insertOne(event)
                .then(result => {
                    event._id = result.insertedId;
                    return event;
                })
        })
}


function update(event,msg) {
    event._id = new ObjectId(event._id)
    event.cookId = new ObjectId(event.cookId)
    event.cityId = new ObjectId(event.cityId)
    // delete event.dates.eventId
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('event_db');
            event.cityId = new ObjectId(event.cityId)
            event.cookId = new ObjectId(event.cookId)
            return collection.updateOne({ _id: event._id }, { $set: event }, {$set: msg})
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
}

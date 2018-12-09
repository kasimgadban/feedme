const mongoService = require('./mongo.service')

const ObjectId = require('mongodb').ObjectId;

function query(filter = {}) {
    let byCityId = filter.cityId;
    let byCookId = filter.cookId;
    // let splitArray = filter.dateAddress
    // let date = splitArray.split(',')[0]
    // let address = splitArray.split(',')[1]+splitArray.split(',')[2]
    let date = filter.date
    if (byCityId) {
        byCityId = new ObjectId(byCityId)
        filter = { cityId: byCityId }
    }
    if (byCookId) {
        byCookId = new ObjectId(byCookId)
        filter = { cookId: byCookId }
    }
    if (date) {
        filter = { 
            date: date,
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
            else if (date) {
                // var events = collection.find({"address":{$regex: filter.address}})
                events = collection.aggregate(
                    [

                        {
                            $unwind: {
                                path: '$dates'
                            }
                        },
                        { 
                            $match : { 
                                // 'address' : {$regex: filter.address},
                                'dates.eventDate': filter.date
                            }
                        },  
                        {
                            $group: {
                                "_id": '$dates'
                            },
                        }

                    ],
                ).toArray()
            }
            else
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

function add(event) {
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

// function update(event){
//     event._id = new ObjectId(event._id)
//     return mongoService.connectToDb()
//         .then(db => {
//             const collection = db.collection('event_db');
//             return collection.updateOne({ _id: event._id }, { $push: event })
//                 .then(result => {
//                     return result;
//                 })
//         })
// }

// function addBook(book){
//     const eventId = new ObjectId(book.eventId)
//     delete book.eventId;
//     return mongoService.connectToDb()
//         .then(db => {
//             const collection = db.collection('event_db');
//             return collection.updateOne({ _id: eventId},{ $push :{dates: book}})
//                 .then(result => {
//                     return result;
//                 })
//         })
// }

function update(event) {
    event._id = new ObjectId(event._id)
    // delete event.dates.eventId
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('event_db');
            return collection.updateOne({ _id: event._id }, { $set: event })
                .then(result => {
                    return result;
                })
        })
}

// function update(order){
//     const cookId = new ObjectId(order.cookId)
//     return mongoService.connectToDb()
//         .then(db => {
//             const collection = db.collection('cook_db');
//             return collection.updateOne({ _id: cookId },{$push:{orders: order }})
//                 .then(result => {
//                     return result;
//                 })
//         })
// }

module.exports = {
    query,
    getById,
    remove,
    add,
    update,
    // addBook
}

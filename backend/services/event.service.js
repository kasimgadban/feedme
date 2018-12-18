const mongoService = require('./mongo.service')
const cityService = require('./city.service')
const cloudinary = require('cloudinary')
const ObjectId = require('mongodb').ObjectId;

cloudinary.config({
    cloud_name: 'ddi3pg6wq',
    api_key: '142982186366763',
    api_secret: 'RQeNDgU1kV54S-jjviuvFkbCsVs'
})
function query(filter = {}) {
    let byCityId = filter.cityId;
    let byCookId = filter.cookId;
    let byAddress = filter.address

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
            else if (byAddress) {
                var events = collection.aggregate([
                    {
                        $match: {
                            'address': { $regex: filter.address },
                        }
                    }
                ]).toArray()
            } else
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
            const collection = db.collection('event_db')
            event.cityId = new ObjectId(event.cityId)
            event.cookId = new ObjectId(event.cookId)
            event.cityId = new ObjectId(event.cityId)
            return collection.insertOne(event)
                .then(result => {
                    event._id = result.insertedId;
                    return event;
                })
        })
}

function update(event) {
    event._id = new ObjectId(event._id)
    event.cookId = new ObjectId(event.cookId)
    event.cityId = new ObjectId(event.cityId)
    // delete event.dates.eventId
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('event_db');
            event.cityId = new ObjectId(event.cityId)
            event.cookId = new ObjectId(event.cookId)
            return collection.updateOne({ _id: event._id }, { $set: event })
                .then(result => {
                    return result;
                })
        })
}

function saveImage({ imageToSave }) {
    // console.log('imageToSave',imageToSave);

    return cloudinary.v2.uploader.upload(imageToSave).then(data => data.secure_url)
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
    saveImage
    // addBook
}

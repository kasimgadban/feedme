const mongoService = require('./mongo.service')
const cloudinary = require('cloudinary')
const ObjectId = require('mongodb').ObjectId;

cloudinary.config({
    cloud_name: 'ddi3pg6wq',
    api_key : '142982186366763',
    api_secret: 'RQeNDgU1kV54S-jjviuvFkbCsVs'
})
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
                        // 'address' : {$regex: filter.address},
                        'address' : {$regex: filter.address},
                        // 'dates.book.eventDate': filter.date
                    }
}
]).toArray()
            // else if (date) {
            //     // var events = collection.find({"address":{$regex: filter.address}})
            //     events = collection.aggregate(
            //         [

            //             {
            //                 $unwind: {
            //                     path: '$dates'
            //                 }
            //             },
            //             { 
            //                 $match : { 
            //                     // 'address' : {$regex: filter.address},
            //                     'dates.book.eventDate': filter.date
            //                 }
            //             },  
            //             {
            //                 $group: {
            //                     "_id": '$dates'
            //                 },
            //             }

            //         ],
            //     ).toArray()
            // }
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
            //get the cook object
            //event.city = cook.city
            //event.country = cook.country
            //event.address = cook.address

            // event.image =  "http://www.trestelle.ca/images/recipes/5866BOC-Puttan-1080.jpg"
            // event.bgImage = "http://www.trestelle.ca/images/recipes/5866BOC-Puttan-1080.jpg"
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

function saveImage({imageToSave}){
    // console.log('imageToSave',imageToSave);
    
    return cloudinary.v2.uploader.upload(imageToSave).then(data => data.secure_url)}

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

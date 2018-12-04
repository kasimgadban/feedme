const mongoService = require('./mongo.service') 

const ObjectId = require('mongodb').ObjectId;

function query() {
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('cook_db');
            return collection.find({}).toArray()
        })
}

function getById(cookId) {
    cookId = new ObjectId(cookId)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('cook_db');
            return collection.findOne({ _id: cookId })
        })
}

function remove(cookId){
     cookId = new ObjectId(cookId)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('cook_db');
            return collection.remove({ _id: cookId })
        })
}


function add(cook){
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('cook_db');
            return collection.insertOne(cook)
                .then(result => {
                    cook._id = result.insertedId;
                    return cook;
                })
        })
}

function update(cook){
    cook._id = new ObjectId(cook._id)
    console.log(cook);
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('cook_db');
            return collection.updateOne({ "_id": cook._id },{"guestName": cook.guestName })
                .then(result => {
                    return result;
                })
        })
}

function checkLogin({ nickname }) {
    return mongoService.connect()
        .then(db => db.collection('user').findOne({ nickname }))
}



module.exports = {
    query,
    getById,
    remove,
    add,
    update,
    checkLogin
}

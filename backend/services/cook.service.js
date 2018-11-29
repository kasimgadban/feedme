const mongoService = require('./mongo.service') 

const ObjectId = require('mongodb').ObjectId;

function query() {
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('cooks');
            return collection.find({}).toArray()
        })
}

function getById(cookId) {
    console.log(cookId)
    cookId = new ObjectId(cookId)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('cooks');
            return collection.findOne({ _id: cookId })
        })
}

function remove(){
    cookId = new ObjectId(cookId)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('cooks');
            return collection.remove({ _id: cookId })
        })
}

function add(cook){
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('cooks');
            return collection.insertOne(cook)
                .then(result => {
                    cook._id = result.insertedId;
                    return car;
                })
        })
}

function update(cook){
    cook._id = new ObjectId(cook._id)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('cooks');
            return collection.updateOne({ _id: cook._id }, { $set: cook })
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

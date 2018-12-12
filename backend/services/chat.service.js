const mongoService = require('./mongo.service') 

const ObjectId = require('mongodb').ObjectId;

function query() {
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('chat');
            return collection.find({}).toArray()
        })
}

function getById(chatId) {
    chatId = new ObjectId(chatId)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('chat');
            return collection.findOne({ _id: chatId })
        })
}

function remove(chatId){
     chatId = new ObjectId(chatId)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('chat');
            return collection.remove({ _id: chatId })
        })
}


function add(chat){
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('chat');
            return collection.insertOne(chat)
                .then(result => {
                    chat._id = result.insertedId;
                    return chat;
                })
        })
}

function update(chat){
    chat._id = new ObjectId(chat._id)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('chat');
            return collection.updateOne({ _id: chat._id }, { $set: chat })
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

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
    console.log('cookId from service', cookId)
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

function update(order){
    const cookId = new ObjectId(order.cookId)
    console.log(order);
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('cook_db');
            return collection.updateOne({ _id: cookId },{$push:{orders: order }})
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

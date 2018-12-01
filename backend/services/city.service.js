const mongoService = require('./mongo.service') 

const ObjectId = require('mongodb').ObjectId;

function query() {
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('city_db');
            return collection.find({}).toArray()
        })
}

function getById(cityId) {
    console.log(cityId)
    cityId = new ObjectId(cityId)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('city_db');
            return collection.findOne({ _id: cityId })
        })
}

function remove(cityId){
     cityId = new ObjectId(cityId)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('city_db');
            return collection.remove({ _id: cityId })
        })
}


function add(city){
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('city_db');
            return collection.insertOne(city)
                .then(result => {
                    city._id = result.insertedId;
                    return city;
                })
        })
}

function update(city){
    city._id = new ObjectId(city._id)
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('city_db');
            return collection.updateOne({ _id: city._id }, { $set: city })
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

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

function checkUser(user){
    console.log('user from BE 23',user);
    return mongoService.connectToDb()
    .then(db => {
        const collection = db.collection('cook_db');
        return collection.findOne(
            { $and:[
                { 'fullName': user.username},
                {'password':user.password}]
            }).then(user => {
            console.log('user from BE',user);
            return user;
        })
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
    const cookId = new ObjectId(cook._id)
   
    return mongoService.connectToDb()
        .then(db => {
            let tempCook = {...cook}
            delete tempCook._id
       
            const collection = db.collection('cook_db');
            return collection.update({ _id: cookId },{$set:tempCook})
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
    checkLogin,
    checkUser
}

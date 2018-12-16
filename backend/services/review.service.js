const mongoService = require('./mongo.service')
const ObjectId = require('mongodb').ObjectId;

function add(cook) {
    return mongoService.connectToDb()
        .then(db => {
            const collection = db.collection('cook_db');
            
            return cityService.getCityByName(cook.city).then(city => {
                
                cook.cityId = new ObjectId(city._id)
                return collection.insertOne(cook)
                    .then(result => {
                        cook._id = result.insertedId;
                        return cook;
                    })
            })

        })
}

function update(cook) {
    const cookId = new ObjectId(cook._id)

    return mongoService.connectToDb()
        .then(db => {
            let tempCook = { ...cook
            }
            delete tempCook._id
            
            const collection = db.collection('cook_db');
            return collection.update({
                    _id: cookId
                }, {
                    $set: tempCook
                })
                .then(result => {
                    return result;
                })
        })
}

function checkLogin({
    nickname
}) {
    return mongoService.connect()
        .then(db => db.collection('user').findOne({
            nickname
        }))
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

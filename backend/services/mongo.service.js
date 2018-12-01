
const MongoClient = require('mongodb').MongoClient;

// const url = 'mongodb://localhost:27017';
const url = 'mongodb://kasim.gadban:kasim3110113@ds123454.mlab.com:23454/feedme_db'

const dbName = 'feedme_db';

var dbConnection = null;

function connectToDb() {
    if (dbConnection) return Promise.resolve(dbConnection);

    return new Promise((resolve, reject) => {
        MongoClient.connect(url, (err, client) => {
            if (err) return reject('Cannot connect to Mongo');
            console.log("Connected successfully to server");
            dbConnection = client.db(dbName);
            resolve(dbConnection)
        });

    });
}


module.exports = {
    connectToDb
}
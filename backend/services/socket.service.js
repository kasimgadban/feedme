const socketService = require('./socket.service');


module.exports = io => {


    io.on('connection', socket => {
        console.log('a user connected');
        socket.on('disconnect', () => {
          console.log('user disconnected');
        });
      
        socket.on('joinRoom', roomId =>{
          socket.join(roomId);
        })


        socket.on('newBookMsg', obj =>{
            console.log('babamamadada',obj.msg);
            io.emit('gotBookNoti', obj);
            // update(obj)
                // .then(() => {
                //     io.to(event._id).emit('gotNewMsg', msg);
                // });

        });

        socket.on('newMsg',obj =>{
            console.log('toti',obj);
            io.emit('gotNewMsg',obj)
        })

    });

}

// function update(obj) {
//     // event._id = new ObjectId(event._id)
//     // event.cookId = new ObjectId(event.cookId)
//     // event.cityId = new ObjectId(event.cityId)
//     // delete event.dates.eventId
//     return mongoService.connectToDb()
//         .then(db => {
//             const collection = db.collection('event_db');
//             event.cityId = new ObjectId(event.cityId)
//             event.cookId = new ObjectId(event.cookId)
//             return collection.updateOne({ _id: event._id }, { $set: event }, {$set: msg})
//                 .then(result => {
//                     return result;
//                 })
//         })
// }
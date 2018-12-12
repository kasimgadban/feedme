const eventService = require('./event.service');


module.exports = io => {


    io.on('connection', socket => {
        console.log('a user connected');
        socket.on('disconnect', () => {
          console.log('user disconnected');
        });
      
        socket.on('joinRoom', roomId =>{
          socket.join(roomId);
        })


        socket.on('newChatMsg', msg => {
            console.log('babamamadada',msg);
            io.emit('gotNewChatMsg', msg);
            // eventService.update(event,{$push: {msgs: msg}})
            //     .then(() => {
            //         io.to(event._id).emit('gotNewChatMsg', msg);
            //     });

        });


    });

}
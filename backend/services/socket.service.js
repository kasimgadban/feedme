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


        socket.on('newBookMsg', obj =>{
            console.log('babamamadada',obj.msg,obj.currCookId);
            io.emit('gotBookNoti', obj);
            // eventService.update(event,{$push: {msgs: msg}})
            //     .then(() => {
            //         io.to(event._id).emit('gotBookNoti', msg);
            //     });

        });


    });

}
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const addcookRoutes = require('./routes/cookRoute')
const addeventRoutes = require('./routes/eventRoute')
const addcityRoutes = require('./routes/cityRoute')


const app = express()  

const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.static('public'));

app.use(cors({
  origin: ['http://localhost:8080'],
  credentials: true // enable set cookie
}));                        
app.use(bodyParser.json())
app.use(cookieParser());
app.use(session({
  secret: 'puki muki',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.get('/', (req, res) => {
  res.send('feedme db')
})


addcookRoutes(app)
addeventRoutes(app)
addcityRoutes(app)

// app.use(session({
//   secret: 'sxjbijxixszaixsax76x87a6sxbash',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: false }
// }))

app.post('/singup', (req, res) => {
  const nickname = req.body.nickname
  userService.addUser({ nickname })
    .then(user => res.json(user))
})

app.put('/login', (req, res) => {
  const nickname = req.body.nickname
  userService.checkLogin({ nickname })
    .then(user => {
      req.session.user = user
      res.json(user)
    })
})






io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chatmsg', function(msg){
    // historyMsgs.push(msg);
    console.log('message: ' , msg);
    io.emit('notification', msg);
    // setInterval(()=>{
    //   socket.emit('chat newMsg', {msg: 'THANKS I am a BOT', nickname: 'BOT'});
    // }, 1000)
  });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => console.log(`App listening on port ${PORT}`))

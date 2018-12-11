const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')


const addcookRoutes = require('./routes/cookRoute')
const addeventRoutes = require('./routes/eventRoute')
const addcityRoutes = require('./routes/cityRoute')


const app = express()  

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




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
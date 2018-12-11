const cookService = require('../services/cook.service')


function addCookRoutes(app){
    // LIST
    app.get('/cook', (req, res) => {
        //filter = req.query
        cookService.query()
            .then(cooks => res.json(cooks))
            
    })

    // SINGLE - GET Full details including reviews
    app.get('/cook/:id', (req, res) => {
        const cookId = req.params.id;
        cookService.getById(cookId)
            .then(cook => res.json(cook))
    })

    // DELETE
    app.delete('/cook/:id', (req, res) => {
        const cookId = req.params.id;
        cookService.remove(cookId)
            .then(() => res.end(`cook ${cookId} Deleted `))
    })
    //login
    app.post('/cook', (req, res) => {
        var user = req.body; 
        console.log('user route',user);
              
         return cookService.checkUser(user)
             .then(user => {
                 console.log('user 33',user)
                 
                 req.session.loggedinUser = user

                 const userInfo = {
                     fullName: user.fullName,
                     password: user.password
                 }
                 return res.json(userInfo);
             })
             .catch(err=> console.log(err))
             .catch(err => res.status(401).send(err))
     })

    // CREATE
    app.post('/cook', (req, res) => {
        const cook = req.body;
        cookService.add(cook)
            .then(cook => {
                res.json(cook)
            })
    })

    // UPDATE
    app.put('/cook/:id', (req, res) => {
        const cook = req.body;
        if(cook._id){
            cookService.update(cook)
            .then(cook => res.json(cook))
        }
        else
        cookService.add(cook)
            .then(cook => res.json(cook))
    })

}


module.exports = addCookRoutes;
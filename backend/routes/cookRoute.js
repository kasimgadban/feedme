const cookService = require('../services/cook.service')


function addCookRoutes(app){
    // LIST
    app.get('/api/cook', (req, res) => {
        //filter = req.query
        cookService.query()
            .then(cooks => res.json(cooks))
            
    })

    // SINGLE - GET Full details including reviews
    app.get('/api/cook/:id', (req, res) => {
        const cookId = req.params.id;
        cookService.getById(cookId)
            .then(cook => res.json(cook))
    })

    // DELETE
    app.delete('/api/cook/:id', (req, res) => {
        const cookId = req.params.id;
        cookService.remove(cookId)
            .then(() => res.end(`cook ${cookId} Deleted `))
    })
    //login
    app.post('/api/cook/login', (req, res) => {
        var user = req.body; 
         return cookService.checkUser(user)
             .then(user => {
                 req.session.loggedinUser = user
                 return res.json(user);
             })
             .catch(err=> console.log(err))
             .catch(err => res.status(401).send(err))
     })

     app.post('/api/cook/logout', (req, res) => {
       req.session.destroy()
       res.end()
    })
    // CREATE
    app.post('/api/cook/signup', (req, res) => {
        const cook = req.body;
        cookService.add(cook)
            .then(cook => {
                res.json(cook)
            })
    })

    // UPDATE
    app.put('/api/cook/:id', (req, res) => {
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
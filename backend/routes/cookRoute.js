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
        cookService.update(cook)
            .then(cook => res.json(cook))
    })

}


module.exports = addCookRoutes;
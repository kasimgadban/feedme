const cityService = require('../services/city.service')


function addcityRoutes(app) {
    // LIST
    app.get('/city', (req, res) => {
        //filter = req.query
        cityService.query()
            .then(cities => res.json(cities))

    })

    // SINGLE - GET Full details including reviews
    app.get('/city/:id', (req, res) => {
        const cityId = req.params.id;
        cityService.getById(cityId)
            .then(city => res.json(city))
    })

    // DELETE
    app.delete('/city/:id', (req, res) => {
        const cityId = req.params.id;
        cityService.remove(cityId)
            .then(() => res.end(`city ${cityId} Deleted `))
    })

    // CREATE
    app.post('/city', (req, res) => {
        const city = req.body;
        cityService.add(city)
            .then(city => {
                res.json(city)
            })
    })

    // UPDATE
    app.put('/city/:id', (req, res) => {
        const city = req.body;
        cityService.update(city)
            .then(city => res.json(city))
    })

}


module.exports = addcityRoutes;
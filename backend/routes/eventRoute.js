const eventService = require('../services/event.service')


function addeventRoutes(app) {
    // LIST
    app.get('/event', (req, res) => {
        const filter = req.query
        eventService.query(filter)
            .then(events => {
                res.json(events)})
    })

    // SINGLE - GET Full details including reviews
    app.get('/event/:id', (req, res) => {
        const eventId = req.params.id;
        eventService.getById(eventId)
            .then(event => res.json(event))
    })


    // DELETE
    app.delete('/event/:id', (req, res) => {
        const eventId = req.params.id;
        eventService.remove(eventId)
            .then(() => res.end(`event ${eventId} Deleted `))
    })

    // CREATE
    app.post('/event', (req, res) => {
        const event = req.body;
        eventService.add(event)
            .then(event => {
                res.json(event)
            })
    })
    app.post('/event/saveImage', (req,res) =>{
        // console.log('in routes,',req.body);
        
        const image = req.body
        eventService.saveImage(image).then(url => res.json(url))
    })

    // UPDATE
    app.put('/event/:id', (req, res) => {
        const event = req.body;
        eventService.update(event)
            .then(event => res.json(event))
    })
}


module.exports = addeventRoutes;
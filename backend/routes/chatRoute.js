const chatService = require('../services/chat.service')


function addchatRoutes(app) {
    // LIST
    app.get('/chat', (req, res) => {
        //filter = req.query
        chatService.query()
            .then(chats => res.json(chats))

    })

    // SINGLE - GET Full details including reviews
    app.get('/chat/:id', (req, res) => {
        const chatId = req.params.id;
        chatService.getById(chatId)
            .then(chat => res.json(chat))
    })

    // DELETE
    app.delete('/chat/:id', (req, res) => {
        const chatId = req.params.id;
        chatService.remove(chatId)
            .then(() => res.end(`chat ${chatId} Deleted `))
    })

    // CREATE
    app.post('/chat', (req, res) => {
        const chat = req.body;
        chatService.add(chat)
            .then(chat => {
                res.json(chat)
            })
    })

    // UPDATE
    app.put('/chat/:id', (req, res) => {
        const chat = req.body;
        chatService.update(chat)
            .then(chat => res.json(chat))
    })

}


module.exports = addchatRoutes;
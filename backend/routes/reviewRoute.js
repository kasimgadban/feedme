const cookService = require('../services/cook.service')

function addReviewRoutes(app){
   // CREATE
    app.post('/api/review', (req, res) => {
        const review = req.body;
        console.log('review BE',review);
        cookService.addReview(review)
            .then(() => {
                res.end()
            })
    })

   
}


module.exports = addReviewRoutes;
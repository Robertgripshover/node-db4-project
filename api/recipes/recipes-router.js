const router = require('express').Router()


const Recipe = require('./recipes-model')

router.get('/:recipe_id', (req, res, next) => {
    Recipe.getRecipeById(req.params.recipe_id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(next)
})



router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the recipes router',
        message: err.message, //<< you would not want this is a prod app
        stack: err.stack,
    })
}) //error handling middleware


module.exports = router
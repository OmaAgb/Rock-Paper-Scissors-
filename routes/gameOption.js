import express from 'express';
export const router = express.Router();



router.get('/', (req, res) => {
    res.render('gameOption', { name: req.app.locals.name })

})

router.post("/", (req, res) => {
    req.app.locals.name = req.body.name //string value 
    res.redirect('/option') // to render the next page
})




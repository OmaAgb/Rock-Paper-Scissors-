import express from 'express';
export const router = express.Router();
import Rules from '../src/rules.js';

let rules = null;
let result = "";

router.get('/', (req, res) => {
    res.render('gameScore', {
        name: req.app.locals.name,
        choice: req.app.locals.choice,
        result: result,
        computerChoice: rules.computerChoice
    })

})

router.post("/", (req, res) => {
    req.app.locals.choice = req.body.choice;
    rules = new Rules(req.app.locals.name, req.app.locals.choice);
    result = rules.results();
    res.redirect('/score');
})

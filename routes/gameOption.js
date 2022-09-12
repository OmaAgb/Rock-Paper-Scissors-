import express from 'express';
export const router = express.Router();
import Player from '../src/playerOne.js';


router.get('/', (req, res) => {
    res.render('gameOption')

})

router.post("/", (req, res) => {
 

})




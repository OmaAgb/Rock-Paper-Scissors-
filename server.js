import dotenv from "dotenv";
import express from "express";

import { router as start} from './routes/gameStart.js';
import { router as choice} from './routes/gameChoice.js';
// import { router as score} from './routes/gameScore.js';

dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
})
//curly braces will be replaced with env.test 

const app = express();
app.set("view engine", "ejs"); 
// setting page ejs for views

app.use(express.urlencoded({ extended: true }));
app.use('/', start);
app.use('/choice', choice); 
// app.use('/score', score);


const server = app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT}`));


export default server;




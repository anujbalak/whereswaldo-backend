import express from 'express'
import 'dotenv/config'
import indexRouter from './router/indexRouter.js';
import startRouter from './router/startRouter.js';
import gameRouter from './router/gameRouter.js';

const port=  process.env.PORT

const app = express();


app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', indexRouter)
app.use('/start', startRouter)
app.use('/game', gameRouter)



app.listen(port, () => console.log('Running the server at', port))
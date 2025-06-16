import express from 'express'
import 'dotenv/config'
import indexRouter from './router/indexRouter.js';
import startRouter from './router/startRouter.js';
import gameRouter from './router/gameRouter.js';
import playerRouter from './router/playerRouter.js';

const port=  process.env.PORT

const app = express();


app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
})

app.use('/', indexRouter)
app.use('/start', startRouter)
app.use('/game', gameRouter)
app.use('/players', playerRouter)


app.listen(port, () => console.log('Running the server at', port))
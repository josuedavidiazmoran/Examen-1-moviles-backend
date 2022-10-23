import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import editorial from './routes/editorial.routes.js'
import libro from './routes/libro.routes.js'

const app = express();
// var cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Bienvenido a Node JS..!');
});

app.use('/api/editorial', editorial);
app.use('/api/libro', libro);

export default app;
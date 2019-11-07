import express, { json } from 'express';
import morgan from 'morgan';

const port = 4500;
const app = express();

app.use(morgan('combined'));
app.use(json());

app.get('/', (req, res) => res.json({ status: true, message: 'Hello world'}));

app.listen(port, () => console.log(`api server listening on port ${port}`));
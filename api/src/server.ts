import express, { json } from 'express';

const port = 4500;
const app = express();
app.use(json());

app.get('/', (req, res) => res.json({ status: true, message: 'Hello world'}));

app.listen(port, () => console.log(`api server listening on port ${port}`));
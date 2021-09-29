import express from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('hello from my app');
});

app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});
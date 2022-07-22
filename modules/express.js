const express = require('express');
const UserModel = require('../src/models/user.model');
const app = express();

const port = 8080;

app.get('/home', (req, res) => {
    res.contentType('application/html');
    res.status(200).send('<h1>Hello World</h1>');
});
app.get('/users', (req, res) => {
    res.contentType('application/json');
    res.status(200).send(JSON.stringify([{name: 'Felipe'}, {name: 'João'}]));
});
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}/home`);
});

app.post('/users', async (req, res) => {
    const user = await new UserModel(req.body);
    res.status(201).json(user);
});

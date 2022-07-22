const express = require('express');
const UserModel = require('../src/models/user.model');
const app = express();

const port = 8080;
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/views/users', async (req, res) => {
    const users = await UserModel.find({});
    res.render('index', { users });
});

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    console.log(`Content-Type: ${req.headers['Content-Type']}`);
    console.log(`Content-Length: ${req.headers['Content-Length']}`)
    console.log(`Date: ${new Date()}`);

    next();
})

/*app.get('/home', (req, res) => {
    res.contentType('application/html');
    res.status(200).send('<h1>Hello World</h1>');
});
app.get('/users', (req, res) => {
    res.contentType('application/json');
    res.status(200).send(JSON.stringify([{name: 'Felipe'}, {name: 'João'}]));
});*/

app.get('/users', (req, res) => {
    try{
        UserModel.find({}, (err, users) => {
            if(err){
                res.status(500).send(err);
            }else{
                res.status(200).send(users);
            }
        });
    }
    catch(err){
        res.status(500).send(err);
    }
});

app.get('/users/:id', async (req, res) => {
    try{
        const user = await UserModel.findById(req.params.id);
        if(!user){
            res.status(404).send('User not found');
        }else{
            res.status(200).send(user);
        }
    }catch(err){
        res.status(500).send(err.message);
    }
}); // async/await


app.post('/users', async (req, res) => {
    try{
        const user = new UserModel(req.body);
        await user.save();
        res.status(201).send(user);
    }catch(err){
        res.status(500).send(err);
    }
});

app.put('/users/:id', async (req, res) => {
    try{
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!user){
            res.status(404).send('User not found');
        }else{
            res.status(200).send(user);
        
        }
    }catch(err){
        res.status(500).send(err);
    }
});

/*app.patch('users/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true});
    res.status(200).send(user);
    }catch(err){
        res.status(500).send(err.message);
    }

});*/

app.delete('/users/:id', async (req, res) => {
    try{
        const user = await UserModel.findByIdAndDelete(req.params.id);
        if(!user){
            res.status(404).send('User not found');
        }else{
            res.status(200).send(user);
        }
    }catch(err){
        res.status(500).send(err);
    }
});

app.listen(port, () => {
    console.log(`Server is running`);
});
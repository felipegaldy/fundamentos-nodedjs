//const {Person} = require('./person');

//const person = new Person("Felipe");

const dotenv = require('dotenv');
dotenv.config();
//require('./modules/fs')

//require('./modules/http');



//require('./modules/path')

const connectToDataBase = require('./src/database/connect');

connectToDataBase();

require('./modules/express');
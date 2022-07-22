const mongoose = require("mongoose");

const connectToDataBase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodejscurso.vqqed.mongodb.net/database?retryWrites=true&w=majority`, 
    (err) => {
        if (err) {
            return    console.log(err);
        }
        console.log("Connected to MongoDB");
    });
}

module.exports = connectToDataBase;
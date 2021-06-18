const mongoose = require('mongoose');
const URI = "mongodb+srv://dbUser:testDb123@cluster0.taxq6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connectDb = async() => {
    await mongoose.connect(URI,{ useUnifiedTopology: true, useNewUrlParser: true});
    console.log('Your database has been connected');
};

module.exports = connectDb;
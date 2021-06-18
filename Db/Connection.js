const mongoose = require('mongoose');
const URI = "copy uri";
const connectDb = async() => {
    await mongoose.connect(URI,{ useUnifiedTopology: true, useNewUrlParser: true});
    console.log('Your database has been connected');
};

module.exports = connectDb;
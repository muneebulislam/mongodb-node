const mongoose = require('mongoose');
require('dotenv/config');
const connectDb = async() => {
    await mongoose.connect(process.env.DB_CONNECTION_STRING,{ useUnifiedTopology: true, useNewUrlParser: true});
    console.log('Your database has been connected');
};

module.exports = connectDb;
const express = require('express');
const connectDb = require('./Db/Connection');
connectDb();
const app = express();
app.use(express.json({extended: false}));
const user = require('./API/User');

app.use('/api/userModel', user )

const Port = process.env.PORT ||3000;

app.listen(Port, () => {
    console.log('listening on port ' + Port);
});

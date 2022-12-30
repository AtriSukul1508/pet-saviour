require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || process.env.LOCAL_PORT;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = require('./routes/router');
require('./db/connection');
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cookieParser());
app.use(router);



app.listen(PORT,()=>{
    console.log(`Listening to the server at ${PORT}`);
})
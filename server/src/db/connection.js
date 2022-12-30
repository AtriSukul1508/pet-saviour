const mongoose = require('mongoose');
const MONGO_PORT = process.env.MONGO_PORT;
const DB_NAME = process.env.DB_NAME;
mongoose.connect(`mongodb://localhost:${MONGO_PORT}/${DB_NAME}`, {
    useNewUrlParser: true,
}).then(() => {
    console.log('Connection to the database is successful');
}).catch((err) => {
    console.log(`Error while connecting to the database - ${err}`);
})
const db = require('mongoose');


function connectToDb() {
    db.connect(process.env.DB_CONNECT)
        .then(() => {
            console.log('Connected to database');
        })
        .catch((err) => {
            console.log('Error connecting to database', err);
        });
}

module.exports = connectToDb;
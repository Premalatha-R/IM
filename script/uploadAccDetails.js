var csvtojson = require('csvtojson');
var mongodb = require('../daos/mongoDbUtil');

const fileName = './script/data-sheet.csv';

//connect to mongodb to get db handle
mongodb.connect(function (err, client) {
    console.log("Connection with mongodb successful");
    let db = client.db('im');
    var usersCollection = db.collection('useraccounts');

    csvtojson().fromFile(fileName).then(source => {
       
        //inserting into the table 'useraccounts'
        usersCollection.insertMany(source, (function (err, result) {
            if (err) {
                console.log(err);
            }
            if (result) {
                console.log('Successfully uploaded CSV into database');
            }
        }));
    });
});


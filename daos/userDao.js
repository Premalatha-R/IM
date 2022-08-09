var mongodb = require('./mongoDbUtil');

module.exports.getUser = function (id, callback) {
    //connect to mongodb to get db handle
    mongodb.connect(function (err, client) {
        console.log("Connection with mongodb successful");
        let db = client.db('im');
        var usersCollection = db.collection('users');

        //get an user record and pass the result to callback
        usersCollection.find({userId : id}).toArray(function(err, result) {
            callback(err, result);
        });
    });  
};

module.exports.getAllUsers = function (callback) {
    //connect to mongodb to get db handle
    mongodb.connect(function (err, client) {
        console.log("Connection with mongodb successful");
        let db = client.db('im');
        var usersCollection = db.collection('users');

        //get all users record and pass the result to callback
        usersCollection.find({}).toArray(function(err, result) {
            callback(err, result);
        });
    });  
};

module.exports.addUser = function (user, callback) {
    //connect to mongodb to get db handle
    mongodb.connect(function (err, client) {
        console.log("Connection with mongodb successful");
        let db = client.db('im');
        var usersCollection = db.collection('users');

        //add an users record and pass the result to callback
        usersCollection.insertOne(user, function(err, result) {
            callback(err, result);
        });
    });  
};

module.exports.updateUser = function (id, user, callback) {
    //connect to mongodb to get db handle
    mongodb.connect(function (err, client) {
        console.log("Connection with mongodb successful");
        let db = client.db('im');
        var usersCollection = db.collection('users');

        //update an user record and pass the result to callback
        usersCollection.updateOne({userId : id}, {$set: user}, function(err, result) {
            callback(err, result);
        });
    });  
};

module.exports.deleteUser = function (id, callback) {
    //connect to mongodb to get db handle
    mongodb.connect(function (err, client) {
        console.log("Connection with mongodb successful");
        let db = client.db('im');
        var usersCollection = db.collection('users');

        //delete an user record and pass the result to callback
        usersCollection.deleteOne({userId : id}, function(err, result) {
            callback(err, result);
        });
    });  
};
var mongodb = require('./mongoDbUtil');

module.exports.getAccount = function (id, callback) {
    //connect to mongodb to get db handle
    mongodb.connect(function (err, client) {
        console.log("Connection with mongodb successful");
        let db = client.db('im');
        var accountsCollection = db.collection('accounts');

        //get an account record and pass the result to callback
        accountsCollection.find({accountId : id}).toArray(function(err, result) {
            callback(err, result);
        });
    });  
};

module.exports.getAllAccounts = function (callback) {
    //connect to mongodb to get db handle
    mongodb.connect(function (err, client) {
        console.log("Connection with mongodb successful");
        let db = client.db('im');
        var accountsCollection = db.collection('accounts');

        //get all accounts record and pass the result to callback
        accountsCollection.find({}).toArray(function(err, result) {
            callback(err, result);
        });
    });  
};

module.exports.addAccount = function (account, callback) {
    //connect to mongodb to get db handle
    mongodb.connect(function (err, client) {
        console.log("Connection with mongodb successful");
        let db = client.db('im');
        var accountsCollection = db.collection('accounts');

        //add an accounts record and pass the result to callback
        accountsCollection.insertOne(account, function(err, result) {
            callback(err, result);
        });
    });  
};

module.exports.updateAccount = function (id, account, callback) {
    //connect to mongodb to get db handle
    mongodb.connect(function (err, client) {
        console.log("Connection with mongodb successful");
        let db = client.db('im');
        var accountsCollection = db.collection('accounts');

        //update an account record and pass the result to callback
        accountsCollection.updateOne({accountId : id}, {$set: account}, function(err, result) {
            callback(err, result);
        });
    });  
};

module.exports.deleteAccount = function (id, callback) {
    //connect to mongodb to get db handle
    mongodb.connect(function (err, client) {
        console.log("Connection with mongodb successful");
        let db = client.db('im');
        var accountsCollection = db.collection('accounts');

        //delete an account record and pass the result to callback
        accountsCollection.delete({accountId : id}, function(err, result) {
            callback(err, result);
        });
    });  
};
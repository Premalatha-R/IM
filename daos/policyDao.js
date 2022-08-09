var mongodb = require('./mongoDbUtil');

module.exports.getPolicy = function (id, callback) {
    //connect to mongodb to get db handle
    mongodb.connect(function (err, client) {
        console.log("Connection with mongodb successful");
        let db = client.db('im');
        var policyCollection = db.collection('policy');

        //get a policy record and pass the result to callback
        policyCollection.find({policyId : id}).toArray(function(err, result) {
            callback(err, result);
        });
    });  
};

module.exports.getAllPolicies = function (callback) {
    //connect to mongodb to get db handle
    mongodb.connect(function (err, client) {
        console.log("Connection with mongodb successful");
        let db = client.db('im');
        var policyCollection = db.collection('policy');

        //get all policies record and pass the result to callback
        policyCollection.find({}).toArray(function(err, result) {
            callback(err, result);
        });
    });  
};

module.exports.addPolicy = function (policy, callback) {
    //connect to mongodb to get db handle
    mongodb.connect(function (err, client) {
        console.log("Connection with mongodb successful");
        let db = client.db('im');
        var policyCollection = db.collection('policy');

        //add a policy record and pass the result to callback
        policyCollection.insertOne(policy, function(err, result) {
            callback(err, result);
        });
    });  
};

module.exports.updatePolicy = function (id, policy, callback) {
    //connect to mongodb to get db handle
    mongodb.connect(function (err, client) {
        console.log("Connection with mongodb successful");
        let db = client.db('im');
        var policyCollection = db.collection('policy');

        //update a policy record and pass the result to callback
        policyCollection.updateOne({policyId : id}, {$set: policy}, function(err, result) {
            callback(err, result);
        });
    });  
};

module.exports.deletePolicy = function (id, callback) {
    //connect to mongodb to get db handle
    mongodb.connect(function (err, client) {
        console.log("Connection with mongodb successful");
        let db = client.db('im');
        var policyCollection = db.collection('policy');

        //delete a policy record and pass the result to callback
        policyCollection.delete({policyId : id}, function(err, result) {
            callback(err, result);
        });
    });  
};
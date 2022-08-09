var policyDao = require('../daos/policyDao');

module.exports.get = function(id, callback) {
     policyDao.getPolicy(id, callback);
};

module.exports.getAll = function(callback) {
     policyDao.getAllPolicies(callback);
};

module.exports.add = function(data, callback) {
     policyDao.addPolicy(data, callback);
};

module.exports.update = function(id, data, callback) {
     policyDao.updatePolicy(id, data, callback);
};

module.exports.delete = function(id, callback) {
     policyDao.deletePolicy(id, callback);
};

var userDao = require('../daos/userDao');

module.exports.get = function(id, callback) {
     userDao.getUser(id, callback);
};

module.exports.getAll = function(callback) {
     userDao.getAllUsers(callback);
};

module.exports.add = function(data, callback) {
     userDao.addUser(data, callback);
};

module.exports.update = function(id, data, callback) {
     userDao.updateUser(id, data, callback);
};

module.exports.delete = function(id, callback) {
     userDao.deleteUser(id, callback);
};

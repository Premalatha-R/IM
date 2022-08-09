var accountDao = require('../daos/accountDao');

module.exports.get = function(id, callback) {
     accountDao.getAccount(id, callback);
};

module.exports.getAll = function(callback) {
     accountDao.getAllAccounts(callback);
};

module.exports.add = function(data, callback) {
     accountDao.addAccount(data, callback);
};

module.exports.update = function(id, data, callback) {
     accountDao.updateAccount(id, data, callback);
};

module.exports.delete = function(id, callback) {
     accountDao.deleteAccount(id, callback);
};

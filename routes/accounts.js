var express = require('express');
var router = express.Router();

var accountService = require('../services/accountService');

/* GET an account details */
router.get('/:id', function (req, res, next) {
  accountService.get(JSON.parse(req.params.id), function(err,account) {
    if (err) {
      res.send(err);
    } else {
      res.send(account);
    }
  });
});

/* GET all account details */
router.get('/', function (req, res, next) {
  accountService.getAll(function(err,accounts) {
    if (err) {
      res.send(err);
    } else {
      res.send(accounts);
    }
  });
});

/* Insert an account details */
router.post('/', function (req, res, next) {
  accountService.add(req.body, function(err,account) {
    if (err) {
      res.send(err);
    } else {
      res.send(account);
    }
  });
});

/* Update an account details */
router.put('/:id', function (req, res, next) {
  accountService.update(JSON.parse(req.params.id), req.body, function(err,account) {
    if (err) {
      res.send(err);
    } else {
      res.send(account);
    }
  });
});

/* Delete an account details */
router.delete('/:id', function (req, res, next) {
  accountService.delete(JSON.parse(req.params.id), function(err,account) {
    if (err) {
      res.send(err);
    } else {
      res.send(account);
    }
  });
});


module.exports = router;
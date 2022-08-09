var express = require('express');
var router = express.Router();

var userService = require('../services/userService');

/* GET an user details */
router.get('/:id', function (req, res, next) {
  userService.get(JSON.parse(req.params.id), function(err,user) {
    if (err) {
      res.send(err);
    } else {
      res.send(user);
    }
  });
});

/* GET all user details */
router.get('/', function (req, res, next) {
  userService.getAll(function(err,users) {
    if (err) {
      res.send(err);
    } else {
      res.send(users);
    }
  });
});

/* Insert an user details */
router.post('/', function (req, res, next) {
  userService.add(req.body, function(err,user) {
    if (err) {
      res.send(err);
    } else {
      res.send(user);
    }
  });
});

/* Update an user details */
router.put('/:id', function (req, res, next) {
  userService.update(JSON.parse(req.params.id), req.body, function(err,user) {
    if (err) {
      res.send(err);
    } else {
      res.send(user);
    }
  });
});

/* Delete an user details */
router.delete('/:id', function (req, res, next) {
  userService.delete(JSON.parse(req.params.id), function(err,user) {
    if (err) {
      res.send(err);
    } else {
      res.send(user);
    }
  });
});


module.exports = router;
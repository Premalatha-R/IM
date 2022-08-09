var express = require('express');
var router = express.Router();

var policyService = require('../services/policyService');

/* GET a policy details */
router.get('/:id', function (req, res, next) {
  policyService.get(JSON.parse(req.params.id), function(err,policy) {
    if (err) {
      res.send(err);
    } else {
      res.send(policy);
    }
  });
});

/* GET all policies details */
router.get('/', function (req, res, next) {
  policyService.getAll(function(err,policies) {
    if (err) {
      res.send(err);
    } else {
      res.send(policies);
    }
  });
});

/* Insert a policy details */
router.post('/', function (req, res, next) {
  policyService.add(req.body, function(err,policy) {
    if (err) {
      res.send(err);
    } else {
      res.send(policy);
    }
  });
});

/* Update a policy details */
router.put('/:id', function (req, res, next) {
  policyService.update(JSON.parse(req.params.id), req.body, function(err,policy) {
    if (err) {
      res.send(err);
    } else {
      res.send(policy);
    }
  });
});

/* Delete a policy details */
router.delete('/:id', function (req, res, next) {
  policyService.delete(JSON.parse(req.params.id), function(err,policy) {
    if (err) {
      res.send(err);
    } else {
      res.send(policy);
    }
  });
});


module.exports = router;
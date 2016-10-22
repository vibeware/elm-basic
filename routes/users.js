var express = require('express');
var router = express.Router();

// Mock Users for GET
const USERS = [
    { name: "carl",
      email: "carl@test.com",
      password: "123"
    }, 
    { name: "ron",
      email: "ron@test.com",
      password: "password"
    }
  ]

// GET all users
// echo USERS constant
router.get('/', function(req, res, next) {
  console.log("made it to GET")
  res.json({users: USERS})
});

// POST register a user
// echo form input
router.post('/register', function(req, res, next) {
  console.log(req.body)
  res.status(201).json({ message: "successfully created user." })
})

// POST login user
// echo form input
router.post('/auth', function(req, res, next) {
  console.log(req.body)
  res.json({ message: "successfully logged in." })
})

module.exports = router;

const express = require('express');
const exampleController = require('../controllers/exampleController');

const router = express.Router();

const exampleMiddleware = (req, res, next) => {
  console.log("Middleware!");
  next();
  //Do something before redirecting
};

//router.get('/', exampleMiddleware, exampleController.example_main_get);
router.get('/', exampleMiddleware, exampleController.example_get);

module.exports = router;
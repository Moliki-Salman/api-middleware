const express = require("express");
const router = express.Router();
const { home ,about, login, details} = require('../controllers/users')
const { signup } =require('../controllers/signup')
const{newLogin} =require('../controllers/login')
const{ mid } = require('../middleware/mwd')
const{ verifyAuth } =require('../middleware/auth')

/*
middleware can be used for authentication, middleware can run before the controller runs that is why we called it
before the 'about'. this way during authentication, all the conditions of a middleware must be fulfilled before the
about can run
*/
router.get('/newlogin', newLogin)
router.get("/", home);
router.post("/signup",  signup);
router.get("/login", mid, login);

router.get('/details', verifyAuth, details)

module.exports = { router };

/*Practicing git forking*/
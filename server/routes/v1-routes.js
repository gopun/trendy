const express = require('express');
const router = express.Router();

const user = require("../controller/v1/user");
const middleware = require("../middleware/middleware");

// routes
// router.post('/user/authenticate', user.authenticate);
// router.post('/user/register', user.register);
router.get('/user', middleware.isAuthorized, user.getAll);
// router.get('/user/current', user.getCurrent);
// router.get('/user/:id', user.getById);
// router.put('/user/:id', user.update);
// router.delete('/user/:id', user._delete);

module.exports = router;

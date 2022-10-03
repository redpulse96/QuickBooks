const { Router } = require('express');
const router = Router();

const usersRouter = require('./users');
const facebookRouter = require('./facebook');

router.use('/user', usersRouter);
router.use('/facebook', facebookRouter);

module.exports = router;

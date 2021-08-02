const router = require('express').Router()

const apiRoutes =  require('./api');


router.use('/', homeRoutes);
router.use('/', apiRoutes);

module.exports = router;
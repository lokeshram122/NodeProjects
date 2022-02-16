var app = require('express')
var router = app.Router();
var modules = require('./modules')

router.post('/', modules.login);

router.post('/about', modules.about);

router.post('/register',modules.register)

module.exports = router;
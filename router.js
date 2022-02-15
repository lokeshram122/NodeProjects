var app = require('express')
var router = app.Router();

router.get('/', function(req, res) {
    res.send('Home Page');
});

router.post('/about', function(req, res) {
    res.send('Welcome '+req.body?.UserName);
});

module.exports = router;
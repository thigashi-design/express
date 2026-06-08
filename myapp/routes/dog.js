var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res) {

    request('https://dog.ceo/api/breeds/image/random', function(error, response, body) {
        
        if (!error && response.statusCode == 200) {
            // ここで確実に body から data を作っています！
            var data = JSON.parse(body);
            res.json(data);
        } else {
            res.status(500).send('APIからのデータ取得に失敗しました');
        }
        
    });

});

module.exports = router;
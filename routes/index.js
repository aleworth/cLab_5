var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');

router.get('/', function(req, res, next) {
   res.sendFile('translator.html', { root:  'public' });
});

router.get('/translate',function(req,res) {
	var trans = "https://translate.yandex.net/api/v1.5/tr.json/translate?text=";
	trans+=req.query.q;
	trans += "&lang=en-es&key=trnsl.1.1.20171101T222448Z.35bfa30089a1569b.91ec435cfeadba5abd0450ae01b5e6f4fc32d5b1";
        console.log(req.query.q);
	console.log(trans);
	console.log("in translate");
	request(trans).pipe(res);
});



module.exports = router;

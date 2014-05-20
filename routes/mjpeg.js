var express = require('express');
var router = express.Router();
var MjpegProxy = require('mjpeg-proxy').MjpegProxy;

router.get('/index1.jpg',
    new MjpegProxy('http://72.214.52.227:49152/mjpg/video.mjpg').proxyRequest);

router.get('/index2.jpg',
    new MjpegProxy('http://10.208.193.232:8000/').proxyRequest);

module.exports = router;

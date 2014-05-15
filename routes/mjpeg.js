var express = require('express');
var router = express.Router();
var MjpegProxy = require('mjpeg-proxy').MjpegProxy;

router.get('/index1.jpg',
    new MjpegProxy('http://72.214.52.227:49152/mjpg/video.mjpg').proxyRequest);

module.exports = router;

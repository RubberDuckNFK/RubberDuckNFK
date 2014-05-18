var twilio = require('twilio'),
    express = require('express'),
    router = express.Router();

router.post('/respondToVoiceCall', function(req, res) {
    //Validate that this request really came from Twilio...
    if (twilio.validateExpressRequest(req, '7580cfb76678516499711f7ceb9aaf7a')) {
        var twiml = new twilio.TwimlResponse();

        twiml.say('Hi!  You\'ve reached the Rubber Duck! Now, here\'s Sky Zentz and Friends, siging ' +
            'my song!')
            .play('http://rubberducknfk.com/media/RubberDucky.mp3');

        res.type('text/xml');
        res.send(twiml.toString());
    }
    else {
        res.send('you are not twilio.  Buzz off.');
    }});

module.exports = router;
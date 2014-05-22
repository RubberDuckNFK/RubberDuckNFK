var twilio = require('twilio'),
    express = require('express'),
    router = express.Router(),
    FB = require('fb');

router.post('/respondToVoiceCall', function(req, res) {
    //Validate that this request really came from Twilio...
    if (twilio.validateExpressRequest(req, '7580cfb76678516499711f7ceb9aaf7a')) {
        var twiml = new twilio.TwimlResponse();

        twiml.say('Hi!  You\'ve reached the Rubber Duck! Now, here\'s Sky Zentz and Friends, siging ' +
            'my song!', {
                voice:'woman'
            })
            .play('http://rubberducknfk.com/media/RubberDucky.mp3');

        res.type('text/xml');
        res.send(twiml.toString());
    }
    else {
        res.send('you are not twilio.  Buzz off.');
    }});

router.post('/respondToSms', function(req, res) {
    //Validate that this request really came from Twilio...
    if (twilio.validateExpressRequest(req, '7580cfb76678516499711f7ceb9aaf7a')) {


    FB.setAccessToken('CAAG1dr42JNwBAGVmjCJblVgZCQVRDvM8zBcTTOSoLfDno5cD1pPQxQbZBsZAqnuGaCKr0F31QW1SXlELetxFEDu9Ch0kCj6OrpB9bHrTIX0LZBUSOLpu61o7OFqaV6bw2mmAZBMhyJDwp4sNbVaczOZA0ZCg1LrqaqhZC6mWSRdLo4YYGWrtjhKD');

    FB.api(
            "/1414766195467290/photos",
            "POST",
            {

                "url": "http://rubberducknfk.com/images/front.jpg",
                "place" : "8070729884",
                "message" : "I just took someone's picture! They texted '" + req.body + "' to me at (920) 75DUCKY !  #chryslerquack "
            },
            function (response) {
                    var twiml = new twilio.TwimlResponse();

                    twiml.sms('Thanks for texting the Rubber Duck! I just posted a picture from the webcam! Tag yourself at ' +
                        'https://www.facebook.com/photo.php?fbid=' + response.id);

                    res.type('text/xml');
                    res.send(twiml.toString());
            });

    }
    else {
        res.send('you are not twilio.  Buzz off.');
    }
});

module.exports = router;
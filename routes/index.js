var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/gallery', function(req, res, next) {
  res.render('gallery');
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.post('/sendMail', (req, res) => {
  var transport = nodemailer.createTransport({
    service : 'gmail', 
    auth  : {
      user : 'ratedrcreater1122@gmail.com',
      pass : 'aabbAABB!*'
    }
  });

  var mailText = `
Hello ${req.body.nameOfPerson}! Thank You for booking a ticket and watch a music consert.\n
The consert is on DD-MM-YYY at HH:MM:SS. Have a nice Time!

Please do not send a reply to this mail as this is auto generated
`

  var mailOptions = {
    from : 'ratedrcreater1122@gmail.com',
    to : req.body.personEmail,
    subject : 'Rated R Music Consert Bookings',
    text : mailText
  }

  transport.sendMail(mailOptions, (err, info) => {
    if(err) {
      throw err;
    }
    else {
      res.render('success');
    }
    console.log(`Mail Sent : ${info}`);
  })
});

router.get('/sendMail', (req, res) => {
  res.render('success');
})

module.exports = router;
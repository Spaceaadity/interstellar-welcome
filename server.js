var express = require('express')
	, app = express()
	, port = process.env.PORT || 3000
	, nodemailer = require('nodemailer')
	, smtpTransport = require('nodemailer-smtp-transport');
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.get('/', function(request, response){
	response.render('index');
});
app.post('/contact', function(request, response){
	// console.log(request.body);
	var name = request.body.name;
	var email = request.body.email;
	var message = request.body.message;

	var mailOpts,
		transporter;

	// transporter = nodemailer.createTransport(smtpTransport({
	// 	service: 'gmail',
	// 	auth: {
	// 		user: '',
	// 		pass: ''
	// 	}
	// }));
	transporter = nodemailer.createTransport(smtpTransport({
		service: 'ses',
		// host: "email-smtp.us-east-1.amazonaws.com",
		port: 465,
		// secure: true,
		auth: {
			user: 'AKIAISKNG3VZXGJPGDQQ',
			pass: 'Au+TiZ1fG2Lhems8KlWKjXOqsXUc3CGuoG4d1U+/aaGv'
		}
	}));

	mailOpts = {
		from: email,
		to: 'aadi.nickels@gmail.com',
		subject: name,
		text: message,
	};

	transporter.sendMail(mailOpts, function(error, response){
		// console.log(mailOpts);
		if(error){
			// console.log(error);
			// return false;
			response.end('error');
		} else {
			// console.log(success);
			// return true;
			response.end('success');
		}
	});

})
app.listen(port, function(){
	console.log("Channel "+port+" open for communication Captain.");
});
// var Twitter = require('twitter');
// var tweet = new Twitter({
//   consumer_key: '',
//   consumer_secret: '',
//   access_token_key: '',
//   access_token_secret: ''
// });
// tweet.get('statuses/user_timeline', {screen_name: '@spaceaadity', count: 1}, function(error, tweets, response) {
// 	if(!error){
// 		 console.log(tweets);
// 	//not working - how do I get my most recent tweet's id to request the embeded format
// 		// var twit = JSON.parse(tweets[0]);
// 		// var current = twit.id;
// 		// console.log(current);
// 		// tweet.get('statuses/oembed', {id: 692789941290414100}, function(response){
// 		// 	console.log(response);
// 		// });
// 	};
// });
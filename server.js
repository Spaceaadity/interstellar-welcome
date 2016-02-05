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
	var name = request.body.name
	, email = request.body.email
	, message = request.body.message;
//couldn't figure out how to get AWS to let me send an email to me from another person who's address I have obviously not approved on my account - I'm sure there is something that will allow me to utilize this correctly but for now I am using this work around and it suits me just fine
	var mailOpts = {
		from: 'aadi.nickels@gmail.com',
		to: 'aadi.nickels@gmail.com',
		subject: name+"<"+email+">",
		text: message,
	};
	var transporter = nodemailer.createTransport(smtpTransport({
		host: "email-smtp.us-west-2.amazonaws.com",
		port: 465,
		secure: true,
		auth: {
			user: 'AKIAISKNG3VZXGJPGDQQ',
			pass: 'Au+TiZ1fG2Lhems8KlWKjXOqsXUc3CGuoG4d1U+/aaGv'
		}
	}));

	transporter.sendMail(mailOpts, function(error, stat){
		// console.log('in transporter');
		if(error){
			// console.log(error);
			response.send(false);
		} else {
			// console.log(stat.response);
			response.send(true);
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
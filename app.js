var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var Twitter = require('twitter');
var tweet = new Twitter({
  consumer_key: 'qxSlECFZlWgOibzyrHuKlCyAa',
  consumer_secret: 'fiHsc3CJlm7pdmJWxBkjM9AWMTiuvnwvLlwuOBZyhM07vF88Kp',
  access_token_key: '1321772126-6gV81BPj5pV94vkjxVx79y43hemVcnKSjDYPCUs',
  access_token_secret: 'PDduBy4IC6vuxCjF23YenUE0HaZwROixqs9wTcm6oy095'
});
tweet.get('statuses/user_timeline', {screen_name: '@spaceaadity', count: 1}, function(error, tweets, response) {
	if(!error){
		 console.log(tweets);
	//not working - how do I get my most recent tweet's id to request the embeded format
		// var twit = JSON.parse(tweets[0]);
		// var current = twit.id;
		// console.log(current);
		// tweet.get('statuses/oembed', {id: 692789941290414100}, function(response){
		// 	console.log(response);
		// });
	};
});
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.get('/', function(request, response){
	response.render('index');
});
app.listen(8000, function(){
	console.log("Channel 8000 open for communication Captain.");
});
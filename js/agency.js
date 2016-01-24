/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
 $(document).ready(function() {
 	//https://api.twitter.com/1/statuses/user_timeline/chriscoyier.json?count=1&include_rts=1&callback=?
 	$.get("https://api.twitter.com/1.1/statuses/user_timeline/spaceaadity.json?count=1&trim_user=true&exclude_replies=true"), function(stuff){
 		var data="";
 		data += stuff.id_str;
 		console.log(data);
 	}

 });

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
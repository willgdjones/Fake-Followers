if (typeof jQuery === 'undefined') {
  alert("Sad face :(")
} else {

	// Declare icon
	var Ajaxload = chrome.extension.getURL("16x16.png");

	// Create loading screen with our icon as a new list element with .extra class in the .stats div when the page is loading
	// Uses inline CSS to fit the design of twitter
	$('.stats').append('<li class="extra"><a class="js-nav" href="#" ><img src="' + Ajaxload + '""></a></li>');


	// Run main code when twitter page is ready
  jQuery(document).ready(function($){

  	//Get twitter username from URL
    var username = window.location.pathname.replace('/','');

    // Send HTTP get request to Twitter Audit with this username
    $.get("http://www.twitteraudit.com/"+username, function(data) {

    	// Find Twitter Audit score percentage from within the retrieved data using jQuery
      var percentage = $(data).find('.percentage').html();

      // If a Twitter Audit hasn't been made yet, replace loading screen with a sad face
     	if (!percentage) {
      	$('.stats .extra').html('<a class="js-nav" href="http://www.twitteraudit.com/'+username+'"><strong>' + ':(' + '</strong> Real</a>')
      } else {
      
	      // Otherwise replace loading screen with Twitter Audit percentage
	      $('.stats .extra').html('<a class="js-nav" href="http://www.twitteraudit.com/'+username+'"><strong>' + percentage + '</strong> Real</a>')
	    }

    });

  })

}
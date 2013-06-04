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

    	// Find Twitter Audit score percentage (string) from within the retrieved data using jQuery
      var percentage = $(data).find('.percentage').html();

      // If a Twitter Audit hasn't been made yet, replace loading screen with a sad face
     	if (!percentage) {
      	$('.stats .extra').html('<a class="js-nav" href="http://www.twitteraudit.com/'+username+'"><strong>' + ':(' + '</strong></a>')
      } else {
      
	      // Otherwise, find out fake percentage
        var fakePercentage = 100 - parseInt(percentage);
        var fakePercentageString = fakePercentage.toString() + '%'

        // and replace loading screen with Twitter Audit fake percentage

        // If the fake percentage is more than or equal to 50%, display text in red.
        if (fakePercentage >= 50) {
          $('.stats .extra').html('<a class="js-nav" href="http://www.twitteraudit.com/'+username+'"><strong style="color:red">' + fakePercentageString + '</strong> Fake</a>')  
        } else {

          // Otherwise, display normally.
          $('.stats .extra').html('<a class="js-nav" href="http://www.twitteraudit.com/'+username+'"><strong>' + fakePercentageString + '</strong> Fake</a>')
        }
        
	    }

    });

  })

}
if (typeof jQuery === 'undefined') {
  alert("Sad face :(")
} else {

	// Run Javascript when document loads
  jQuery(document).ready(function($){

  	//Get twitter username from URL
    var username = window.location.pathname.replace('/','');
    console.log(username);

    // Send HTTP get to Twitter Audit with this username
    $.get("http://www.twitteraudit.com/"+username, function(data) {

    	// Find Twitter Audit score percentage from within the retrieved data using jQuery
      var percentage = $(data).find('.percentage').html();
      
      // Inject this percentage as a new list element in the .stats div, using inline CSS to fit the design of twitter
      $('.stats').append('<li><a class="js-nav" href="http://www.twitteraudit.com/'+username+'"><strong>' + percentage + '</strong> Real</a></li>');

    });

  })

}

// If jQuery is not defined, alert a sad face

console.log("This is working")
if (typeof jQuery === 'undefined') {
  alert("Sad face :(")
} 
  // And if it is the twitter home screen, don't run script.
  else if (window.location.pathname === "https://twitter.com/") {
  console.log("Don't load on home screen");
} 
  // Otherwise, load script
  else {

	// Declare icon
	var loadScreen = chrome.extension.getURL("16x16.png");

	// Create loading screen with our icon as a new list element with .extra class in the .stats div when the page is loading
	// Uses inline CSS to fit the design of twitter
	$('.ProfileNav-list').append('<li id="fonzfakefollower" class="ProfileNav-item ProfileNav-item--follower"><a class="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav u-textUserColor" data-nav="followers"><span class="ProfileNav-label">Fake Followers</span><span class="ProfileNav-value" data-is-compact="true"><img src="' + loadScreen + '""></span></a></li>')

	// Run main code when twitter page is ready
  jQuery(document).ready(function($){

  	//Get twitter username from URL
    var username = window.location.pathname.replace('/','');

    // Send HTTP get request to Twitter Audit with this username
    $.ajax({
      type: "GET",
      dataType: 'json',
      url: 'https://www.twitteraudit.com/' + username,
      success: function(data) {console.log(data)},
      error: function(error) {
        var percentage = $(error.responseText).find('.percentage').html();
        console.log(percentage);

        if (!percentage) {
        $('#fonzfakefollower').html('<a class="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav u-textUserColor" href="https://www.twitteraudit.com/'+username+'"><span class="ProfileNav-label">Fake Followers</span><span class="ProfileNav-value" data-is-compact="true"><strong>' + 'Find out!' + '</strong></a>')
      } else {
      
        // Otherwise, find out fake percentage
        var fakePercentage = 100 - parseInt(percentage);
        var fakePercentageString = fakePercentage.toString() + '%';
        console.log(fakePercentage)

        // and replace loading screen with Twitter Audit fake percentage

        // If the fake percentage is more than or equal to 50%, display text in red.
        if (fakePercentage >= 50) {
          $('#fonzfakefollower').html('<a class="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav u-textUserColor" href="https://www.twitteraudit.com/'+username+'"><span class="ProfileNav-label">Fake Followers</span><span class="ProfileNav-value" data-is-compact="true"><strong style="color:red">' + fakePercentageString + '</strong></a>')
          // $('.stats .extra').html('<a class="js-nav" href="https://www.twitteraudit.com/'+username+'"><strong style="color:red">' + fakePercentageString + '</strong> Fake</a>'); 
        } else {

          // Otherwise, display normally.
          $('#fonzfakefollower').html('<a class="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav u-textUserColor" href="https://www.twitteraudit.com/'+username+'"><span class="ProfileNav-label">Fake Followers</span><span class="ProfileNav-value" data-is-compact="true"><strong>' + fakePercentageString + '</strong></a>')
          // $('.stats .extra').html('<a class="js-nav" href="https://www.twitteraudit.com/'+username+'"><strong>' + fakePercentageString + '</strong> Fake</a>');
        

          }
        } 
      }
    })


    })
}
    // $.get("https://www.twitteraudit.com/"+username, function(data) {
    //   console.log(data)
    // 	// Find Twitter Audit score percentage  (string) from within the retrieved data using jQuery
    //   var percentage = $(data).find('.percentage').html();

      // If a Twitter Audit hasn't been made yet, replace loading screen with a sad face
     	// if (!percentage) {
      // 	$('.stats .extra').html('<a class="js-nav" href="https://www.twitteraudit.com/'+username+'"><strong>' + ':(' + '</strong></a>')
      // } else {
      
	     //  // Otherwise, find out fake percentage
      //   var fakePercentage = 100 - parseInt(percentage);
      //   var fakePercentageString = fakePercentage.toString() + '%';

      //   // and replace loading screen with Twitter Audit fake percentage

      //   // If the fake percentage is more than or equal to 50%, display text in red.
      //   if (fakePercentage >= 50) {
      //     $('.stats .extra').html('<a class="js-nav" href="https://www.twitteraudit.com/'+username+'"><strong style="color:red">' + fakePercentageString + '</strong> Fake</a>'); 
      //   } else {

      //     // Otherwise, display normally.
      //     $('.stats .extra').html('<a class="js-nav" href="https://www.twitteraudit.com/'+username+'"><strong>' + fakePercentageString + '</strong> Fake</a>');
    //     }
        
	   //  }

    // });

//   })

// }



if (typeof jQuery === 'undefined') {
  alert("Sad face :(")
} else {

  jQuery(document).ready(function($){


    var username = window.location.pathname.replace('/','');
    console.log(username);

    $.get("http://www.twitteraudit.com/"+username, function(data) {

      var percentage = $(data).find('.percentage').html();
      
      $('.stats').append('<li><a class="js-nav" href="http://www.twitteraudit.com/'+username+'"><strong>' + percentage + '</strong> Real</a></li>');

    });

  })

}
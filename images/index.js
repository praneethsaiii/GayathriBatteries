$(document).ready(function(){
  $(window).resize(function() {
      resizeContent();
  });
  resizeContent();
  
  $("#content").load('home.html', function (){
    assignMenuBarLoading();
  }); // Load home page
});

function assignMenuBarLoading() {
  // Catch the click on your a tag
  $(".homelink").unbind();
  $(".homelink").click(function(){
      // Load the content of the page referenced in the a-tags href
      $("#content").load($(this).attr("href"), function (){
        assignMenuBarLoading();
      });
      // Prevent browsers default behavior to follow the link when clicked
      
      return false;
  });
}

function resizeContent() {
  var footer_top = $('#footer').position().top;
  var content_top = $('#content').position().top;
  var content_height = footer_top - content_top;
  var viweportHeight = $(window).height();
  $('#content').css({'height': content_height});
}

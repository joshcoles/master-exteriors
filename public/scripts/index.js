$(document).ready(function(){

//========================================================================================================================
// Navbar
//========================================================================================================================

    $(".nav-button").on('click', function () {
      $(".nav-button, .nav-dropdown").toggleClass("open");
    });

//========================================================================================================================
// Slick image sliders
//========================================================================================================================

    $('.home-image-slider').slick({
      autoplay: true,
      arrows: false,
      dots: true,
      infinite: true,
      mobileFirst: true
    });

//========================================================================================================================
// Tab section logic
//========================================================================================================================

  // Hide all content
  $("#tabbed-content").find("[id^='tab']").hide();

  // Activate the first tab
  $("#tabs li:first").attr("id","current");

  // Show first tab's content
  $("#tabbed-content #tab1").fadeIn();

  $('#tabs a').click(function(e) {
      e.preventDefault();

      //detection for current tab
      if ($(this).closest("li").attr("id") == "current"){
       return;
      } else {

        // Hide all content
        $("#tabbed-content").find("[id^='tab']").hide();

        // Reset ids
        $("#tabs li").attr("id","");

        // Activate this
        $(this).parent().attr("id","current");

         // Show content for the current tab
        $('#' + $(this).attr('name')).fadeIn();
      }
  });
});
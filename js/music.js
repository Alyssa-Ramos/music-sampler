// jQuery hide()/show() example with a switch statement

$(document).ready(function() {


  // function to hide all divs

  function hideAll() {

  //this should hide each individual album cover (classified)
    $('#power').hide();
    $('#singles').hide();
    $('#substance').hide();
    $('#technique').hide();
  }

  // run that function right away
  hideAll();

  // when any album cover is clicked, make the suitable div appear
  $('.album').click(function() {

    // but first, hide all the divs to ensure that
    // only one will be open, ever
    hideAll();

    // here is a switch statement

    // we can get the ID of the thing that was clicked -
    switch ($(this).attr("id")) {
      case "powerAlbum":
        $('#power').show();
        break;
      case "singlesAlbum":
        $('#singles').show();
        break;
      case "substanceAlbum":
        $('#substance').show();
        break;
      case "techniqueAlbum":
        $('#technique').show();
        break;
    }

  }); // end of function for clicking

  $('.album').click(function() {
       $('.audioCap').slideToggle();
     });
});

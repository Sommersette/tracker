$(document).ready(function(){

  $("#begin").click(function() {
    $("#begin").hide();
    $("#screen").show();
  });

  $("#screen").submit(function(event) {
    event.preventDefault();
  }

})

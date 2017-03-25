$(document).ready(function(){

  $("#begin").click(function() {
    $("#begin").hide();
    $("#screen").show();
  });

  $("#screen").submit(function(event) {
    event.preventDefault();
    var rightjob = $("input:radio[name=rightjob]:checked").val();
    if (rightjob === "screen") {
      $("#frontback").show();
      $("#screen").hide();
    } else {
      $("#different ").show(); //add code in index, name img id sun or iframe/object with search engine in it.
      $("#screen").hide();
    }

  });

  $("#frontback").submit(function(event) {
    event.preventDefault();
    var coding = ("input:radio[name=coding]:checked").val();
    if (coding === "frontback")
      $("").show();
  }






});

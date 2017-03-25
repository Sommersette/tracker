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
      $("#different ").show();
      $("#screen").hide();
    }

  });

  // $("#frontback").submit(function(event) {
  //   event.preventDefault();
  //   var coding = $("input:radio[name=coding]:checked").val();
  //   if (coding === "frontend") {
  //     $(".design").show();
  //     $("#frontback").hide();
  //   } else {
  //     $("#people").show();
  //     $("#frontback").hide();
  //   }







});

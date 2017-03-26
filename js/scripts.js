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
      $("#different ").show(); // end of this branch
      $("#screen").hide();
    }
  });

  $("#frontback").submit(function(event) {
    event.preventDefault();
    var coding = $("input:radio[name=coding]:checked").val();
    if (coding === "frontend") {
      $("#design").show(); // end of this branch
      $("#frontback").hide();
    } else {
      $("#people").show(); // new branch
      $("#frontback").hide();
    }
});

  $("#people").submit(function(event) {
    event.preventDefault();
    var interaction = $("select").val();
    if ("interaction === people") {
      $("#office").show();
      $("#people").hide();
    } else {
      $("#ruby").show();
      $("#people").hide();
  }
});

  $("#office").submit(function(event) {
    event.preventDefault();
    var workLocation = $("select").val();
    if ("workLocation === office") {
      $("#size").show();
      $("#office").hide();
    } else {
      $("#android").show();
      $("#office").hide();
  }
});






});

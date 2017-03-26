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
      $("#different").show(); // end of this branch
      $("#screen").hide();
    }
  });

  $("#frontback").submit(function(event) {
    event.preventDefault();
    var coding = $("input:radio[name=coding]:checked").val();
    if (coding === "frontend") {
      $("#design").show();
      $("#frontback").hide();
    } else {
      $("#people").show();
      $("#frontback").hide();
    }
});
    // breaks here: always hides, but only shows one option no matter what. Form changed from radio to dropdowns.
  $("#people").submit(function(event) {
    event.preventDefault();
    var interaction = $("select").val();
    if (interaction === "personal") {
      $("#ruby").show();
      $("#people").hide();
    } else {
      $("#office").show();
      $("#people").hide();
  }
});

  $("#office").submit(function(event) {
    event.preventDefault();
    var workLocation = $("select").val();
    if (workLocation === "desk") {
      $("#size").show();
      $("#office").hide();
    } else {
      $("#android").show();
      $("#office").hide();
  }
});

  $("#size").submit(function(event) {
    event.preventDefault();
    var companySize = $("select").val();
    if (companySize === "large"){
    $("#php, #email").show();
    $("#size").hide();
  } else if (companySize === "small") {
    $("#android, #email").show();
    $("#size").hide();
    } else {
    $("#ruby, #email").show();
    $("#hide").hide();
    }
  });
});

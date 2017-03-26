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
      $("#design, #frontVid").show();
      $("#frontback").hide();
    } else {
      $("#people").show();
      $("#frontback").hide();
      }
  });
    // breaks here: always hides, but only shows one option no matter what. Form changed from radio to dropdowns.
  $("#people").submit(function(event) {
    event.preventDefault();
    var interaction = $("#interaction").val();
    if (interaction === "personal") {
      $("#email, #ruby, #rubyVid").show();
      $("#people").hide();
    } else {
      $("#office").show();
      $("#people").hide();
    }
  });

  $("#office").submit(function(event) {
    event.preventDefault();
    var workLocation = $("#workLocation").val();
    if (workLocation === "desk") {
      $("#size").show();
      $("#office").hide();
    } else {
      $("#email, #android, #javaVid").show();
      $("#office").hide();
    }
  });

  $("#size").submit(function(event) {
    event.preventDefault();
    var companySize = $("#companySize").val();
    if (companySize === "large"){
      $("#email, #net, #cVid").show();
      $("#size").hide();
    } else if (companySize === "small") {
      $("#php, #drupalVid").show();
      $("#size").hide();
        } else {
        $("#email, #ruby, #rubyVid").show();
        $("#hide").hide();
        }
    });
});

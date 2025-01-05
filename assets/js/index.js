$(document).ready(function () { 

  qchk=true;
  $(".trigger").click(function() {
    $(this).toggleClass("active");
    if(qchk) {
      $(".menu").addClass("on");
      $("body").addClass("hidden");
      qchk=false;       
    } 
    else {
      $(".menu").removeClass("on");
      $("body").removeClass("hidden");
      qchk=true;
    }
  });
});
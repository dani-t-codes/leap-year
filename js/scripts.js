$(document).ready(function(event) {
  $("form#form").submit(function(event) {
    event.preventDefault();
    $("#output").fadeIn();
    let limit = $("input#submission").val();
    
  });
 }); 
$(document).ready(function(event) {
  $("form#form").submit(function(event) {
    event.preventDefault();
    $("#output").show();
    let year = $("input#submission").val();
      if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        result = ("yes, It's a leap year") 
      }  else {
        result = ("No, it's not a leap year")
      };
      $("p").text(result);
    });
  });

//Describe: isLeapYear()
 // Test1: "It returns false for years that are not a leap year"
 // Expect(isLeapYear(1967).toEqual(false);

 //Test2: "It returns true for years that *are* a leap year."
 //Expect(isLeapYear(2004)).toEqual(true); year % 4 === 0

 //Test3: "It returns false for years that are divisible by 100"
 //Expect(isLeapYear2)

//Specs for a LeapYear: 
// The year is evenly divisible by 4; Number.isInteger(); // true
// If the year can be evenly divided by 100, it is NOT a leap year, unless;
// The year is also evenly divisible by 400. Then it is a leap year.
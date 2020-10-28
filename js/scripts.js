$(document).ready(function(event) {
  $("form#form").submit(function(event) {
    event.preventDefault();
    let year = $("input#submission").val();
    isLeapYear(year) {
      return false;
    }
// this line runs in dev tools console after lines 5-7 : isLeapYear(1993);   
  }
});

 // Test1: "It returns false for years that are not a leap year"
 // Expect(isLeapYear(1967).toEqual(false);


 //Test2: "It returns true for years that *are* a leap year."

 
//Specs for a LeapYear: 
// The year is evenly divisible by 4; Number.isInteger(); // true
// If the year can be evenly divided by 100, it is NOT a leap year, unless;
// The year is also evenly divisible by 400. Then it is a leap year.
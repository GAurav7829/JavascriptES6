// constant can't be change
const noOfHoursPerDay = 24; 

var rentPerHour = 2;

//noOfHoursPerDay = 20; //gives error if change the constant

var rentPerDay = noOfHoursPerDay * rentPerHour;

console.log(rentPerDay);
/**
 * Date functions
 *      used to perform manipulation on dates
 */
//new Date()    -   to get system date and time
var a = new Date();
console.log(a);

//toLocaleDateString()
console.log(a.toLocaleDateString());

//toLocaleTimeString()  -   hh:mm:ss am/pm
console.log(a.toLocaleTimeString());

//getTime() -   no. of miliseconds since 1/1/1970 12:00 AM     
//1000 miliseconds = 1 sec
//1000*60 ms = 1 min
//1000*60*60 = 1 hr
//1000*60*60*24 = 1 day
console.log(a.getTime());

//getDay()  - day of week 0=sunday, 6=saturday
var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
console.log(day[a.getDay()]);

/**
 * getDate()    -   gives date
 * getMonth()   -   gives month from 0-11
 * getFullYear()    -   gives year
 */
console.log(a.getDate(), a.getMonth() + 1, a.getFullYear());

/**
 * getHours()   -   24hr format
 */
console.log(a.getHours(), a.getMinutes(), a.getSeconds(), a.getMilliseconds());

//Custom date
a.setDate(27);
a.setMonth(0);
a.setFullYear(2022);
console.log(a.toLocaleDateString());
//employee scenario
var employee = {
    firstName: 'grv',
    lastName: 'sgh',
    designation: 'java developer',
    salary: 25000,
    workExperienceYears: 4,
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    promote: function() {
        var isEligiblePromotion = false;
        if (this.designation === 'java developer') {
            if (this.workExperienceYears > 3) {
                isEligiblePromotion = true;
                this.designation = 'Sr. Java Developer';
                this.salary += (this.salary * 10 / 100);
            } else {
                isEligiblePromotion = false;
            }
        } else if (this.designation === 'Sr. Java Developer') {
            if (this.workExperienceYears > 5) {
                isEligiblePromotion = true;
                this.designation = 'Manager';
                this.salary += (this.salary * 20 / 100);
            } else {
                isEligiblePromotion = false;
            }
        }
        return isEligiblePromotion;
    }
};

console.log(employee);
console.log(employee.getFullName());
if (employee.promote()) {
    console.log('Congrats Employee is promoted');
}
console.log(employee);

console.log('///////////////////////////////////////////////////');

//example 2
let student = {};
console.log(student);
student.marks = 70; //added property
student.getResult = function() { //added method
    return this.marks >= 35 ? 'Pass' : 'Fail';
}
console.log(student);
console.log(student.getResult());

console.log('//////////////////////////////////////////////////');

//example 3
let customer = {
    name: 'grv',
    email: 'grvsgh7@gmail.com',
    1: 'hello'
};

console.log(customer.name); //1st way
console.log(customer['email']); //2nd way
console.log(customer[1]);
console.log(customer);
//constructor functions

var createEmployee = function(name, id, salary) {
    var employee = {}; //create new object
    //initialize properties and method to object
    employee.name = name;
    employee.id = id;
    employee.salary = salary;
    employee.getEmployeeName = function() {
            return this.name;
        }
        //return new object
    return employee;
};

var employee1 = createEmployee("grv", 1, 1000);
console.log(employee1);
var employee2 = createEmployee('monu', 2, 2000);
console.log(employee2);
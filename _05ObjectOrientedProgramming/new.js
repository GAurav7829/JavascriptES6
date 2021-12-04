//new keyword

var Employee = function(name, id, salary) {
    //initialize properties and method to object
    this.name = name;
    this.id = id;
    this.salary = salary;
    this.getEmployeeName = function() {
        return this.name;
    }
};

var employee1 = new Employee("grv", 1, 1000);
console.log(employee1);
var employee2 = new Employee('monu', 2, 2000);
console.log(employee2);
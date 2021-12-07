//classes and objects in JS
class Emplopyee {
    empId;
    empName;
    salary;
    #accountNumber;//private property
    #age;//private property

    constructor(empId, empName, salary, accountNumber = 'xxxxxxxxx') { //constructor
        this.empId = empId;
        this.empName = empName;
        this.salary = salary;
        this.#accountNumber = accountNumber;
    }

    getEmployeeName() {
        return 'Mr. ' + this.empName;
    }

    hikeSalary() {
        this.salary += (this.salary * 0.3);
    }
    
    //setter and getter for private property to make it accessable
    setAccountNumber(accountNumber) {
        if (accountNumber == '' || accountNumber == undefined || accountNumber == null) {
            throw new Error('Can not be null');
        } else {
            this.#accountNumber = accountNumber;
        }
    }
    getAccountNumber() {
        return this.#accountNumber;
    }

    //accessor property
    set Age(age) {
        this.#age = age;
    }
    get Age(){
        return this.#age
    }
}

let emp1 = new Emplopyee();
emp1.empId = 101;
emp1.empName = 'grv';
emp1.salary = 1000;
console.log(emp1.getEmployeeName());
emp1.hikeSalary();
emp1.setAccountNumber('987654321');
console.log(emp1.salary);

let emp2 = new Emplopyee(102, 'Monu', 1000, '123456789');
console.log(emp2);
//console.log(emp2.#accountNumber);//private property can't be access outside the class
console.log(emp2.getAccountNumber());

let emp3 = new Emplopyee();
//emp3.setAccountNumber(); //throw error if null
console.log(emp3);
emp3.Age = 20;//accessor property set age
console.log(emp3.Age);//accessor property get age
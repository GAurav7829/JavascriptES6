//object literals
var person = {
    personName: "Grv",
    birthDay: function() {
        return 'Happy Birthday ' + this.personName;
    }
};
console.log(person);
console.log(person.personName);
console.log(person.birthDay());
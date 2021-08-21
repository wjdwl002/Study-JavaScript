function Person(first, last, age, gender, interests){
    this.name = {
        'first' : first,
        'last' : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

var person1 = new Person("Joung", "Jiwon", 23, "female", ["coding", "shopping"]);
console.log(person1.valueOf());
console.log(person1.__proto__.__proto__);
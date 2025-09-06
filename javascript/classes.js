//classes =Classes are a template for creating objects. They encapsulate data with code to work on that data

// console.log("CLASS");

//Constructor: Every class can have a special constructor() method. This method is automatically called when a new instance (object) of the class is created using the new keyword. It's used to initialize the object's properties.


class Employees{

    constructor(name,age){
      this.name = "name";
      this.age = "age";
    }

    getMyName(name){
        console.log("my name is", name);
    }

    getMyAge(age){
        console.log("my age is ", age);
    }

}
const emp =new Employees();

var MyName = emp.getMyName("tani");
var MyAge = emp.getMyAge("12");
// class
class student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
         
    }
}
const student1 = new student("Shreya", "20");
document.write(student1.name);
document.write(",");
document.write(student1.age);

// inheritance
class Person{
    constructor(name){
        this.name = name;
    }
    
    displayName(){
        return `${this.name}`;
    }
    
    greet(){
        console.log(`Hello I am ${this.name}`);
    }
}
class P1 extends Person{
    constructor(name, age){
        super(name);
        this.age = age;
    }
    
    greet(){
        console.log(`Hello I am ${this.name}, My age is ${this.age}`);
    }
    
    displayAge(){
        console.log(`${this.age}`);
    }
}

let p2 = new Professor('Peter', 45);
p2.displayBranch();
p2.displayName();

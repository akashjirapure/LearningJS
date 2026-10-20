// 1. Example of super with a method

class employee {
    task(){
        console.log("Employee working on task");
        
    }
}

class tester extends employee {

    bug(){
        super.task();
    }
}

test = new tester();

test.bug();


// 2. super() with a constructor
// We use super() to call the parent class's constructor.

console.log("---------------------- super keyword with constructor---------------");

class father 
{
    constructor(){
        console.log("father constructro is exeucted");
        
    }

}

class child extends father{

    constructor(){
        super();

    }
}

c = new child();


class Employee {
    constructor(name) {
        this.name = name;
    }

    work() {
        console.log(this.name + " is working");
    }
}
// ----------------------------------------------------------------
class Tester extends Employee {
    constructor(name) {
        super("Rahul");
        this.name = name;
    }

    work() {
        super.work();
        console.log(this.name + " is testing software");
    }
}

const t = new Tester("Akash");
t.work();

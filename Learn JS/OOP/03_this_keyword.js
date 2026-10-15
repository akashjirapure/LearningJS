let farmer = {
    fname: "Akash",
    getDetails: function () {
        console.log(this.fname); // "this" keyword is refere "farmer" object
    }
}
// this.fname refers to farmer.fname 
// hers "this" refers to "farmer" object because "farmer" called "getDetails" function

farmer.getDetails();

// ---- "this" inside class

console.log("------------------------ class -------------------------------");


class students {

    setDetails(name, age) {
        this.name = name
        this.age = age
    }

    showDetails() {
        console.log(this.name, this.age);

    }

}
let stu = new students();
stu.setDetails("Akash", 30)
stu.showDetails()

/* this is a keyword in JavaScript that refers to the current context.
 In an object method, it usually refers to the object that calls the method. 
 In a class, we use this to access or assign properties of the current instance.
  Its value depends on how the function is called, 
  except that arrow functions inherit this from their surrounding scope."
*/

console.log("------------------------***** -------------------------------");


const person1 = {
    name: "Akash",
    greet() {
        console.log(this.name);
    }
};

const person2 = {
    name: "Rahul",
    greet: person1.greet
};

person2.greet();


console.log("------------------------***** -------------------------------");

const person = {
    name: "Akash",

    show() {
        console.log(this.name);
    },

    showArrow: () => {
        console.log(this.name);
    }
};

person.show();
person.showArrow();
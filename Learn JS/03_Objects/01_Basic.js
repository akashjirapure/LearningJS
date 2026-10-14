// Object

// An object in JavaScript is a collection of key-value pairs used to store related data and functionality in a single entity.
// literls
let jsUser = {
    Name : "Akash",
    age: 20,
    jsid : 471996,
    "surname" : "Jirapure",
    "full name" : "Akash Vijayrao Jirapure",
    // greet : function(){
    //     console.log(`Hello ${this["full name"]}`);
        
    // }
}

// console.log(jsUser.Name);
// console.log(jsUser["Name"]);
// console.log(jsUser.surname);

// console.log(jsUser["full name"]);
// console.log(jsUser["full name"]);

// //  change value
//  jsUser.surname = "Gulhane"

//  console.log(jsUser.surname);
 
// jsUser.greet()

jsUser.greet = function(){
    console.log(`hello ${this["full name"]}`);
    
}

jsUser.greet()


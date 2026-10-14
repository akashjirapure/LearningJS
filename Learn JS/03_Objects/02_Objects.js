// singleton object :-
const fbuser = new Object();

const instaUser = {
    username : "ajirapure",
    password : "123456",
    isLogin : true,
    totalPost : 15
}

// print all properties using for in loop
console.log(instaUser.isLogin);
console.log(instaUser["totalPost"]);


for(const user in instaUser){
    console.log(user + ": " + instaUser[user]);

    // in "user" stored all properties(Keys)
   

}

console.log("----------------------- Normal For loop-------------------");

let keys = Object.keys(instaUser) // fetch all properties(keys) of "instaUser" object
// Object.keys(instaUser) returns an array of property names.
// in "keys" variable stored ["username", "password", "isLogin", "totalPost"]

for(let i=0; i<keys.length; i++){
    console.log(keys[i] + ": " + instaUser[keys[i]]);
}





//singleton
//object.create to create object using constructor method
//object literals

const obj = {
    name: "Neeraj",
    "full name" : "Neeraj Bhandari",
    age : 24,
    location: "Pune",
    email: "nb@gmail.com",
    isLoggedin: false,
    lastLogindays: ["Monday", "Saturday"]
}

console.log(obj.name)
console.log(obj["full name"])


obj.email = "nb@yahoo.com"
//Object.freeze(obj)
obj.email = "nb@hotmail.com"
console.log(obj);

obj.greeting = function(){
    console.log("hello user");
}

obj.greetingtwo = function(){
    console.log(`Hello user, ${this.name}`);
}

console.log(obj.greeting());
console.log(obj.greetingtwo());



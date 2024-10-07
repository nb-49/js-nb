//const tinderUser = new Object()     // singlton object
const tinderUser = {}       //non singleton


tinderUser.id = "nb124"
tinderUser.name = "nb"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "nb@gmail.com",
    fullname : {
        userfullname : {
            firstname : "rohan",
            lastname : "jain"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = { obj1, obj2}
//const obj3 = Object.assign({}, obj1,obj2)

//const obj3 = {...obj1, ...obj2}
//console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const game = {
    gamename: "valorant",
    price: "free",
    gamemode: "multiplayer"
}

// game.game.gamemode

const {gamemode: mode} = game

console.log(mode);
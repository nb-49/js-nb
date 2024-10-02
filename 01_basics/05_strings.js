const name = "neeraj"
const age = 24
console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String('neeraj-nb-viruss')

console.log(gameName[0])    //n

console.log(gameName.length)    //16
console.log(gameName.charAt(4))     //a
console.log(gameName.charCodeAt(0)) //110
console.log(gameName.at(4)) 


const newString = gameName.substring(0,5)
console.log(newString)          //neera (doesnot include 5th index position in this example)


console.log(gameName.slice(-8, -2))       //b-viru
console.log(gameName.slice(7))             //nb-viruss

const aString = "    strombreaker     "
console.log(aString.trim())             // strombreaker(removes spaces)        

const url = "https://virusss.com/neeraj%20nb"

console.log(url.replace('%20', '-')) //https://virusss.com/neeraj-nb

console.log(url.includes('strombreaker'))       //false

console.log(gameName.split('-'));       //['neeraj', 'nb', 'viruss' ]
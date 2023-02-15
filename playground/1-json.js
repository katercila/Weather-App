//.json works well with objects and arrays 

const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')  //returns a buffer not a string 
const dataJSON = dataBuffer.toString()   //converted to javascript string 
const user = JSON.parse(dataJSON)

user.name = 'Gunther'
user.age = 54

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)

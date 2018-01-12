const readAllText = require('./readAllText');

//example using it
//UNC path
//let path = "\\\\MACHINENAME\\Folder\\ReadMe.txt"
//relative path text
//let path = "./readme.txt"
//hardcoded path
let path = "c:/test.txt"
readAllText(path)
.then(text => console.log(text))
.catch(err => console.log(err))
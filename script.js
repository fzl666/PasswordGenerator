// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input


function writePassword() {
 //checklist 
  var Plength = prompt("Lenght of password:")
  var lowercase = confirm("At lease one lowercase")
  var number = confirm("At lease one number")
  var uppercase = confirm("At lease one uppercase")
  var specialChar = confirm("At least one special character")
  //

  myCriteria()
  function myCriteria(){
//Narrow down to the set of characters to generate password from
    
    var lC = 'abcdefghijklmnopqrstuvwxyz'
    var num = '0123456789'
    var uC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var sC = '!"#$%&()*+,-./:;<=>?@[^_`]{|}~'
    var string = ""
    var checkCriteria = []
    console.log(Plength)
    if (lowercase == true) { 
      console.log("lowercase")
      var string = string.concat(lC)
      checkCriteria[checkCriteria.length]=lC

    }
    if (number == true) {
      console.log("number")
      var string = string.concat(num)
      checkCriteria[checkCriteria.length]=num
    }
    if (uppercase == true) {
      console.log("uppercase")
      var string = string.concat(uC)
      checkCriteria[checkCriteria.length]=uC
    }
    if (specialChar == true) {
      console.log("specialChar")
      var string = string.concat(sC)
      checkCriteria[checkCriteria.length]=sC
    } 
    
    console.log("We will select from these characters:"+" "+string)
  //generate password
    var frame = [] 
    while(frame.length<Plength){
      var xChar = string.charAt(Math.floor(Math.random() * string.length))
      frame.push(xChar) 
    }

var passwordString = frame.join('')
 
passwordText.value = passwordString;

console.log(passwordString)
  }

}



var passwordText = document.querySelector("#password");


//check if the password includes characters form all selceted character sets(doesn't work)
//var checkPassword=[]
//var rArray=[]  
//    for (var y = 0; y < frame.length; y++){
//        var j = checkCriteria[a]
//     for(var a =0; a < checkCriteria.length; a++){ 
//     result = j.includes(frame[y])
//     rArray[rArray.length]=result
//     }
//   }
// if (rArray.includes(true)){
//    checkPassword[checkPassword.length]=j
//  }  
  
//check if the password include at least one lowercase(works)
//if (checkPassword === checkCriteria){
//console.log('good')
//}
//  var rArray = []
//  for (var y = 0; y < frame.length; y++) {
//    result = lC.includes(frame[y])
//    rArray[rArray.length]=result
//  }
//  if (rArray.includes(true)){
//     console.log('Has at least one lowercase')
//   }


  

  


   
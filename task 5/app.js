//calculating age
function ageCal(DOB) {
    var now = new Date()
    var myage = now - DOB
    return myage / (1000 * 60 * 60 * 24 * 365.25)
}

var myDOB = new Date("march 2 , 2001 3:07")
var myage = ageCal(myDOB)
console.log(myage)
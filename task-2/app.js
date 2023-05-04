//checking whether year is a leap year or not
function checkLeapYear(year) {
    if (year % 4 == 0 && year % 100 != 0) {
        return true;
    }
    else {
        return false;
    }
}
let year = parseInt(prompt("Enter the year"));
if (checkLeapYear(year) == true) {
    document.write(year, +" ", "is a leap year")
}
else {
    document.write(year, +" ", " is not  a leap year")
}
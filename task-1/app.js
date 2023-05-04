function nextLeap(years) {
    var i, leap10years = [];
    for (i = 1; i <= 10; i++) {
        if (years % 4 == 0) {
            leap10years.push(years)
        }
        else {
            i--;
        }
        years++
    }
    return leap10years;
}
var years = parseInt(prompt("Enter a year to find next 10 leap years: "))
var list = leap10years(years)
document.write("upcomming 10 leap years")
document.write(list)

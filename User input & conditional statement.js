// Assigment No. 9 - 11
// User Input And Conditional Statements
// Q.no.1
var city = prompt("Enter your city name");
if (city === "karachi") {
    alert("Welcome to city of lights");
}

// Q.no.2

var gender = prompt("Enter your Gender");
if (gender === "male") {
    alert("Good Morning Sir!");
}
else {
    alert("Good Morning Ma'am!");
}

// Q.no.3

var color = prompt("Enter Traffic light color");
if (color === "red") {
    alert(" Message: Must Stop.");
}
else if (color === "yellow") {
    alert(" Message: Ready To Move.");
}
else if (color === "green") {
    alert(" Message: Move Now.");
}
else {
    alert("It is not a Traffic Light Color");
}

// Q.no.4

var fuel = prompt("Enter Remainig Fuel In Car(in Litres)");
if (fuel < 1) {
    alert("Please refill the fuel in your car");
}

// Q.no.5

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
Yes

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
No

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
No
if (c === 13) {
    alert("condition 2 is true");
}
Yes
if (++c < 14) {
    alert("condition 3 is true");
}
No
if (c === 14) {
    alert("condition 4 is true");
}
Yes

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
Yes

if (true) {
    alert("True");
}
Yes
if (false) {
    alert("False");
}
No

if ("car" < "cat") {
    alert("car is smaller than cat");
}
Yes


// Q.no.6

var total_marks = prompt("Enter total marks of Three Subjects");
var marks_obtained = prompt("Enter Obtained marks of Three Subjects");
var percentage = (marks_obtained / total_marks) * 100;

if (percentage >= 80) {
    document.write("<h1>Mark Sheet</h1>" + "<br>" + "<br>");
    document.write("Total Marks: " + total_marks + "<br>");
    document.write("Marks Obtained: " + marks_obtained + "<br>");
    document.write("Percentage: " + percentage + "%" + "<br>");
    document.write("Grade: " + "A-one" + "<br>");
    document.write("Remarks: " + "Excellent" + "<br>");
}
else if (percentage >= 70) {
    document.write("<h1>Mark Sheet</h1>" + "<br>" + "<br>");
    document.write("Total Marks: " + total_marks + "<br>");
    document.write("Marks Obtained: " + marks_obtained + "<br>");
    document.write("Percentage: " + percentage + "%" + "<br>");
    document.write("Grade: " + "A" + "<br>");
    document.write("Remarks: " + "Good" + "<br>");
}
else if (percentage >= 60) {
    document.write("<h1>Mark Sheet</h1>" + "<br>" + "<br>");
    document.write("Total Marks: " + total_marks + "<br>");
    document.write("Marks Obtained: " + marks_obtained + "<br>");
    document.write("Percentage: " + percentage + "%" + "<br>");
    document.write("Grade: " + "B" + "<br>");
    document.write("Remarks: " + "You need to improve" + "<br>");
}
else if (percentage < 60) {
    document.write("<h1>Mark Sheet</h1>" + "<br>" + "<br>");
    document.write("Total Marks: " + total_marks + "<br>");
    document.write("Marks Obtained: " + marks_obtained + "<br>");
    document.write("Percentage: " + percentage + "%" + "<br>");
    document.write("Grade: " + "Fail" + "<br>");
    document.write("Remarks: " + "Sorry" + "<br>");
}

// Q.no.7

var number = 7;
var guess = parseInt(prompt("Guess the number."));
if (guess === number) {
    alert("Bingo! Correct answer.");
}
else if (guess === 8) {
    alert("Close enough to the correct answer.");
}

// Q.no.8

var number = parseInt(prompt("Enter a Number"));
var modulus = number % 3;
if (modulus === 0) {
    alert(number + " is divisible by 3");
}

// Q.no.9

var number = parseInt(prompt("Enter a Number"));
var modulus = number % 2;
if (modulus === 0) {
    alert(number + " is an even number");
}
else {
    alert(number + " is an odd number");
}

// Q.no.10

var temperature = prompt("Enter Temperature");
if (temperature > "40") {
    alert("It is too hot outside.");
}
else if (temperature > "30") {
    alert("The Weather today is Normal.");
}
else if (temperature > "20") {
    alert("Today’s Weather is cool.");
}
else if (temperature > "10") {
    alert("OMG! Today’s weather is so Cool.");
}

// Q.no.11

var first_num = parseInt(prompt("Enter First Number"));
var second_num = parseInt(prompt("Enter Second Number"));
var operation = prompt("Enter Operation");
var add = first_num + second_num;
var sub = first_num - second_num;
var mul = first_num * second_num;
var div = first_num / second_num;
var mod = first_num % second_num;
if (operation === "+") {
    alert("The Answer is: " + add);
}
else if (operation === "-") {
    alert("The Answer is: " + sub);
}
else if (operation === "*") {
    alert("The Answer is: " + mul);
}
else if (operation === "/") {
    alert("The Answer is: " + div);
}
else if (operation === "%") {
    alert("The Answer is: " + mod);
}

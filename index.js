import inquirer from "inquirer";
let weather = "cloudy";
if (weather === "cloudy") {
    console.log("Raining");
}
else {
    console.log("No Raining");
}
//else if statement
let weather2 = "cloudy";
if (weather2 === "raining") {
    console.log("Wear a raincoat");
}
else if (weather === "cloudy") {
    console.log("Wear a light jacket");
}
else {
    console.log("Wear a sunglasses");
}
//Condition Ternary Operators (almost like if else)
let isHungry = true;
let snack = isHungry ? "apple" : "water";
console.log(`You should have some ${snack}`);
//Switch case (approximately if else)
let dayOff = "sunday";
switch (dayOff) {
    case "saturday":
        console.log("Go Hiking");
        break;
    case "sunday":
        console.log("Read a book");
        break;
    default:
        console.log("Work on hobby");
}
//Friend Checker Game
let isFriend = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: "Enter your friend name:"
    }]);
if (isFriend.name === "Ameen" || isFriend.name === "Daniyal") {
    console.log(`${isFriend.name} is your friend`);
}
else {
    console.log(`${isFriend.name} is not your friend`);
}
//Rock Paper Scissor Game
let player1 = "rock";
let player2 = "scissors";
if (player1 === player2) {
    console.log("Tie !");
}
else if ((player1 === "rock" && player2 === "scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "rock")) {
    console.log("player1 Wins !");
}
else {
    console.log("player2 Wins !");
}
//Calculator
let result = "";
let num1 = await inquirer.prompt([{
        type: "number",
        name: "num1",
        message: "Type number 1"
    }]);
let operator = await inquirer.prompt([{
        type: "input",
        name: "opertor",
        message: "Type operator"
    }]);
let num2 = await inquirer.prompt([{
        type: "number",
        name: "num2",
        message: "Type number 2"
    }]);
if (typeof num1.num1 !== "number" && typeof num2.num2 !== "number") {
    console.log("Please Enter a number");
}
else if (operator.opertor !== "%" && operator.opertor !== "+"
    && operator.opertor !== "-" && operator.opertor !== "*") {
    console.log("Enter a operator");
}
if (operator.opertor === "*") {
    result = num1.num1 * num2.num2;
    console.log(`${num1.num1} * ${num2.num2} = ${result}`);
}
else if (operator.opertor === "+") {
    result = num1.num1 + num2.num2;
    console.log(`${num1.num1} + ${num2.num2} = ${result}`);
}
else if (operator.opertor === "-") {
    result = num1.num1 - num2.num2;
    console.log(`${num1.num1} - ${num2.num2} = ${result}`);
}
else if (operator.opertor === "/") {
    result = num1.num1 / num2.num2;
    console.log(`${num1.num1} / ${num2.num2} = ${result}`);
}
else if (operator.opertor === "**") {
    result = num1.num1 ** num2.num2;
    console.log(`${num1.num1} ** ${num2.num2} = ${result}`);
}
else if (operator.opertor === "%") {
    result = num1.num1 % num2.num2;
    console.log(`${num1.num1} % ${num2.num2} = ${result}`);
}
else {
    console.log("Invalid Operation");
}
if (num1.num1 === "") {
    console.log("Enter a number");
}

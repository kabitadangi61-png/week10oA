// PART 1: TIME-BASED GREETING

let userName = prompt("What is your name?");

let currentHour = new Date().getHours();

if (currentHour < 12) {
    console.log("Good morning, " + userName + "!");
} else if (currentHour < 18) {
    console.log("Good afternoon, " + userName + "!");
} else {
    console.log("Good evening, " + userName + "!");
}


// PART 2: AGE AND DAYS LIVED

let birthYear = prompt("What is your birth year?");

let age = 2026 - Number(birthYear);

let daysLived = age * 365;

console.log("Your age is " + age + " years.");

console.log("You have lived approximately " + daysLived + " days.");


// PART 3: AGE VERIFICATION

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
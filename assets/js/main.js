const name = "Victor";
const lastName = "Ulloa";
let age = 30;
const country = "Spain";
const knowledge = ["html", "css", "javascript", "react"];

console.log(`Hello, my name is ${name} ${lastName}, I am a ${age} year-old student from ${country}, and I am very skilled in the folowing technologies: ${knowledge[0]}, ${knowledge[1]}, ${knowledge[2]} and ${knowledge[3]}.`);

age+= 5;

knowledge.push("php");

console.log(`Hello, my name is ${name} ${lastName}, I am a ${age} year-old student from ${country}, and I am very skilled in the folowing technologies: ${knowledge[0]}, ${knowledge[1]}, ${knowledge[2]}, ${knowledge[3]} and ${knowledge[4]}.`);
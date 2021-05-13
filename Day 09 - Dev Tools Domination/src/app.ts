"use strict";

interface IDog {
    name: string;
    age: number;
}

const dogs: IDog[] = [
    { name: "Snickers", age: 2 },
    { name: "hugo", age: 8 },
];

//attribute modification
function makeGreen() {
    const p = document.querySelector("p") as HTMLParagraphElement;
    p.style.color = "#BADA55";
    p.style.fontSize = "50px";
}

//Regular
console.log("Hello");

//Interpolated
console.log("Hello I am a %s string", "💩");

//Styled
console.log(
    "%c I am some great text",
    "font-size:50px; background:red; text-shadow:10px 10px 0 blue"
);

//warning
console.warn("OH NOOO");

//Error :/
console.error("Shit!");

//Info
console.info("Crocodiles eat 3-5 people per year");

//Testing
console.log(1 === 2, "This is wrong");

const p = document.querySelector("p") as HTMLParagraphElement;

console.assert(p.classList.contains("ouch"), "This is wrong");

//Clearing
console.clear();

//Viewing DOM Elements
console.log(p);
console.dir(p);
//all property and methods all stuffs lives on element console.dir will show you.

console.clear();

//Grouping together

dogs.forEach((dog) => {
    console.group(`${dog.name}`); //groupCollapsed
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd();
});

//Counting

console.count("A");
console.count("A");
console.count("B");
console.count("A");
console.count("C");
console.count("C");
console.count("B");
console.count("A");
console.count("B");
console.count("A");

//timing
console.time("fetching data"); //start

fetch("https://api.github.com/users/wesbos")
    .then((res) => res.json())
    .then((data) => {
        console.timeEnd("fetching data"); //end
        console.log(data);
    });

//table
console.table(dogs);

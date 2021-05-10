"use strict";
const people = [
    { name: "Wes", year: 1988 },
    { name: "Kait", year: 1986 },
    { name: "Irv", year: 1970 },
    { name: "Lux", year: 2015 },
];
const comments = [
    { text: "Love this!", id: 523423 },
    { text: "Super good", id: 823423 },
    { text: "You are the best", id: 2039842 },
    { text: "Ramen is my fav food ever", id: 123523 },
    { text: "Nice Nice Nice!", id: 542328 },
];
//   Some and Every Checks
//   Array.prototype.some() // is at least one person is 19 or older?
//   return true if any single value satisfy condition
const isAdult = people.some((person) => new Date().getFullYear() - person.year >= 19);
console.log("Some Method");
console.log(isAdult);
//   Array.prototype.every() // is everyone 19 or older?
//   return true for every value , else false even single condition does'nt fullfill
const allAdults = people.every((person) => new Date().getFullYear() - person.year >= 19);
console.log("Every Method");
console.log(allAdults);
// Array.prototype.find()
// Find is like filter, but returns just the one you are looking for
// Find method return value,and holds true after becoming true it stops
// find the comment with the ID of 823423
const comment = comments.find((comment) => comment.id === 823423);
console.log("Find Method");
console.table(comment);
//   Array.prototype.findIndex()
//   Find the comment with this ID
//   delete the comment with the ID of 823423
const index = comments.findIndex((comment) => comment.id === 823423);
console.log("FindIndex Method");
console.table(index);
// const removedComment = comments.slice(index, 1);
// console.table(removedComment);
//Note splice vs slice method
//splice method change the original array.
//slice method doesn't affect to original array
const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1),
];
console.log("Slice Method");
console.table(newComments);

//This is a realistic person generator
//This program creates persons and allows you to create links between
//categories

//import functions
const generatePerson = require("./functions/index.js").generatePerson;
const generateAttribute = require("./functions/index.js").generateAttribute;

//Data
const ageGroups = ["Child", "Youth", "Adult", "Senior"];

const races = [
  ["*", "Indian"],
  ["*", "Chinese"],
  ["*", "Japanese"],
  ["*", "European"],
  ["*", "African"],
  ["*", "Latin"]
];

const religions = [
  ["*", "Hindu"],
  ["*", "Muslim"],
  ["*", "Christian"],
  ["*", "Buddhist"],
  ["*", "Atheist"],
  ["*", "Agnostic"]
];
const dailyOccupations = [
  ["Adult", "Cook"],
  ["Adult", "School teacher"],
  ["Youth Adult", "Rickshaw driver"],
  ["Youth", "High school student"],
  ["Child", "Kindergarten"],
  ["*", "Street dweller"],
  ["Adult", "Software developer"],
  ["Senior", "Retiree"]
];

const categories = [races, religions, dailyOccupations];
const randomIndex = Math.floor(Math.random() * ageGroups.length);

const ageGroup = ageGroups[randomIndex];

console.log(ageGroup, generatePerson(ageGroup, categories));

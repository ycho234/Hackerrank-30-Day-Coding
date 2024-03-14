// DAY 2 -OPERATORS
// Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip),
// and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost.
// Round the result to the nearest integer.

// Function Description
// Complete the solve function in the editor below.

// solve has the following parameters:

// int meal_cost: the cost of food before tip and tax
// int tip_percent: the tip percentage
// int tax_percent: the tax percentage
// Returns The function returns nothing. Print the calculated value, rounded to the nearest integer.

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

function solve(meal_cost, tip_percent, tax_percent) {
  // Write your code here
  var meal = meal_cost;
  var tip = tip_percent;
  var tax = tax_percent;

  // find the percent of the tip of the meal and add to the meal
  var mealTip = (meal / 100) * tip;
  var mealTax = (meal / 100) * tax;
  console.log(Math.round(meal + mealTip + mealTax));
}

function main() {
  const meal_cost = parseFloat(readLine().trim());

  const tip_percent = parseInt(readLine().trim(), 10);

  const tax_percent = parseInt(readLine().trim(), 10);

  solve(meal_cost, tip_percent, tax_percent);
}

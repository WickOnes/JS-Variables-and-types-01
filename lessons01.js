"use strick";

const banan = 15.678;

const apple = 123.965;

const beer = 90.2345;
// ----------------------

const sum = banan + apple + beer;

let number = "";

if (Math.floor(sum) % 2 == 0) {
    number = "парне";
} else {
    number = "Не парне";
}

const middleSum = sum / 3;

const discont = Math.random() * (50 - 10) + 10;

let sumDiscont = sum - (discont * sum) / 100;
let profit = sum / 2 - (sum - sumDiscont);
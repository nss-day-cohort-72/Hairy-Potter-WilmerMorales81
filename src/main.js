// Imports go first
import { makePottery } from './scripts/PotteryWheel.js';
import { firePottery } from './scripts/kiln.js';



// Make 5 pieces of pottery at the wheel

const potteryMug = makePottery('Mug', 1, 3);
console.log(potteryMug);
const firedPotteryMug = firePottery(potteryMug, 2100);

const potteryPlatter = makePottery('Platter', 5, 7);
console.log(potteryPlatter);
const firedPotteryPlatter = firePottery(potteryPlatter, 2300);

const potteryVase = makePottery('Vase', 2, 10);
console.log(potteryVase);
const firedPotteryVase = firePottery(potteryVase, 2200);

const potteryBowl = makePottery('Bowl', 3, 4);
console.log(potteryBowl);
const firedPotteryBowl = firePottery(potteryBowl, 2500);

const potteryPlate = makePottery('Plate', 2, 1);
console.log(potteryPlate);
const firedPotteryPlate = firePottery(potteryPlate, 2000);


// // Fire each piece of pottery in the kiln
console.log(firedPotteryMug);
console.log(firedPotteryPlatter);
console.log(firedPotteryVase);
console.log(firedPotteryBowl);
console.log(firedPotteryPlate);

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

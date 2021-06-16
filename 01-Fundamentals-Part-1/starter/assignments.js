/*let country = "United States";
const continent = "North America"
let population = 328.2;
const isIsland = false;
const language = "English";
console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);
console.log(language);*/
/*let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;
let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;
// let markHigherBMI = markBMI > johnBMI;
if(markBMI > johnBMI) {
    console.log(`Mark has the higher BMI of ${markBMI}.`);
} else {
    console.log(`John has the higher BMI of ${johnBMI}.`);
}*/
/*const language = "English";
switch (language) {
    case "Chinese":
        console.log("MOST number of native speakers");
        break;
    case "Spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "English":
        console.log("3rd place");
        break;
    case "Hindi":
        console.log("Number 4");
        break;
    case "Arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
        break;
}*/
let billTotal = 40;
let tipPercentage = 50 <= billTotal && billTotal >= 300 ? 0.15 : 0.2;
console.log(`The bill total is ${billTotal}.`);
console.log(`The amount you should tip is ${tipPercentage * billTotal}.`);
console.log(`The final total is ${billTotal + (tipPercentage * billTotal)}`);

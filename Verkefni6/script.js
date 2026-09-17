const destination = "Japan";
const days = 25;
const costPerDay = 350.00;
const hasDiscount = True;

let totalCost = days * costPerDay;
if (hasDiscount === True) {
    totalCost = totalCost * 0.9;
}

console.log("Áfangastaður:", destination);
console.log("Lokakostnaður:", totalCost);

if (totalCost > 100000) {
    console.log("Dýr ferð.");
} else {
    console.log("Innan fjárhags.");
}
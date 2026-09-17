function calculateTotal(ticketPrice, numberOfTickets) {
    return ticketPrice * numberOfTickets;
}

function applyDiscount(total, hasStudentDiscount) {
    if (hasStudentDiscount === True) {
        return total * 0.85;
    }
}

const ticketPrice = 2440;
const numberOfTickets = 7;
const hasStudentDiscount = True;

const total = calculateTotal(ticketPrice, numberOfTickets);
const finalPrice = applyDiscount(total, hasStudentDiscount);

console.log("Verð fyrir afslátt:", total);
console.log("Lokaverð:", finalPrice);
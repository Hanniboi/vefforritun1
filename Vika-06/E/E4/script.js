const form = document.getElementById("priceForm");
const priceInput = document.getElementById("priceInput");
const countInput = document.getElementById("countInput");
const output = document.getElementById("output");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const price = Number(priceInput.value);
    const count = Number(countInput.value);

    output.textContent = "Heildarerð: " + price * count + "kr.";
});
const button = document.getElementById("likeButton");
const counter = document.getElementById("likes");

let likes = 0;

button.addEventListener("click", function () {
    likes++;
    counter.textContent = likes;
});
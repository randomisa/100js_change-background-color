const button = document.querySelector(".button");

button.addEventListener("click", function() {

    const randomColors = '#'+Math.floor(Math.random()*16777215).toString(16);

    document.body.style.backgroundColor = randomColors;
    console.log("hello");
});
const btn = document.querySelector(".button");

btn.addEventListener("click", function (e) {
    console.log(e);
    const box = document.querySelector(".box");
    box.classList.toggle("active");
});

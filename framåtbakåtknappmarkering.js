const previousPage = document.getElementById("previousPage");
const nextPage = document.getElementById("nextPage");

previousPage.addEventListener("click", function () {
    previousPage.classList.add("active");
    nextPage.classList.remove("active");
});

nextPage.addEventListener("click", function () {
    nextPage.classList.add("active");
    previousPage.classList.remove("active");
});





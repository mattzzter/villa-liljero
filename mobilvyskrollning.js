function lockScroll(lock) {
    document.documentElement.style.overflowY = lock ? "hidden" : "";
    document.body.style.overflowY = lock ? "hidden" : "";
}





function myFunction() {
    const menu = document.getElementById("myLinks");
    const button = document.querySelector(".icon");

    const isOpen = menu.classList.toggle("show");

    lockScroll(isOpen);

    if (button) {
        button.classList.toggle("open", isOpen);
    }
}













document.querySelectorAll("#myLinks a").forEach(link => {
    link.addEventListener("click", () => {

        document.getElementById("myLinks").classList.remove("show");

        const button = document.querySelector(".icon");
        if (button) {
            button.classList.remove("open");
        }

        lockScroll(false);
    });
});














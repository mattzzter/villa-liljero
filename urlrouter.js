const pageOrder = [
    "hem",
    "kontakt",
    "airbnb",
    "blogg",
    "review"
];

let currentPage = currentPageFromHash();

const originalNavigate = navigate;

navigate = function(page) {
    currentPage = page;
    window.currentPage = page;
    localStorage.setItem("villaLiljeroLastPage", page);
    history.replaceState(null, "", `#${page === "review" ? "galleri&läge" : page}`);
    originalNavigate(page);
};

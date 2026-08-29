const pageByHash = {
    "#kontakt": "kontakt",
    "#hem": "hem",
    "#airbnb": "airbnb",
    "#blog": "blogg",
    "#blogg": "blogg",
    "#review": "review",
    "#galleri&läge": "review"
};

function showPageFromHash() {
    const hash = decodeURIComponent(window.location.hash).toLowerCase();
    const page = pageByHash[hash] || localStorage.getItem("villaLiljeroLastPage") || "hem";
    navigate(page);
}

window.addEventListener("hashchange", showPageFromHash);
window.addEventListener("DOMContentLoaded", showPageFromHash);

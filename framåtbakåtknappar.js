function currentPageFromHash() {
    const hash = decodeURIComponent(window.location.hash).toLowerCase();
    const page = {
        "#hem": "hem",
        "#kontakt": "kontakt",
        "#airbnb": "airbnb",
        "#blogg": "blogg",
        "#review": "review",
        "#galleri&läge": "review"
    }[hash];

    return page || window.currentPage || localStorage.getItem("villaLiljeroLastPage") || "hem";
}

function nextPage() {
    const index = pageOrder.indexOf(currentPageFromHash());
    if (index < pageOrder.length - 1) {
        navigate(pageOrder[index + 1]);
    }
}

function previousPage() {
    const index = pageOrder.indexOf(currentPageFromHash());
    if (index > 0) {
        navigate(pageOrder[index - 1]);
    }
}

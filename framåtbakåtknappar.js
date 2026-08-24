const pageOrder = [
    "hem",
    "kontakt",
    "airbnb",
    "blog",
    "review"
];

let currentPage = "hem";

const originalNavigate = navigate;

navigate = function(page){

    currentPage = page;

    originalNavigate(page);

};









function nextPage(){

    const index = pageOrder.indexOf(currentPage);

    if(index < pageOrder.length - 1){

        navigate(pageOrder[index + 1]);

    }

}

function previousPage(){

    const index = pageOrder.indexOf(currentPage);

    if(index > 0){

        navigate(pageOrder[index - 1]);

    }

}















function setActiveButton(buttonId){

    document.getElementById("previousPage").classList.add("activeclass");
    document.getElementById("nextPage").classList.add("activeclass");
document.getElementById("previousPage").classList.remove("activeclass");
    document.getElementById("nextPage").classList.remove("activeclass");
    

}








function nextPage(){

    setActiveButton("nextPage");

    const index = pageOrder.indexOf(currentPage);

    if(index < pageOrder.length - 1){

        navigate(pageOrder[index + 1]);

    }

}

function previousPage(){

    setActiveButton("previousPage");

    const index = pageOrder.indexOf(currentPage);

    if(index > 0){

        navigate(pageOrder[index - 1]);

    }

}



















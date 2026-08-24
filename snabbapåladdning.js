function preloadImage(src) {
    const img = new Image();
    img.src = src;
}


preloadImage("IMG_7998.jpg");
preloadImage("IMG_7999.jpg");



function nextPage(){

    const index = pageOrder.indexOf(currentPage);

    if(index < pageOrder.length - 1){

        const next = pageOrder[index + 1];

        if(next === "galleri & läge"){
            preloadPageImages([
                "IMG_7998.jpg",
                "IMG_7999.jpg"
            ]);
        }

        navigate(next);
    }
}
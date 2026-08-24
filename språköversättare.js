
function toggleLanguageMenu(){

    let menu = document.getElementById("languageMenu");

    let button = document.querySelector(".language-button");


    menu.style.display =
        menu.style.display === "block"
        ? "none"
        : "block";


    button.classList.toggle("open");

}



function changeLanguage(language, flag, name){


    document.getElementById("currentFlag").src =
        "flags/" + flag;


    document.getElementById("currentLanguage").textContent =
        name;



    document.getElementById("languageMenu").style.display="none";


    document.querySelector(".language-button")
    .classList.remove("open");



    document.querySelectorAll("[data-key]").forEach(element=>{

        let key = element.dataset.key;

        element.textContent =
        translations[language][key];

    });


    localStorage.setItem("language", language);

}







/*själva översättningen*/ 


const translations = {


sv: {

title: "Filmfantasterna",

description:
"Välkommen till Filmfantasterna där vi skriver om film.",

home:"Hem",

about:"Om oss",

contact:"Kontakt",

shop:"E-shop",

blog:"Blogg"

},



en: {

title:"Film Fans",

description:
"Welcome to Film Fans where we write about movies.",

home:"Home",

about:"About us",

contact:"Contact",

shop:"Shop",

blog:"Blog"

},



de: {

title:"Filmfans",

description:
"Willkommen bei Filmfans wo wir über Filme schreiben.",

home:"Startseite",

about:"Über uns",

contact:"Kontakt",

shop:"Shop",

blog:"Blog"

}


};

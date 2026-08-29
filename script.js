function navigate(page) {
  const content = document.getElementById('content');
      content.innerHTML = '<h1>Varmt välkomna till stugan Villa Liljero!</h1>';
   




  if (page === 'hem') {
    content.innerHTML = '<h1>Varmt välkomna till stugan Villa Liljero!</h1> <p class="indexcitat"> <em>"Denna stuga ger en naturnära, skön, ostörd och lugn vistelse på landet."</em> <br> - Besökare </p>, <img src="indexbild1.jpg" class="indexbild1" alt="" title="skog och vatten">, <img src="indexbild2.jpeg" class="indexbild2" alt="" title="landskap"><img src="indexbild3.jpg" class="indexbild3" alt=""> <div class="sun"></div> <div class="elfsight-app-4f41a36a-b7e8-4a2b-a663-680f49514741" data-elfsight-app-lazy title="vädervisning"></div>';

    document.getElementById('hem').classList.add('activeclass');
    
    document.getElementById('kontakt').classList.remove('activeclass');
    document.getElementById('airbnb').classList.remove('activeclass');
    document.getElementById('blogg').classList.remove('activeclass');
    document.getElementById('review').classList.remove('activeclass');


  } else if (page === 'kontakt') {
    content.innerHTML = '<h1>Kontakt</h1>, <p class="kontakttext">Kontaktperson beträffande frågor om uthyrning är Susanne Liljekvist Mattsson.</p> <img src="kontaktbild.png" alt="Ring, chatta, smsa, prata!" class="kontaktbild"><div class="sun"></div>';
    document.getElementById('hem').classList.remove('activeclass');
    document.getElementById('kontakt').classList.add('activeclass');
    document.getElementById('airbnb').classList.remove('activeclass');
    document.getElementById('blogg').classList.remove('activeclass');
    document.getElementById('review').classList.remove('activeclass');

  } else if (page === 'airbnb') {
    content.innerHTML = '<h1>AirBnB</h1><p class="airbnbtext">AirBnB är den tjänst som används för uthyrning av stugan.<br> <br>Priset för vistelsen är 1200 kr per natt.<br> <br>För de som inte vet något om AirBnB kan tjänsten nås via denne länk:<br> <a href="https://www.airbnb.se" class="airbnblänk">https://www.airbnb.se</a></p><img src="airbnb1.jpg" class="airbnbbild1" alt=""><img src="airbnb2.png" class=airbnbbild2 alt=""><div class="sun"></div>';
    document.getElementById('hem').classList.remove('activeclass');
    document.getElementById('kontakt').classList.remove('activeclass');
    document.getElementById('airbnb').classList.add('activeclass');
    document.getElementById('blogg').classList.remove('activeclass');
    document.getElementById('review').classList.remove('activeclass');


  } 


   else if (page === 'blog') {
    content.innerHTML = '<h1>Blogg</h1>  <div class="sun"></div>  <main class="content"> <section class="blogg-post"> <h2 class="förstadagen">11 juni 2026</h2> <p class="datumett">Här kan den som äger hemsidan lägga in nyheter, uppdateringar eller artiklar.</p> </section> <section class="blogg-post"> <h2 class="andradagen">18 juni 2026</h2> <p class="datumtvå">Varje nytt inlägg kan läggas till som en ny sektion eller i en lista nedan.</p> </section> <img src="bloggbild1.jpeg" class="bloggbild1" alt=""> <img src="bloggbild2.jpeg" class="bloggbild2" alt=""></main>';
    document.getElementById('hem').classList.remove('activeclass');
    document.getElementById('kontakt').classList.remove('activeclass');
    document.getElementById('airbnb').classList.remove('activeclass');
    document.getElementById('blogg').classList.add('activeclass');
    document.getElementById('review').classList.remove('activeclass');

  }



    else if (page === 'review') {
    content.innerHTML =' <h1>Galleri & läge</h1>     <div class="sun"></div>    <section class="stugansutsida">   <div class="juni2026rubrik"> <h2 class="juni2026rubrik">Stugans utsida</h2> </div>    <img src="IMG_7998.jpg" alt="Target image" class="galleribild1" class="target-image">      <p class="lägetext">Stugan ligger på adress Lången 113. Den är byggd högt upp med bokskog, gårdar och golfbana i närheten.</p> </section>      <section> <div class="box"></div><h2 class="stugansinsida">Stugans insida</h2><h2 class="stuganpåkartan">Stugan på kartan</h2><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2206.725510495235!2d12.787609193859275!3d56.420794271605715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465184dd225cef19%3A0x855f4e2be7979d48!2zTMOlbmdlbiAxMTMsIDI2OSA5NCBCw6VzdGFk!5e0!3m2!1ssv!2sse!4v1786910680393!5m2!1ssv!2sse" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" class="map-respnsive"></iframe><img src="insida1.jpg" class="insida1">'





    
    
    document.getElementById('hem').classList.remove('activeclass');
    document.getElementById('kontakt').classList.remove('activeclass');
    document.getElementById('airbnb').classList.remove('activeclass');
    document.getElementById('blogg').classList.remove('activeclass');
        document.getElementById('review').classList.add('activeclass');

}


}












document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    link.classList.add('clicked');
  });
});





























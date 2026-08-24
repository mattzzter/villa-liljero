function scrollToBottomArrow () {
window.scrollTo(0,500);
}







const topLink  = document.getElementById('scrollToTopLink');
const topImg   = document.getElementById('scrolltotoparrow');
const bottomImg = document.getElementById('scrolltobottomarrow');

// scrolla till toppen
topLink.addEventListener('click', (e) => {
  e.preventDefault(); // hindra # från att hoppa upp direkt
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // färg/effekt
  topImg.classList.add('active');
  bottomImg.classList.remove('active');
});

// scrolla till botten
bottomImg.addEventListener('click', () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

  // färg/effekt
  bottomImg.classList.add('active');
  topImg.classList.remove('active');
});
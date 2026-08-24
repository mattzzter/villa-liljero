
  let like = Number(localStorage.getItem("like")) || 0;
  let dislike = Number(localStorage.getItem("dislike")) || 0;
  let blank = Number(localStorage.getItem("blank")) || 0;

  const likeCount = document.getElementById("likeCount");
  const dislikeCount = document.getElementById("dislikeCount");
  const blankCount = document.getElementById("blankCount");

  function updateUI() {
    likeCount.textContent = like;
    dislikeCount.textContent = dislike;
    blankCount.textContent = blank;
  }

  document.getElementById("likeBtn").onclick = () => {
    like++;
    localStorage.setItem("like", like);
    updateUI();
  };

  document.getElementById("dislikeBtn").onclick = () => {
    dislike++;
    localStorage.setItem("dislike", dislike);
    updateUI();
  };

  document.getElementById("blankBtn").onclick = () => {
    blank++;
    localStorage.setItem("blank", blank);
    updateUI();
  };

  updateUI();



















  














const form = document.getElementById("reviewForm");
const reviewList = document.getElementById("reviewList");
const storageKey = "reviews";

function getReviews() {
  return JSON.parse(localStorage.getItem(storageKey) || "[]");
}

function saveReviews(reviews) {
  localStorage.setItem(storageKey, JSON.stringify(reviews));
}

function starText(rating) {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderReviews() {
  const reviews = getReviews();
  reviewList.innerHTML = reviews.map(review => `
    <div class="review-item">
      <div class="review-meta">
        Betyg: ${starText(review.rating)} · ${new Date(review.date).toLocaleDateString("sv-SE")}
      </div>
      <div class="stars">${starText(review.rating)}</div>
      <p>${escapeHtml(review.text)}</p>
    </div>
  `).join("");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const rating = Number(form.rating.value);
  const text = form.reviewText.value.trim();

  if (!rating || !text) return;

  const reviews = getReviews();
  reviews.unshift({
    rating,
    text,
    date: new Date().toISOString()
  });

  saveReviews(reviews);
  form.reset();
  renderReviews();
});

renderReviews();















document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reviewForm");
  const reviewList = document.getElementById("reviewList");
  const storageKey = "reviews";

  if (!form || !reviewList) return;

  function getReviews() {
    return JSON.parse(localStorage.getItem(storageKey) || "[]");
  }

  function saveReviews(reviews) {
    localStorage.setItem(storageKey, JSON.stringify(reviews));
  }

  function starText(rating) {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  }

  function escapeHtml(text) {
    return text
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function renderReviews() {
    const reviews = getReviews();

    if (!reviews.length) {
      reviewList.innerHTML = "<p>Inga recensioner än.</p>";
      return;
    }

    reviewList.innerHTML = reviews.map(review => `
      <div class="review-item">
        <div class="review-meta">
          ${new Date(review.date).toLocaleDateString("sv-SE")}
        </div>
        <div class="stars">${starText(review.rating)}</div>
        <p>${escapeHtml(review.text)}</p>
      </div>
    `).join("");
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const ratingInput = form.querySelector('input[name="rating"]:checked');
    const text = document.getElementById("reviewText").value.trim();

    if (!ratingInput || !text) return;

    const reviews = getReviews();
    reviews.unshift({
      rating: Number(ratingInput.value),
      text,
      date: new Date().toISOString()
    });

    saveReviews(reviews);
    form.reset();
    renderReviews();
  });

  renderReviews();
});












/*radera knapp läggs till*/


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reviewForm");
  const reviewList = document.getElementById("reviewList");
  const storageKey = "reviews";

  function getReviews() {
    return JSON.parse(localStorage.getItem(storageKey) || "[]");
  }

  function saveReviews(reviews) {
    localStorage.setItem(storageKey, JSON.stringify(reviews));
  }

  function escapeHtml(text) {
    return text
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function renderReviews() {
    const reviews = getReviews();

    if (!reviews.length) {
      reviewList.innerHTML = "<p>Inga recensioner än.</p>";
      return;
    }

    reviewList.innerHTML = reviews.map((review, index) => `
      <div class="review-item">
        <div class="review-meta">
          ${new Date(review.date).toLocaleDateString("sv-SE")}
        </div>
        <p>${escapeHtml(review.text)}</p>
        <button class="delete-review-btn" data-index="${index}">Radera</button>
      </div>
    `).join("");

    
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = document.getElementById("reviewText").value.trim();
    if (!text) return;

    const reviews = getReviews();
    reviews.unshift({
      text,
      date: new Date().toISOString()
    });

    saveReviews(reviews);
    form.reset();
    renderReviews();
  });

  renderReviews();
});







document.getElementById("resetVotesBtn").onclick = () => {
  like = 0;
  dislike = 0;
  blank = 0;

  localStorage.setItem("like", "0");
  localStorage.setItem("dislike", "0");
  localStorage.setItem("blank", "0");

  updateUI();
};













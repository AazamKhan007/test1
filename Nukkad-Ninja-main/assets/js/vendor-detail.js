function handleReview() {
  const isLoggedIn = localStorage.getItem("loggedIn");

  if (isLoggedIn === "true") {
    // Proceed to open review form (future modal or page)
    alert("You can now write a review!");
    // TODO: Open review modal or navigate to review.html
  } else {
    // Redirect or alert to login/signup
    const goLogin = confirm("You need to login or sign up to post a review. Go to login?");
    if (goLogin) {
      window.location.href = "login.html"; // replace with your actual login page
    }
  }
}



// *******************for Review************************

function handleReview() {
  const isLoggedIn = localStorage.getItem("loggedIn");

  if (isLoggedIn === "true") {
    document.getElementById("review-modal").classList.remove("hidden");
  } else {
    const goLogin = confirm("You need to login or sign up to post a review. Go to login?");
    if (goLogin) {
      window.location.href = "login.html";
    }
  }
}

function closeReviewModal() {
  document.getElementById("review-modal").classList.add("hidden");
}

function submitReview() {
  const rating = document.getElementById("rating").value;
  const comment = document.getElementById("comment").value;

  if (comment.trim() === "") {
    alert("Please enter a comment.");
    return;
  }

  // You could push this into a backend or array
  alert(`Review Submitted:\n⭐ ${rating}\n${comment}`);
  closeReviewModal();
}



// ********************Submit Review*************************

function submitReview() {
  const rating = document.getElementById("rating").value;
  const comment = document.getElementById("comment").value.trim();

  if (comment === "") {
    alert("Please enter a comment.");
    return;
  }

  const userName = "👤 Guest User"; // later use real login name

  const newReview = document.createElement("div");
  newReview.classList.add("review");
  newReview.innerHTML = `
    <p><strong>${userName} – ⭐ ${rating}</strong></p>
    <p>${comment}</p>
  `;

  document.querySelector(".review-section").appendChild(newReview);

  document.getElementById("rating").value = "5";
  document.getElementById("comment").value = "";
  closeReviewModal();
}


newReview.scrollIntoView({ behavior: "smooth" });

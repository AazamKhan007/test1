document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("location-popup");
  const vendorList = document.getElementById("vendor-list");
  const enableBtn = document.getElementById("enable-location-btn");

  // Show popup on load
  popup.classList.remove("hidden");
  vendorList.classList.add("blurred");

  enableBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
    vendorList.classList.remove("blurred");
    showDummyVendors();
  });
});

function showDummyVendors() {
  const container = document.getElementById("vendor-list");
  

 

  vendors.forEach(v => {
    const card = document.createElement("div");
    card.classList.add("vendor-card");

    card.innerHTML = `
      <img src="${v.image}" alt="${v.name}" />
      <div class="vendor-info">
        <h3>
          ${v.name}
          ${v.badge ? '<img src="assets/img/hygiene-badge.png" class="hygiene-badge" />' : ''}
        </h3>
        <p>
          <img src="assets/img/${v.foodType}-icon.png" class="food-icon" />
          ⭐ ${v.rating} • Best under ₹100
        </p>
        <p>${v.open} – ${v.close}</p>
        <p>📍 ${v.distance}m away</p>
      </div>
    `;

    const link = document.createElement("a");
    link.href = "vendor-detail.html";
    link.classList.add("vendor-card-link");
    link.appendChild(card);

    container.appendChild(link);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("wishlist-container");
  const clearBtn = document.getElementById("clear-wishlist");

  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  function renderWishlist() {
    container.innerHTML = "";

    if (wishlist.length === 0) {
      container.innerHTML = `<p style="font-size: 1.2rem;">😔 Your wishlist is empty.</p>`;
      return;
    }

    wishlist.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "wishlist-item";
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>${item.price}</p>
        <button class="remove-btn" data-id="${item.id}">Remove</button>
      `;
      container.appendChild(card);
    });

    
    const removeBtns = document.querySelectorAll(".remove-btn");
    removeBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        wishlist = wishlist.filter(item => item.id !== id);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        renderWishlist();
      });
    });
  }


  clearBtn.addEventListener("click", () => {
    if (confirm("Clear your entire wishlist?")) {
      localStorage.removeItem("wishlist");
      wishlist = [];
      renderWishlist();
    }
  });

  renderWishlist();
});

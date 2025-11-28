// Get current user
let user = sessionStorage.getItem("username");

if (!user) {
    document.getElementById("cartList").innerHTML =
        "<p class='empty'>Please login first!</p>";
}

// Create cart key
let cartKey = "cart_" + user;

// Get all cart items
let items = JSON.parse(localStorage.getItem(cartKey)) || [];

// ⭐ Update top title count
document.getElementById("cartCount").innerText =
    `Cart (${items.length} items)`;

// ⭐ Update cart badge (if available)
if (document.getElementById("cartBadge")) {
    document.getElementById("cartBadge").innerText = items.length;
}

let cartBox = document.getElementById("cartList");

// If empty cart
if (items.length === 0) {
    cartBox.innerHTML = `<p class="empty">Your cart is empty 😢</p>`;
} else {

    let total = 0;

    items.forEach((product, index) => {
        total += product.price;

        cartBox.innerHTML += `
            <div class="cart-item">
                <img src="${product.img}">
                <div class="item-info">
                    <h3>${product.name}</h3>
                    <p class="price">₹${product.price}</p>
                </div>

                <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    cartBox.innerHTML += `
        <div class="total-box">
            Total Amount: ₹${total}
        </div>
    `;
}

// ⭐ Remove function
function removeItem(index) {
    items.splice(index, 1);
    localStorage.setItem(cartKey, JSON.stringify(items));
    location.reload(); 
}

// Update Cart Badge
function updateCartBadge() {
    let user = sessionStorage.getItem("username");
    let badge = document.getElementById("cartBadge");

    if (!badge) return;

    if (user) {
        let cartKey = "cart_" + user;
        let items = JSON.parse(localStorage.getItem(cartKey)) || [];
        badge.innerText = items.length;
        badge.style.display = items.length > 0 ? "inline-block" : "none";
    } else {
        badge.innerText = 0;
        badge.style.display = "none";
    }
}

// Update Wishlist Badge
function updateWishlistBadge() {
    let user = sessionStorage.getItem("username");
    let badge = document.getElementById("wishlistBadge");

    if (!badge) return;

    if (user) {
        let wishlistKey = "wishlist_" + user;
        let items = JSON.parse(localStorage.getItem(wishlistKey)) || [];
        badge.innerText = items.length;
        badge.style.display = items.length > 0 ? "inline-block" : "none";
    } else {
        badge.innerText = 0;
        badge.style.display = "none";
    }
}

// Run both badge updates on page load
updateCartBadge();
updateWishlistBadge();

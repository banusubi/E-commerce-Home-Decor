// Check if user is logged in
function isLoggedIn() {
    return sessionStorage.getItem("loggedIn") === "true";
}

// Get current logged-in username
function getUser() {
    return sessionStorage.getItem("username");
}

// Add to Cart
function addToCart() {

    if (!isLoggedIn()) {
        alert("Please login first!");
        window.location.href = "Login.html";
        return;
    }

    let user = getUser();
    let cartKey = "cart_" + user;

    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

    let product = {
        name: "Wooden Modern Lamp",
        price: 2499,
        img: "Woodenlamp.jpg"
    };

    cart.push(product);
    localStorage.setItem(cartKey, JSON.stringify(cart));

    alert("Added to cart successfully!");
    window.location.href = "Cart.html";
}


// Add to Wishlist
function addToWishlist() {

    // if (!isLoggedIn()) {
    //     alert("Please login first!");
    //     window.location.href = "Login.html";
    //     return;
    // }

    let user = getUser();
    let wishlistKey = "wishlist_" + user;

    let wishlist = JSON.parse(localStorage.getItem(wishlistKey)) || [];

    let product = {
        name: "Wooden Modern Lamp",
        price: 2499,
        img: "Woodenlamp.jpg"
    };

    wishlist.push(product);
    localStorage.setItem(wishlistKey, JSON.stringify(wishlist));

    alert("Added to wishlist!");
    window.location.href = "Wishlist.html";
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
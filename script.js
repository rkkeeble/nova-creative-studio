// SUBSCRIBE BUTTON
document.addEventListener("DOMContentLoaded", function () {
    const subscribeBtn = document.getElementById("subscribe-btn");
    if (subscribeBtn) {
        subscribeBtn.addEventListener("click", function () {
            alert("Thank you for subscribing.");
        });
    }

    // ADD TO CART BUTTONS
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Item added to the cart.");
        });
    });

    // CLEAR CART BUTTON
    const clearCartBtn = document.getElementById("clear-cart");
    if (clearCartBtn) {
        clearCartBtn.addEventListener("click", function () {
            alert("Cart cleared.");
        });
    }

    // PROCESS ORDER BUTTON
    const processOrderBtn = document.getElementById("process-order");
    if (processOrderBtn) {
        processOrderBtn.addEventListener("click", function () {
            alert("Thank you for your order.");
        });
    }

    // CONTACT FORM SUBMIT BUTTON
    const contactForm = document.getElementById("contact-form");
const contactSubmit = document.getElementById("submit-btn");

if (contactSubmit && contactForm) {
  contactSubmit.addEventListener("click", function (event) {
    event.preventDefault(); // don't actually submit yet

    // This will show the browser's built-in validation messages
    if (contactForm.reportValidity()) {
      alert("Thank you for your message.");
    }
  });
}

// =========================
// SHOPPING CART USING SESSION STORAGE
// =========================

// Initialize cart on page load
let ItemsInCart = JSON.parse(sessionStorage.getItem("ItemsInCart")) || [];

// ADD TO CART buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
        let itemName = this.getAttribute("data-item");

        ItemsInCart.push(itemName);
        sessionStorage.setItem("ItemsInCart", JSON.stringify(ItemsInCart));

        alert(itemName + " added to cart.");
    });
});

// VIEW CART button
const viewCartBtn = document.getElementById("view-cart");
const cartModal = document.getElementById("cart-modal");
const cartContents = document.getElementById("cart-contents");

if (viewCartBtn) {
    viewCartBtn.addEventListener("click", function () {
        let cartData = JSON.parse(sessionStorage.getItem("ItemsInCart")) || [];
        cartContents.innerHTML = cartData.length
            ? cartData.join("<br>")
            : "Your cart is empty.";
        cartModal.style.display = "block";
    });
}

// CLEAR CART button
const clearCartBtn = document.getElementById("clear-cart");
if (clearCartBtn) {
    clearCartBtn.addEventListener("click", function () {
        ItemsInCart = [];
        sessionStorage.removeItem("ItemsInCart");

        cartContents.innerHTML = "Your cart is empty.";
        alert("Cart cleared.");
    });
}

// =========================
// CONTACT FORM — LOCAL STORAGE
// =========================

const contactForm = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");

if (submitBtn && contactForm) {
    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();

        if (contactForm.reportValidity()) {
            const customerData = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value
            };

            localStorage.setItem("CustomerOrder", JSON.stringify(customerData));

            alert("Thank you for your message!");
        }
    });
}
    

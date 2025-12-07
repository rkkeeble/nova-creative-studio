// Run everything after the DOM has loaded
document.addEventListener("DOMContentLoaded", function () {
    // =========================
    // SUBSCRIBE BUTTON
    // =========================
    const subscribeBtn = document.getElementById("subscribe-btn");
    if (subscribeBtn) {
        subscribeBtn.addEventListener("click", function () {
            alert("Thank you for subscribing.");
        });
    }

    // =========================
    // CONTACT FORM — VALIDATION + LOCAL STORAGE
    // =========================
    const contactForm = document.getElementById("contact-form");
    const submitBtn = document.getElementById("submit-btn");

    if (submitBtn && contactForm) {
        submitBtn.addEventListener("click", function (event) {
            event.preventDefault(); // prevent actual submit for now

            // show browser's built-in validation messages
            if (contactForm.reportValidity()) {
                const customerData = {
                    name: document.getElementById("name").value.trim(),
                    email: document.getElementById("email").value.trim(),
                    message: document.getElementById("message").value.trim()
                };

                // save to localStorage
                localStorage.setItem("CustomerOrder", JSON.stringify(customerData));

                alert("Thank you for your message!");
                contactForm.reset();
            }
        });
    }

    // =========================
    // SHOPPING CART — SESSION STORAGE
    // =========================

    // Load cart from sessionStorage or start empty
    let itemsInCart = JSON.parse(sessionStorage.getItem("ItemsInCart")) || [];

    function saveCart() {
        sessionStorage.setItem("ItemsInCart", JSON.stringify(itemsInCart));
    }

    function renderCart() {
        const cartContents = document.getElementById("cart-contents");
        if (!cartContents) return;

        if (itemsInCart.length === 0) {
            cartContents.innerHTML = "Your cart is empty.";
        } else {
            cartContents.innerHTML =
                "<ul><li>" + itemsInCart.join("</li><li>") + "</li></ul>";
        }
    }

    // ADD TO CART buttons (each has class="add-to-cart" and data-item="Name")
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const itemName = this.getAttribute("data-item") || "Item";
            itemsInCart.push(itemName);
            saveCart();
            alert(itemName + " added to cart.");
        });
    });

    // VIEW CART button (id="view-cart")
    const viewCartBtn = document.getElementById("view-cart");
    const cartModal = document.getElementById("cart-modal");
    const closeCartBtn = document.getElementById("close-cart");

    if (viewCartBtn && cartModal) {
        viewCartBtn.addEventListener("click", function () {
            // reload from storage in case new items were added
            itemsInCart = JSON.parse(sessionStorage.getItem("ItemsInCart")) || [];
            renderCart();
            cartModal.style.display = "block";
        });
    }

    // CLOSE CART button (id="close-cart")
    if (closeCartBtn && cartModal) {
        closeCartBtn.addEventListener("click", function () {
            cartModal.style.display = "none";
        });
    }

    // CLEAR CART button (id="clear-cart")
    const clearCartBtn = document.getElementById("clear-cart");
    if (clearCartBtn) {
        clearCartBtn.addEventListener("click", function () {
            itemsInCart = [];
            sessionStorage.removeItem("ItemsInCart");
            renderCart();
            alert("Cart cleared.");
        });
    }

    // PROCESS ORDER button (id="process-order")
    const processOrderBtn = document.getElementById("process-order");
    if (processOrderBtn) {
        processOrderBtn.addEventListener("click", function () {
            if (itemsInCart.length === 0) {
                alert("Your cart is empty.");
            } else {
                alert("Thank you for your order.");
            }
        });
    }
});

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

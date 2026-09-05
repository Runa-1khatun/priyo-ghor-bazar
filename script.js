let cart = [];

function addToCart(productName, price) {

    cart.push({
        name: productName,
        price: price
    });

    updateCart();

    alert(productName + " cart-এ যোগ হয়েছে!");
}


function updateCart() {

    document.getElementById("cart-count").innerText = cart.length;

    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((product, index) => {

        total += product.price;

        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${product.name}</span>

                <span>
                    ৳${product.price}

                    <button onclick="removeFromCart(${index})">
                        Remove
                    </button>
                </span>
            </div>
        `;
    });

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    }

    cartTotal.innerText = total;
}


function showCart() {

    document.getElementById("cart-popup").style.display = "flex";

    updateCart();
}


function closeCart() {

    document.getElementById("cart-popup").style.display = "none";
}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Checkout system আমরা পরের ধাপে তৈরি করব। ❤️");
}


function shopNow() {

    document.querySelector(".products").scrollIntoView({
        behavior: "smooth"
    });
}
function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    closeCart();

    document.getElementById("checkout-popup").style.display = "flex";
}


function closeCheckout() {

    document.getElementById("checkout-popup").style.display = "none";
}


function placeOrder(event) {

    event.preventDefault();

    const name = document.getElementById("customer-name").value;
    const phone = document.getElementById("customer-phone").value;
    const address = document.getElementById("customer-address").value;

    alert(
        "Order received! ❤️\n\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Address: " + address
    );

    cart = [];

    updateCart();

    closeCheckout();

    event.target.reset();
}
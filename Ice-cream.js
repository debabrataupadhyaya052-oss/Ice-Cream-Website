// ================= LANGUAGE DROPDOWN ================= //

const languageBtn = document.getElementById("languageBtn");

const languageMenu = document.getElementById("languageMenu");


languageBtn.addEventListener("click", function () {

    languageMenu.classList.toggle("show");

});


// Close when clicking outside

document.addEventListener("click", function (event) {

    if (!event.target.closest(".language-box")) {

        languageMenu.classList.remove("show");

    }

});

// ================= ACTIVE NAVBAR =================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});


// ================= ORDER BUTTON =================

const orderBtn = document.getElementById("orderBtn");

orderBtn.addEventListener("click", function () {

    alert("Thank you! Your ice-cream order section is ready.");

});


// ================= HERO BUTTON =================

function showMessage() {

    alert("Explore our delicious ice-cream flavours!");

}


// ================= SMALL ORDER BUTTONS =================

const smallButtons =
    document.querySelectorAll(".small-btn");

smallButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert("Your flavour has been selected!");

    });

});

// ================= ORDER BUTTON =================

const orderBtn = document.getElementById("orderBtn");

orderBtn.addEventListener("click", function () {

    alert("Thank you! Your ice-cream order is ready.");

});


// ================= LEARN MORE =================

const learnBtn = document.getElementById("learnBtn");

learnBtn.addEventListener("click", function () {

    alert(
        "Sweet Cream uses fresh ingredients and creates delicious flavours with love."
    );
});


// ================= EXPLORE FLAVOURS =================

const shopBtn = document.getElementById("shopBtn");

shopBtn.addEventListener("click", function () {

    window.location.href = "index.html#flavours";

});

// ================= FILTER BUTTONS =================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const products =
    document.querySelectorAll(".product-item");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active from all buttons

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        // Add active to clicked button

        this.classList.add("active");


        const category =
            this.getAttribute("data-category");


        let visibleProducts = 0;


        products.forEach(function (product) {

            const productCategory =
                product.getAttribute("data-category");


            if (
                category === "all" ||
                productCategory === category
            ) {

                product.style.display = "block";

                visibleProducts++;

            } else {

                product.style.display = "none";

            }

        });


        checkNoResult(visibleProducts);

    });

});


// ================= SEARCH =================

const searchInput =
    document.getElementById("searchInput");


searchInput.addEventListener("input", function () {

    const searchText =
        this.value.toLowerCase();

    let visibleProducts = 0;


    products.forEach(function (product) {

        const productName =
            product.getAttribute("data-name")
                .toLowerCase();


        if (productName.includes(searchText)) {

            product.style.display = "block";

            visibleProducts++;

        } else {

            product.style.display = "none";

        }

    });


    checkNoResult(visibleProducts);

});


// ================= NO RESULT =================

function checkNoResult(count) {

    const noResult =
        document.getElementById("noResult");


    if (count === 0) {

        noResult.style.display = "block";

    } else {

        noResult.style.display = "none";

    }

}


// ================= ADD TO CART =================

const addButtons =
    document.querySelectorAll(".add-btn");

const cartCount =
    document.getElementById("cartCount");
let cart = 0;


addButtons.forEach(function (button) {

    button.addEventListener("click", function () {
        cart++;
        cartCount.textContent = cart;
        this.textContent = "Added ✓";
        setTimeout(() => {
            this.textContent = "Add to Cart";
        }, 1000);
    });
});


// ================= CART BUTTON =================

const cartBtn =
    document.getElementById("cartBtn");
cartBtn.addEventListener("click", function () {
    alert(
        "You have " + cart + " item(s) in your cart."
    );
});

// ================= EXPLORE SPECIAL =================

const exploreBtn =
    document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", function () {

    document.getElementById("specialOffers")
        .scrollIntoView({
            behavior: "smooth"
        });

});


// ================= OFFER BUTTONS =================

const offerButtons =
    document.querySelectorAll(".offer-btn");

offerButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const product =
            this.closest(".offer-card")
                .querySelector("h3")
                .textContent;

        this.textContent = "Offer Selected ✓";

        this.style.background = "#222";

        alert(
            "Great choice! You selected " +
            product +
            "."
        );

    });

});


// ================= BUY SPECIAL =================

const buyBtn =
    document.getElementById("buyBtn");

buyBtn.addEventListener("click", function () {

    this.innerHTML =
        'Added to Cart <i class="fa-solid fa-check"></i>';

    this.style.background = "#222";

    alert(
        "Strawberry Dream has been added to your cart!"
    );

});


// ================= ORDER BUTTON =================

const orderBtn =
    document.getElementById("orderBtn");

orderBtn.addEventListener("click", function () {

    window.location.href = "shop.html";

});

// ================= READ BLOG BUTTON =================

document.getElementById("readBlogsBtn").addEventListener("click", function () {

    document.getElementById("blogs").scrollIntoView({
        behavior: "smooth"
    });

});


// ================= FILTER =================

const filterButtons = document.querySelectorAll(".filter-btn");
const blogItems = document.querySelectorAll(".blog-item");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Active button
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        const filter = this.getAttribute("data-filter");

        blogItems.forEach(function (item) {

            const category = item.getAttribute("data-category");

            if (filter === "all" || filter === category) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});


// ================= SEARCH =================

const searchInput = document.getElementById("searchInput");
const noResult = document.getElementById("noResult");

searchInput.addEventListener("keyup", function () {

    const searchText = this.value.toLowerCase();
    let found = false;

    blogItems.forEach(function (item) {

        const title = item.getAttribute("data-title").toLowerCase();

        if (title.includes(searchText)) {

            item.style.display = "block";
            found = true;

        } else {

            item.style.display = "none";

        }

    });

    if (found) {
        noResult.style.display = "none";
    } else {
        noResult.style.display = "block";
    }

});


// ================= READ MORE =================

const readButtons = document.querySelectorAll(".read-btn");

readButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const title = this.closest(".blog-card")
            .querySelector("h3").textContent;

        alert("You selected: " + title);

    });

});


// ================= SUBSCRIBE =================

document.getElementById("subscribeBtn").addEventListener("click", function () {

    const email = document.getElementById("emailInput").value;

    if (email === "") {

        alert("Please enter your email address.");

    } else {

        alert("Thank you for subscribing to Sweet Cream!");

        document.getElementById("emailInput").value = "";

    }

});

// ================= HERO BUTTON =================

document.getElementById("contactScrollBtn").addEventListener("click", function () {

    document.getElementById("contactSection").scrollIntoView({
        behavior: "smooth"
    });

});


// ================= CONTACT FORM =================

document.getElementById("contactForm").addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();


    if (name === "" ||
        email === "" ||
        phone === "" ||
        subject === "" ||
        message === "") {
        alert("Please fill all the fields.");
        return;
    }


    alert(
        "Thank you " + name +
        "! Your message has been sent to Sweet Cream."
    );
    document.getElementById("contactForm").reset();

});

// ================= SUBSCRIBE BUTTON =================

const subscribeBtn = document.getElementById("subscribeBtn");

subscribeBtn.addEventListener("click", function () {

    const emailInput = document.getElementById("emailInput");

    const email = emailInput.value.trim();


    if (email === "") {

        alert("Please enter your email address.");

        return;

    }


    if (!email.includes("@")) {

        alert("Please enter a valid email address.");

        return;

    }


    alert(
        "Thank you for subscribing to Sweet Cream! 🍦"
    );


    emailInput.value = "";

});


// ================= ORDER BUTTON =================

const orderButton = document.querySelector(".order-btn");

orderButton.addEventListener("click", function () {

    console.log("Opening Sweet Cream Shop...");

});


// ================= FOOTER SOCIAL BUTTONS =================

const socialLinks = document.querySelectorAll(".footer-social a");

socialLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        alert("Follow Sweet Cream on social media!");

    });

});
// ================= SPECIAL OFFER =================

document.getElementById("offerBtn").addEventListener("click", function () {

    document.getElementById("registrationForm")
        .scrollIntoView({
            behavior: "smooth"
        });

});


// ================= BUY BUTTON =================

const buyButtons = document.querySelectorAll(".buy-btn");

let selectedProduct = "";
let selectedPrice = 0;

buyButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        selectedProduct = this.getAttribute("data-product");

        selectedPrice = Number(
            this.getAttribute("data-price")
        );

        document.getElementById("selectedProduct").textContent =
            selectedProduct;

        document.getElementById("selectedPrice").textContent =
            "₹" + selectedPrice;

        document.getElementById("quantity").value = 1;

        updateTotal();


        const modal = new bootstrap.Modal(
            document.getElementById("purchaseModal")
        );

        modal.show();

    });

});


// ================= QUANTITY =================

document.getElementById("quantity")
    .addEventListener("input", function () {

        updateTotal();

    });


function updateTotal() {

    const quantity =
        Number(document.getElementById("quantity").value) || 1;

    const total = selectedPrice * quantity;

    document.getElementById("totalPrice").textContent =
        "₹" + total;

}


// ================= CONFIRM PURCHASE =================

document.getElementById("confirmPurchase")
    .addEventListener("click", function () {

        const quantity =
            document.getElementById("quantity").value;

        alert(
            "Thank you! 🎉\n\n" +
            "Product: " + selectedProduct + "\n" +
            "Quantity: " + quantity + "\n\n" +
            "Your order has been selected successfully!"
        );

    });


// ================= REGISTRATION =================

document.getElementById("registrationForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const flavour =
            document.getElementById("flavour").value;

        const offerCheck =
            document.getElementById("offerCheck").checked;


        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            flavour === ""
        ) {

            alert(
                "Please fill all required details."
            );

            return;

        }


        let message =
            "Welcome to Sweet Cream, " +
            name + "! 🍦\n\n" +
            "Favourite Flavour: " +
            flavour;


        if (offerCheck) {

            message +=
                "\n\n🎁 Your 20% OFF first-order offer is activated!";

        }


        alert(message);


        this.reset();

    });

// ================= CONTACT =================

const contactBtn =
    document.getElementById("contactBtn");
contactBtn.addEventListener("click", function () {

    alert(
        "Contact us: sweetcream@gmail.com"
    );
});
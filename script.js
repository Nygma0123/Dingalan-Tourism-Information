
// SHOW DESTINATION DETAILS
function showDetails(title, message) {
    alert(title + "\n\n" + message);
}

// SEARCH DESTINATIONS
function searchDestinations() {
    var input = document.getElementById("searchInput");
    var searchText = input.value.toLowerCase().trim();

    var cards = document.getElementsByClassName("destination");
    var count = 0;

    for (var i = 0; i < cards.length; i++) {
        var name = cards[i].getElementsByTagName("h3")[0]
            .innerText.toLowerCase();

        var description = cards[i].getElementsByTagName("p")[0]
            .innerText.toLowerCase();

        if (name.indexOf(searchText) !== -1 ||
            description.indexOf(searchText) !== -1) {

            cards[i].style.display = "block";
            count++;

        } else {
            cards[i].style.display = "none";
        }
    }

    document.getElementById("noResults").style.display =
        count === 0 ? "block" : "none";

    document.getElementById("destinations").scrollIntoView();
}

// FILTER BY CATEGORY
function filterCategory(category) {
    var cards = document.getElementsByClassName("destination");
    var count = 0;

    // Clear the search box
    document.getElementById("searchInput").value = "";

    for (var i = 0; i < cards.length; i++) {
        var cardCategory = cards[i].getAttribute("data-category");

        if (category === "All" || cardCategory === category) {
            cards[i].style.display = "block";
            count++;
        } else {
            cards[i].style.display = "none";
        }
    }

    document.getElementById("noResults").style.display =
        count === 0 ? "block" : "none";

    document.getElementById("destinations").scrollIntoView();
}

// BOOK A TOUR
function bookTour(name, price) {
    alert("Booking Inquiry\n\nTour: " + name +
          "\nPrice: " + price +
          "\n\nThank you for your interest!");
}

// NEWSLETTER SUBSCRIPTION
function subscribe() {
    var email = document.getElementById("emailInput").value.trim();

    if (email === "") {
        alert("Please enter your email address.");
    } else if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
    } else {
        alert("Thank you for subscribing!\nEmail: " + email);

        document.getElementById("emailInput").value = "";
    }
}

// RETURN TO TOP
function scrollToTop() {
    window.scrollTo(0, 0);
}

// ALLOW SEARCH USING THE ENTER KEY
document.getElementById("searchInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchDestinations();
    }
});

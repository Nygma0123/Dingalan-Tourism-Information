
/* SHOW DESTINATION DETAILS */
function showDetails(title, message) {
    alert(title + "\n\n" + message);
}

/* SEARCH DESTINATIONS */
function searchDestinations() {
    var searchInput = document.getElementById("searchInput");
    var searchText = searchInput.value.toLowerCase().trim();
    var cards = document.getElementsByClassName("destination");
    var count = 0;

    for (var i = 0; i < cards.length; i++) {
        var name = cards[i].getElementsByTagName("h3")[0]
            .textContent.toLowerCase();

        var description = cards[i].getElementsByTagName("p")[0]
            .textContent.toLowerCase();

        var category = cards[i].getAttribute("data-category")
            .toLowerCase();

        if (
            name.indexOf(searchText) !== -1 ||
            description.indexOf(searchText) !== -1 ||
            category.indexOf(searchText) !== -1
        ) {
            cards[i].style.display = "flex";
            count++;
        } else {
            cards[i].style.display = "none";
        }
    }

    document.getElementById("noResults").hidden = count !== 0;

    document.getElementById("destinations").scrollIntoView({
        behavior: "smooth"
    });
}

/* FILTER DESTINATIONS BY CATEGORY */
function filterCategory(category) {
    var cards = document.getElementsByClassName("destination");
    var count = 0;

    document.getElementById("searchInput").value = "";

    for (var i = 0; i < cards.length; i++) {
        var cardCategory = cards[i].getAttribute("data-category");

        if (category === "All" || cardCategory === category) {
            cards[i].style.display = "flex";
            count++;
        } else {
            cards[i].style.display = "none";
        }
    }

    document.getElementById("noResults").hidden = count !== 0;

    /* Highlight the selected category */
    var buttons = document.querySelectorAll(".category-buttons button");

    for (var j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove("active");
    }

    for (var k = 0; k < buttons.length; k++) {
        if (
            buttons[k].textContent.trim() === category ||
            (category === "All" &&
             buttons[k].textContent.trim() === "View All")
        ) {
            buttons[k].classList.add("active");
        }
    }

    document.getElementById("destinations").scrollIntoView({
        behavior: "smooth"
    });
}

/* TOUR INQUIRY */
function bookTour(name, price) {
    alert(
        "Tour Inquiry\n\n" +
        "Tour: " + name +
        "\nPrice: " + price +
        " per person\n\n" +
        "Thank you for your interest! " +
        "Please contact the local tour provider " +
        "to confirm availability and booking details."
    );
}

/* RETURN TO TOP */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

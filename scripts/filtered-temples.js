// Temple data
const temples = [
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah, USA",
        dedicated: "April 6, 1893",
        area: 253015,
        imageUrl: "https://example.com/saltlake.jpg",
    },
    {
        name: "Provo City Center Temple",
        location: "Provo, Utah, USA",
        dedicated: "March 20, 2016",
        area: 85000,
        imageUrl: "/Users/scotttow123/Documents/BYUI/wdd131/images/provo-city.jpeg",
    },
    {
        name: "Tokyo Japan Temple",
        location: "Tokyo, Japan",
        dedicated: "October 27, 1980",
        area: 52500,
        imageUrl: "https://example.com/tokyo.jpg",
    },
    {
        name: "Aba Nigeria Temple",
        location: "Aba, Nigeria",
        dedicated: "August 7, 2005",
        area: 11500,
        imageUrl: "https://example.com/aba.jpg",
    },
    {
        name: "Payson Utah Temple",
        location: "Payson, Utah, USA",
        dedicated: "June 7, 2015",
        area: 96630,
        imageUrl: "https://example.com/payson.jpg",
    },
    {
        name: "Manti Utah Temple",
        location: "Manti, Utah, USA",
        dedicated: "May 17, 1888",
        area: 74700,
        imageUrl: "https://example.com/manti.jpg",
    },
];

// DOM References
const templeCardsContainer = document.getElementById("temple-cards");
const filters = {
    home: () => temples,
    old: () => temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900),
    new: () => temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000),
    large: () => temples.filter(temple => temple.area > 90000),
    small: () => temples.filter(temple => temple.area < 10000),
};

// Format date to match "YYYY, Month, Day" format
function formatDate(dedicatedDate) {
    const date = new Date(dedicatedDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options).replace(",", "");
}

// Render temples dynamically with formatted data
function renderTemples(temples) {
    templeCardsContainer.innerHTML = ""; // Clear current cards
    temples.forEach(temple => {
        const templeCard = document.createElement("figure");
        templeCard.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
            <figcaption>
                <strong>${temple.name}</strong><br>
                Location: ${temple.location}<br>
                Dedicated: ${formatDate(temple.dedicated)}<br>
                Size: ${temple.area.toLocaleString()} sq ft
            </figcaption>`;
        templeCardsContainer.appendChild(templeCard);
    });
}

// Filter functionality
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const filterKey = event.target.id.replace("filter-", "");
        renderTemples(filters[filterKey]());
    });
});

// Initial render
renderTemples(temples);

// Footer updates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

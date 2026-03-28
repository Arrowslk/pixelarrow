// --- 1. Tute Covers දත්ත ---
const myProducts = [
    { id: 1, title: "A3 Tute Cover - Concept 01", oldPrice: 1000, newPrice: 600, img: "1science.jpg", category: "Education" },
    { id: 2, title: "A3 Tute Cover - Concept 02", oldPrice: 1000, newPrice: 600, img: "1maths.jpg", category: "Education" },
    { id: 3, title: "A3 Tute Cover - Concept 03", oldPrice: 1500, newPrice: 800, img: "1history.jpg", category: "Creative Tute" },
    { id: 4, title: "A3 Tute Cover - Concept 04", oldPrice: 1500, newPrice: 1000, img: "1music.jpg", category: "Creative Tute" },
    { id: 5, title: "A3 Tute Cover - Concept 05", oldPrice: 1100, newPrice: 500, img: "1english.jpg", category: "Game Over Edition" },
    { id: 6, title: "A3 Tute Cover - Concept 06", oldPrice: 1100, newPrice: 500, img: "1white.jpg", category: "Education" },
    { id: 7, title: "A3 Tute Cover - Concept 07", oldPrice: 1000, newPrice: 500, img: "eliphent design.png", category: "Education" },
    { id: 8, title: "A3 Tute Cover - Concept 08", oldPrice: 1000, newPrice: 500, img: "folower design.png", category: "Education" },
    { id: 9, title: "A3 Tute Cover - Concept 09", oldPrice: 1000, newPrice: 800, img: "biology design.jpg", category: "Education" },
    { id: 10, title: "A3 Tute Cover - Concept 10", oldPrice: 1000, newPrice: 800, img: "cargo ship design.png", category: "Education" }
];

// --- 2. Facebook Post Designs දත්ත ---
const fbPosts = [
    { id: 101, title: "Class Post 01", oldPrice: 1000, newPrice: 600, img: "BST POST.jpg", category: "Social Media" },
    { id: 102, title: "Class Post 02", oldPrice: 1000, newPrice: 600, img: "time table.jpg", category: "Social Media" },
    { id: 103, title: "Class Post 03", oldPrice: 1000, newPrice: 600, img: "onlineclass.png", category: "Social Media" }, 
    { id: 104, title: "Class Post 04", oldPrice: 1000, newPrice: 600, img: "BST POST.jpg", category: "Social Media" },
    { id: 105, title: "Class Post 05", oldPrice: 1000, newPrice: 800, img: "3guys.png", category: "Social Media" },
    { id: 105, title: "Class Post 06", oldPrice: 1000, newPrice: 800, img: "econpost2.jpg", category: "Social Media" }
];

const tuteGrid = document.getElementById('store-grid');
const fbGrid = document.getElementById('fb-post-grid');

function renderCards(dataList, container, isSmall = false) {
    if (!container) return;

// renderCards function එකේ map ඇතුළත මේ විදිහට වෙනස් කරන්න
container.innerHTML = dataList.map(p => {
    const discount = Math.round(((p.oldPrice - p.newPrice) / p.oldPrice) * 100);
    
    let cardClass = isSmall ? "product-card small-card" : "product-card";
    let imgContainerClass = "img-container";
    let inlineStyle = ""; // අලුතින් එක් කළා

    if (isSmall && (p.img === "3guys.jpg" || p.img === "3guys.png")) {
        cardClass += " wide-card";
        imgContainerClass += " auto-height";
        inlineStyle = 'style="grid-row: span 1; align-self: start;"'; // උස ඇදීම නවත්වයි
    }
        if (isSmall && (p.img === "econpost2.jpg" || p.img === "econpost2.png")) {
        cardClass += " wide-card";
        imgContainerClass += " auto-height";
        inlineStyle = 'style="grid-row: span 1; align-self: start;"'; // උස ඇදීම නවත්වයි
    }
    
    return `
    <div class="${cardClass}" ${inlineStyle}>
        <div class="${imgContainerClass}">
            <span class="badge">-${discount}% OFF</span>
            <img src="${p.img}" alt="${p.title}">
        </div>
        <div class="info-area">
            <div class="flex justify-center items-baseline gap-2">
                <span class="price-tag font-bold">Rs.${p.newPrice}</span>
                <span class="old-price line-through text-[10px]">Rs.${p.oldPrice}</span>
            </div>
            <h3 class="title-text">${p.title}</h3>
            <button onclick="orderViaWA(${p.id})" class="buy-btn">BUY NOW</button>
        </div>
    </div>`;
}).join(''); 
}

function orderViaWA(id) {
    const product = myProducts.find(p => p.id === id) || fbPosts.find(p => p.id === id);
    const phone = "94769819431"; 

    if (product) {
        const msg = encodeURIComponent(`Hello Pixel Arrow! \n\nI want to buy this design: \n*Product:* ${product.title} \n*Price:* Rs.${product.newPrice} \n\nPlease let me know the details.`);
        window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderCards(myProducts, tuteGrid, false);
    renderCards(fbPosts, fbGrid, true);
});

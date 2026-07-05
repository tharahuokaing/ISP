const packages = [
  {
        name: "FTTH Basic",
        type: "FTTH",
        speed: "100 Mbps",
        price: "$39.99/mo",
        description: "Fiber to the Home broadband for basic internet usage.",
        features: ["Basic Support", "50 Devices", "Standard Speed"],
        link: "https://github.com/tharahuokaing/ISP/blob/main/%E1%9E%9F%E1%9E%B7%E1%9E%A2%E1%9E%B6%E1%9E%9A%E1%9F%92%E1%9E%99%E1%9E%98%E1%9F%81%E1%9E%8F%E1%9F%92%E1%9E%9A%E1%9E%B8.jpg?raw=true",
        img: "សិអារ្យមេត្រី.jpg"
    },
    {
        name: "FTTH Plus",
        type: "FTTH",
        speed: "300 Mbps",
        price: "$59.99/mo",
        description: "Higher speed fiber connection ideal for multiple users.",
        features: ["Priority Support", "200 Devices", "Enhanced Speed"],
        link: "https://github.com/tharahuokaing/ISP/blob/main/%E1%9E%9F%E1%9E%B7%E1%9E%A2%E1%9E%B6%E1%9E%9A%E1%9F%92%E1%9E%99%E1%9E%98%E1%9F%81%E1%9E%8F%E1%9F%92%E1%9E%9A%E1%9E%B8.jpg?raw=true",
        img: "សិអារ្យមេត្រី.jpg"
    },
    {
        name: "PPPoE Standard",
        type: "PPPoE",
        speed: "200 Mbps",
        price: "$49.99/mo",
        description: "Standard PPPoE connection suitable for streaming and gaming.",
        features: ["Streaming Optimized", "Gaming Mode", "100 Devices"],
        link: "https://github.com/tharahuokaing/ISP/blob/main/%E1%9E%9F%E1%9E%B7%E1%9E%A2%E1%9E%B6%E1%9E%9A%E1%9F%92%E1%9E%99%E1%9E%98%E1%9F%81%E1%9E%8F%E1%9F%92%E1%9E%9A%E1%9E%B8.jpg?raw=true",
        img: "សិអារ្យមេត្រី.jpg"
    },
    {
        name: "PPPoE Pro",
        type: "PPPoE",
        speed: "500 Mbps",
        price: "$79.99/mo",
        description: "Premium PPPoE with enhanced stability and speed.",
        features: ["Premium Support", "Unlimited Devices", "Pro Stability"],
        link: "https://github.com/tharahuokaing/ISP/blob/main/%E1%9E%9F%E1%9E%B7%E1%9E%A2%E1%9E%B6%E1%9E%9A%E1%9F%92%E1%9E%99%E1%9E%98%E1%9F%81%E1%9E%8F%E1%9F%92%E1%9E%9A%E1%9E%B8.jpg?raw=true",
        img: "សិអារ្យមេត្រី.jpg"
    },
    {
        name: "DPLC Business",
        type: "DPLC",
        speed: "500 Mbps",
        price: "$89.99/mo",
        description: "Dedicated point-to-point leased connection for businesses.",
        features: ["Business Support", "Dedicated Line", "99.9% Uptime"],
        link: "https://github.com/tharahuokaing/ISP/blob/main/%E1%9E%9F%E1%9E%B7%E1%9E%A2%E1%9E%B6%E1%9E%9A%E1%9F%92%E1%9E%99%E1%9E%98%E1%9F%81%E1%9E%8F%E1%9F%92%E1%9E%9A%E1%9E%B8.jpg?raw=true",
        img: "សិអារ្យមេត្រី.jpg"
    },
    {
        name: "DPLC Enterprise",
        type: "DPLC",
        speed: "1 Gbps",
        price: "$149.99/mo",
        description: "High-speed DPLC for large enterprises and data centers.",
        features: ["Enterprise Support", "Data Center Ready", "99.99% Uptime"],
        link: "https://github.com/tharahuokaing/ISP/blob/main/%E1%9E%9F%E1%9E%B7%E1%9E%A2%E1%9E%B6%E1%9E%9A%E1%9F%92%E1%9E%99%E1%9E%98%E1%9F%81%E1%9E%8F%E1%9F%92%E1%9E%9A%E1%9E%B8.jpg?raw=true",
        img: "សិអារ្យមេត្រី.jpg"
    },
    {
        name: "IPLC Enterprise",
        type: "IPLC",
        speed: "1 Gbps",
        price: "$199.99/mo",
        description: "International private leased circuit for enterprise use.",
        features: ["Global Access", "International Routes", "24/7 Support"],
        link: "https://github.com/tharahuokaing/ISP/blob/main/%E1%9E%9F%E1%9E%B7%E1%9E%A2%E1%9E%B6%E1%9E%9A%E1%9F%92%E1%9E%99%E1%9E%98%E1%9F%81%E1%9E%8F%E1%9F%92%E1%9E%9A%E1%9E%B8.jpg?raw=true",
        img: "សិអារ្យមេត្រី.jpg"
    },
    {
        name: "Wireless LTE Basic",
        type: "Wireless LTE",
        speed: "50 Mbps",
        price: "$29.99/mo",
        description: "Wireless LTE connection ideal for mobile and rural users.",
        features: ["Mobile Ready", "Rural Coverage", "Basic Support"],
        link: "https://github.com/tharahuokaing/ISP/blob/main/%E1%9E%9F%E1%9E%B7%E1%9E%A2%E1%9E%B6%E1%9E%9A%E1%9F%92%E1%9E%99%E1%9E%98%E1%9F%81%E1%9E%8F%E1%9F%92%E1%9E%9A%E1%9E%B8.jpg?raw=true",
        img: "សិអារ្យមេត្រី.jpg"
    },
    {
        name: "Wireless LTE Premium",
        type: "Wireless LTE",
        speed: "150 Mbps",
        price: "$59.99/mo",
        description: "Faster LTE plan optimized for streaming and gaming.",
        features: ["Streaming Optimized", "Gaming Mode", "Premium Support"],
        link: "https://github.com/tharahuokaing/ISP/blob/main/%E1%9E%9F%E1%9E%B7%E1%9E%A2%E1%9E%B6%E1%9E%9A%E1%9F%92%E1%9E%99%E1%9E%98%E1%9F%81%E1%9E%8F%E1%9F%92%E1%9E%9A%E1%9E%B8.jpg?raw=true",
        img: "សិអារ្យមេត្រី.jpg"
    },
    {
        name: "6G Home Internet",
        type: "6G",
        speed: "1 Gbps",
        price: "$0.00/mo",
        description: "Ultra-fast next-generation fixed wireless internet for home use.",
        features: ["Next-Gen 6G", "Unlimited Data", "Future Ready"],
        link: "https://github.com/tharahuokaing/ISP/blob/main/%E1%9E%9F%E1%9E%B7%E1%9E%A2%E1%9E%B6%E1%9E%9A%E1%9F%92%E1%9E%99%E1%9E%98%E1%9F%81%E1%9E%8F%E1%9F%92%E1%9E%9A%E1%9E%B8.jpg?raw=true",
        img: "សិអារ្យមេត្រី.jpg"
    }
];

const grid = document.getElementById("package-grid");

packages.forEach(pkg => {
  const card = document.createElement("div");
  card.className = "package-card";

  card.innerHTML = `
    <img src="${pkg.img}" alt="${pkg.name}" class="package-img">
    <h2>${pkg.name}</h2>
    <p class="type">${pkg.type}</p>
    <p class="speed">${pkg.speed}</p>
    <p class="price">${pkg.price}</p>
    <p class="description">${pkg.description}</p>
    <ul class="features">
      ${pkg.features.map(f => `<li>${f}</li>`).join("")}
    </ul>
    <a href="${pkg.link}" target="_blank" class="details-link">View Details</a>
  `;
  grid.appendChild(card);
});

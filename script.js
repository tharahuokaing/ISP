const NEON_COLORS = ["var(--neon-cyan)", "var(--neon-purple)"];

const packages = [
  {
    name: "FTTH Basic",
    type: "FTTH",
    speed: "100 Mbps",
    price: "$39.99/mo",
    description: "Fiber to the Home broadband for basic internet usage.",
    link: "https://exampleisp.com/ftth-basic"
  },
  {
    name: "FTTH Plus",
    type: "FTTH",
    speed: "300 Mbps",
    price: "$59.99/mo",
    description: "Higher speed fiber connection ideal for multiple users.",
    link: "https://exampleisp.com/ftth-plus"
  },
  {
    name: "PPPoE Standard",
    type: "PPPoE",
    speed: "200 Mbps",
    price: "$49.99/mo",
    description: "Standard PPPoE connection suitable for streaming and gaming.",
    link: "https://exampleisp.com/pppoe-standard"
  },
  {
    name: "PPPoE Pro",
    type: "PPPoE",
    speed: "500 Mbps",
    price: "$79.99/mo",
    description: "Premium PPPoE with enhanced stability and speed.",
    link: "https://exampleisp.com/pppoe-pro"
  },
  {
    name: "DPLC Business",
    type: "DPLC",
    speed: "500 Mbps",
    price: "$89.99/mo",
    description: "Dedicated point-to-point leased connection for businesses.",
    link: "https://exampleisp.com/dplc-business"
  },
  {
    name: "DPLC Enterprise",
    type: "DPLC",
    speed: "1 Gbps",
    price: "$149.99/mo",
    description: "High-speed DPLC for large enterprises and data centers.",
    link: "https://exampleisp.com/dplc-enterprise"
  },
  {
    name: "IPLC Enterprise",
    type: "IPLC",
    speed: "1 Gbps",
    price: "$199.99/mo",
    description: "International private leased circuit for enterprise use.",
    link: "https://exampleisp.com/ip-lic-enterprise"
  },
  {
    name: "Wireless LTE Basic",
    type: "Wireless LTE",
    speed: "50 Mbps",
    price: "$29.99/mo",
    description: "Wireless LTE connection ideal for mobile and rural users.",
    link: "https://exampleisp.com/lte-basic"
  },
  {
    name: "Wireless LTE Premium",
    type: "Wireless LTE",
    speed: "150 Mbps",
    price: "$59.99/mo",
    description: "Faster LTE plan optimized for streaming and gaming.",
    link: "https://exampleisp.com/lte-premium"
  },
{
  name: "6G Home Internet",
  type: "6G",
  speed: "1 Gbps",
  price: "$00.00/mo",
  description: "Ultra-fast next-generation fixed wireless internet for home use.",
  link: "https://exampleisp.com/6g-home"
}
];

// Dynamically render package cards
function renderPackages() {
  const container = document.getElementById('package-grid');
  if (!container) return;

  container.innerHTML = '';

  packages.forEach(pkg => {
    const card = document.createElement('div');
    card.className = 'package-card';

    card.innerHTML = `
      <h2>${pkg.name}</h2>
      <p><strong>Type:</strong> ${pkg.type}</p>
      <p><strong>Speed:</strong> ${pkg.speed}</p>
      <p><strong>Price:</strong> ${pkg.price}</p>
      <p>${pkg.description}</p>
      <button onclick="initiateProtocol('${pkg.name}', '${pkg.link}')">Activate</button>
    `;

    container.appendChild(card);
  });
}

async function initiateProtocol(pkgName, targetUrl) {
  const display = document.getElementById('ip-display');
  display.innerHTML = `<span style="color:white">-- INITIALIZING ${pkgName.toUpperCase()} LINK --</span>`;

  const steps = [
    "1. CONTACTING NETWORK_CORE...",
    `2. LOADING ${pkgName.toUpperCase().replace(/\s+/g, "_")}_MODULE...`,
    `3. VERIFYING USER: ${pkgName.toUpperCase()}...`,
    "4. BYPASSING FIREWALLS...",
    "5. ESTABLISHING SECURE TUNNEL...",
    "6. GENERATING VIRTUAL IP POOL...",
    "7. SYNCING WITH BILLING SERVER...",
    "8. ENCRYPTING DATA CHANNEL...",
    `9. OPENING GATEWAY FOR: ${pkgName.toUpperCase()}`,
    "10. REDIRECTING TO SERVICE PORTAL..."
  ];

  for (let i = 0; i < steps.length; i++) {
    const line = document.createElement('div');
    line.style.color = NEON_COLORS[i % 2];
    line.innerText = `> ${steps[i]}`;
    display.appendChild(line);
    display.scrollTop = display.scrollHeight;

    if (i === 4) {
      document.body.style.filter = "hue-rotate(90deg) brightness(1.5)";
      setTimeout(() => { document.body.style.filter = "none"; }, 200);
    }

    if (i === steps.length - 1) {
      console.log(`[GATEWAY_OPEN]: Redirecting to ${targetUrl}`);
      document.body.classList.add('glitch-out');
    }

    await new Promise(resolve => setTimeout(resolve, 250));
  }

  document.body.style.backgroundColor = "var(--neon-cyan)";
  setTimeout(() => {
    window.location.href = targetUrl;
  }, 800);
}

// Display remaining Coordinated Universal Time (UTC) count down with a stability bar
function startEpochMonitor() {
  const container = document.querySelector('.hologram-container');
  if (!container) return;

  const epochDisplay = document.createElement('div');
  epochDisplay.id = 'epoch-stabilizer';
  container.prepend(epochDisplay);

  // Maximum signed 32-bit integer Coordinated Universal Time (UTC) (Y2K38 problem)
  const y2k38Limit = 2147483647;

  setInterval(() => {
    const now = Math.floor(Date.now() / 1000);
    const remaining = Math.max(0, y2k38Limit - now);

    epochDisplay.innerHTML = `
      <div style="font-size: 0.6rem; color: var(--neon-purple);">CORE_TIME_STABILITY: 64-BIT_ARMED</div>
      <div style="letter-spacing: 2px;">
          Coordinated Universal Time (UTC) REMAINING: <span style="color:white">${remaining.toLocaleString()}</span> SEC
      </div>
      <div class="stability-bar">
          <div class="fill" style="width: ${(remaining / y2k38Limit) * 100}%;"></div>
      </div>
    `;
  }, 1000);
}

// Placeholder for any network matrix animations or visual effects
function startNetworkMatrix() {
  // Optional: implement matrix rain or cyber background effect here
}

window.onload = () => {
  renderPackages();
  startNetworkMatrix();
  startEpochMonitor();
};

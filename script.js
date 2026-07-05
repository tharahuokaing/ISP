/* ============================================
   HUOKAING THARA | Future ISP - MASTER SCRIPT
   ============================================ */

'use strict';

/* ============================================
   CONFIGURATION & CONSTANTS
   ============================================ */
const CONFIG = {
    NEON_COLORS: ['var(--neon-cyan)', 'var(--neon-purple)'],
    ANIMATION_DELAY: 250,
    REDIRECT_DELAY: 800,
    EFFECT_DURATION: 200,
    UTC_CHECK_INTERVAL: 1000,
    Y2K38_LIMIT: 2147483647, // Maximum signed 32-bit integer
    DEBUG_MODE: false
};

/* ============================================
   PACKAGE DATA
   ============================================ */
const packages = [
    {
        name: "FTTH Basic",
        type: "FTTH",
        speed: "100 Mbps",
        price: "$39.99/mo",
        description: "Fiber to the Home broadband for basic internet usage.",
        features: ["Basic Support", "50 Devices", "Standard Speed"],
        link: "https://github.com/tharahuokaing/ISP/blob/main/%E1%9E%9F%E1%9E%B7%E1%9E%A2%E1%9E%B6%E1%9E%9A%E1%9F%92%E1%9E%99%E1%9E%98%E1%9F%81%E1%9E%8F%E1%9F%92%E1%9E%9A%E1%9E%B8.jpg?raw=true"
    },
    {
        name: "FTTH Plus",
        type: "FTTH",
        speed: "300 Mbps",
        price: "$59.99/mo",
        description: "Higher speed fiber connection ideal for multiple users.",
        features: ["Priority Support", "200 Devices", "Enhanced Speed"],
        link: "https://github.com/tharahuokaing/ISP/blob/main/%E1%9E%9F%E1%9E%B7%E1%9E%A2%E1%9E%B6%E1%9E%9A%E1%9F%92%E1%9E%99%E1%9E%98%E1%9F%81%E1%9E%8F%E1%9F%92%E1%9E%9A%E1%9E%B8.jpg?raw=true"
    },
    {
        name: "PPPoE Standard",
        type: "PPPoE",
        speed: "200 Mbps",
        price: "$49.99/mo",
        description: "Standard PPPoE connection suitable for streaming and gaming.",
        features: ["Streaming Optimized", "Gaming Mode", "100 Devices"],
        link: "https://github.com/tharahuokaing/ISP/blob/main/%E1%9E%9F%E1%9E%B7%E1%9E%A2%E1%9E%B6%E1%9E%9A%E1%9F%92%E1%9E%99%E1%9E%98%E1%9F%81%E1%9E%8F%E1%9F%92%E1%9E%9A%E1%9E%B8.jpg?raw=true"
    },
    {
        name: "PPPoE Pro",
        type: "PPPoE",
        speed: "500 Mbps",
        price: "$79.99/mo",
        description: "Premium PPPoE with enhanced stability and speed.",
        features: ["Premium Support", "Unlimited Devices", "Pro Stability"],
        link: "https://github.com/tharahuokaing/ISP/blob/main/%E1%9E%9F%E1%9E%B7%E1%9E%A2%E1%9E%B6%E1%9E%9A%E1%9F%92%E1%9E%99%E1%9E%98%E1%9F%81%E1%9E%8F%E1%9F%92%E1%9E%9A%E1%9E%B8.jpg?raw=true"
    },
    {
        name: "DPLC Business",
        type: "DPLC",
        speed: "500 Mbps",
        price: "$89.99/mo",
        description: "Dedicated point-to-point leased connection for businesses.",
        features: ["Business Support", "Dedicated Line", "99.9% Uptime"],
        link: "https://github.com/tharahuokaing/ISP/blob/main/%E1%9E%9F%E1%9E%B7%E1%9E%A2%E1%9E%B6%E1%9E%9A%E1%9F%92%E1%9E%99%E1%9E%98%E1%9F%81%E1%9E%8F%E1%9F%92%E1%9E%9A%E1%9E%B8.jpg?raw=true"
    },
    {
        name: "DPLC Enterprise",
        type: "DPLC",
        speed: "1 Gbps",
        price: "$149.99/mo",
        description: "High-speed DPLC for large enterprises and data centers.",
        features: ["Enterprise Support", "Data Center Ready", "99.99% Uptime"],
        link: "https://github.com/tharahuokaing/ISP/blob/main/%E1%9E%9F%E1%9E%B7%E1%9E%A2%E1%9E%B6%E1%9E%9A%E1%9F%92%E1%9E%99%E1%9E%98%E1%9F%81%E1%9E%8F%E1%9F%92%E1%9E%9A%E1%9E%B8.jpg?raw=true"
    },
    {
        name: "IPLC Enterprise",
        type: "IPLC",
        speed: "1 Gbps",
        price: "$199.99/mo",
        description: "International private leased circuit for enterprise use.",
        features: ["Global Access", "International Routes", "24/7 Support"],
        link: "https://github.com/tharahuokaing/ISP/blob/main/%E1%9E%9F%E1%9E%B7%E1%9E%A2%E1%9E%B6%E1%9E%9A%E1%9F%92%E1%9E%99%E1%9E%98%E1%9F%81%E1%9E%8F%E1%9F%92%E1%9E%9A%E1%9E%B8.jpg?raw=true"
    },
    {
        name: "Wireless LTE Basic",
        type: "Wireless LTE",
        speed: "50 Mbps",
        price: "$29.99/mo",
        description: "Wireless LTE connection ideal for mobile and rural users.",
        features: ["Mobile Ready", "Rural Coverage", "Basic Support"],
        link: "https://github.com/tharahuokaing/ISP/blob/main/%E1%9E%9F%E1%9E%B7%E1%9E%A2%E1%9E%B6%E1%9E%9A%E1%9F%92%E1%9E%99%E1%9E%98%E1%9F%81%E1%9E%8F%E1%9F%92%E1%9E%9A%E1%9E%B8.jpg?raw=true"
    },
    {
        name: "Wireless LTE Premium",
        type: "Wireless LTE",
        speed: "150 Mbps",
        price: "$59.99/mo",
        description: "Faster LTE plan optimized for streaming and gaming.",
        features: ["Streaming Optimized", "Gaming Mode", "Premium Support"],
        link: "https://github.com/tharahuokaing/ISP/blob/main/%E1%9E%9F%E1%9E%B7%E1%9E%A2%E1%9E%B6%E1%9E%9A%E1%9F%92%E1%9E%99%E1%9E%98%E1%9F%81%E1%9E%8F%E1%9F%92%E1%9E%9A%E1%9E%B8.jpg?raw=true"
    },
    {
        name: "6G Home Internet",
        type: "6G",
        speed: "1 Gbps",
        price: "$0.00/mo",
        description: "Ultra-fast next-generation fixed wireless internet for home use.",
        features: ["Next-Gen 6G", "Unlimited Data", "Future Ready"],
        link: "https://github.com/tharahuokaing/ISP/blob/main/%E1%9E%9F%E1%9E%B7%E1%9E%A2%E1%9E%B6%E1%9E%9A%E1%9F%92%E1%9E%99%E1%9E%98%E1%9F%81%E1%9E%8F%E1%9F%92%E1%9E%9A%E1%9E%B8.jpg?raw=true"
    }
];

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */
const Utils = {
    // Log with debug mode check
    log(message, type = 'info') {
        if (CONFIG.DEBUG_MODE) {
            console.log(`[${type.toUpperCase()}] ${message}`);
        }
    },

    // Format number with locale
    formatNumber(num) {
        return num.toLocaleString();
    },

    // Convert string to safe identifier
    toIdentifier(str) {
        return str.replace(/\s+/g, '_').toUpperCase();
    },

    // Get random neon color
    getNeonColor(index) {
        return CONFIG.NEON_COLORS[index % CONFIG.NEON_COLORS.length];
    },

    // Sleep utility for async
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    // Check if element exists
    exists(element) {
        return element !== null && element !== undefined;
    }
};

/* ============================================
   PACKAGE RENDERER
   ============================================ */
class PackageRenderer {
    constructor() {
        this.container = document.getElementById('package-grid');
        this.packagesContainer = document.getElementById('packages-container');
    }

    render() {
        if (!Utils.exists(this.container)) {
            Utils.log('Package grid container not found', 'error');
            return;
        }

        // Create packages container if it doesn't exist
        if (!Utils.exists(this.packagesContainer)) {
            this.packagesContainer = document.createElement('div');
            this.packagesContainer.className = 'packages-container';
            this.packagesContainer.id = 'packages-container';
            this.container.appendChild(this.packagesContainer);
        }

        this.packagesContainer.innerHTML = '';

        // Render each package
        packages.forEach((pkg, index) => {
            const card = this.createPackageCard(pkg, index);
            this.packagesContainer.appendChild(card);
        });

        Utils.log(`Rendered ${packages.length} packages`, 'success');
    }

    createPackageCard(pkg, index) {
        const card = document.createElement('div');
        card.className = 'package-card';
        card.setAttribute('data-package-type', pkg.type);
        card.setAttribute('data-index', index);
        card.setAttribute('role', 'article');
        card.setAttribute('aria-label', `${pkg.name} - ${pkg.speed}`);

        // Add hover animation
        card.addEventListener('mouseenter', () => {
            card.style.animation = 'none';
        });

        card.innerHTML = `
            <h2>${pkg.name}</h2>
            <p class="package-type"><strong>Type:</strong> ${pkg.type}</p>
            <p class="speed">${pkg.speed}</p>
            <p class="price">${pkg.price}</p>
            <p class="description">${pkg.description}</p>
            ${this.renderFeatures(pkg.features)}
            <button 
                class="activate-btn" 
                onclick="Network.initiateProtocol('${pkg.name}', '${pkg.link}')"
                aria-label="Activate ${pkg.name}"
            >
                ACTIVATE
            </button>
        `;

        return card;
    }

    renderFeatures(features) {
        if (!features || features.length === 0) return '';

        return `
            <ul class="features">
                ${features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;
    }
}

/* ============================================
   NETWORK PROTOCOL MANAGER
   ============================================ */
class NetworkProtocolManager {
    constructor() {
        this.display = null;
        this.isProcessing = false;
        this.initializeDisplay();
    }

    initializeDisplay() {
        this.display = document.getElementById('ip-display');
    }

    async initiateProtocol(pkgName, targetUrl) {
        // Prevent multiple activations
        if (this.isProcessing) {
            Utils.log('Protocol already in progress', 'warning');
            return;
        }

        this.isProcessing = true;
        this.initializeDisplay();

        // Validate inputs
        if (!pkgName || !targetUrl) {
            Utils.log('Invalid package name or URL', 'error');
            this.showError('Invalid package configuration');
            this.isProcessing = false;
            return;
        }

        try {
            // Initialize connection
            this.display.innerHTML = `
                <span style="color: white;">
                    -- INITIALIZING ${pkgName.toUpperCase()} LINK --
                </span>
            `;

            // Execute connection steps
            await this.executeConnectionSteps(pkgName);

            // Redirect to target
            await this.redirectToService(targetUrl, pkgName);

        } catch (error) {
            Utils.log(`Protocol error: ${error.message}`, 'error');
            this.showError('Connection failed: ' + error.message);
        } finally {
            this.isProcessing = false;
        }
    }

    async executeConnectionSteps(pkgName) {
        const steps = [
            "1. CONTACTING NETWORK_CORE...",
            `2. LOADING ${this.toIdentifier(pkgName)}_MODULE...`,
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
            await this.addStepLine(steps[i], i);
            
            // Apply visual effect at step 5
            if (i === 4) {
                await this.applyVisualEffect();
            }

            // Trigger glitch on final step
            if (i === steps.length - 1) {
                Utils.log(`[GATEWAY_OPEN]: Redirecting to ${targetUrl}`, 'info');
                document.body.classList.add('glitch-out');
            }

            // Wait for animation
            await Utils.sleep(CONFIG.ANIMATION_DELAY);
        }
    }

    async addStepLine(stepText, index) {
        const line = document.createElement('div');
        line.style.color = Utils.getNeonColor(index);
        line.textContent = `> ${stepText}`;
        line.setAttribute('role', 'status');
        
        this.display.appendChild(line);
        this.display.scrollTop = this.display.scrollHeight;
    }

    async applyVisualEffect() {
        document.body.style.filter = "hue-rotate(90deg) brightness(1.5)";
        await Utils.sleep(CONFIG.EFFECT_DURATION);
        document.body.style.filter = "none";
    }

    async redirectToService(targetUrl, pkgName) {
        // Apply background color change
        document.body.style.backgroundColor = "var(--neon-cyan)";
        
        Utils.log(`[REDIRECT]: Navigating to ${pkgName} service portal`, 'info');
        
        await Utils.sleep(CONFIG.REDIRECT_DELAY);
        
        // Navigate to target
        window.location.href = targetUrl;
    }

    showError(message) {
        this.display.innerHTML = `
            <span style="color: red;">
                ⚠️ ERROR: ${message}
            </span>
        `;
    }

    toIdentifier(str) {
        return Utils.toIdentifier(str);
    }
}

/* ============================================
   EPOCH MONITOR (UTC COUNTDOWN)
   ============================================ */
class EpochMonitor {
    constructor() {
        this.container = null;
        this.epochDisplay = null;
        this.intervalId = null;
    }

    start() {
        this.container = document.querySelector('.hologram-container');
        
        if (!Utils.exists(this.container)) {
            Utils.log('Hologram container not found', 'error');
            return;
        }

        // Create epoch stabilizer if it doesn't exist
        if (!Utils.exists(this.epochDisplay)) {
            this.epochDisplay = document.createElement('div');
            this.epochDisplay.id = 'epoch-stabilizer';
            this.container.prepend(this.epochDisplay);
        }

        // Start UTC countdown
        this.intervalId = setInterval(() => this.updateEpoch(), CONFIG.UTC_CHECK_INTERVAL);
        
        Utils.log('Epoch monitor started', 'success');
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            Utils.log('Epoch monitor stopped', 'info');
        }
    }

    updateEpoch() {
        const now = Math.floor(Date.now() / 1000);
        const remaining = Math.max(0, CONFIG.Y2K38_LIMIT - now);
        const percentage = (remaining / CONFIG.Y2K38_LIMIT) * 100;

        this.epochDisplay.innerHTML = `
            <div style="font-size: 0.6rem; color: var(--neon-purple);">
                CORE_TIME_STABILITY: 64-BIT_ARMED
            </div>
            <div style="letter-spacing: 2px; margin: 8px 0;">
                Coordinated Universal Time (UTC) REMAINING: 
                <span style="color: white; font-weight: bold;">
                    ${Utils.formatNumber(remaining)}
                </span> SEC
            </div>
            <div class="stability-bar">
                <div class="fill" style="width: ${percentage.toFixed(2)}%;"></div>
            </div>
        `;
    }
}

/* ============================================
   NETWORK MATRIX EFFECTS
   ============================================ */
class NetworkMatrix {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.animationId = null;
    }

    start() {
        // Optional: implement matrix rain or cyber background effect
        Utils.log('Network matrix effects initialized', 'info');
        
        // You can add canvas-based animations here
        // Example: matrix rain, network nodes, data streams
    }

    stop() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    // Example: Create floating particles
    createParticles(count = 50) {
        const container = document.querySelector('.hologram-container');
        if (!Utils.exists(container)) return;

        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '2px';
            particle.style.height = '2px';
            particle.style.background = Utils.getNeonColor(i);
            particle.style.opacity = '0.5';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animation = `float ${3 + Math.random() * 2}s infinite ease-in-out`;
            
            container.appendChild(particle);
            this.particles.push(particle);
        }
    }
}

/* ============================================
   SECURITY MANAGER
   ============================================ */
class SecurityManager {
    constructor() {
        this.verified = false;
        this.securityLayer = null;
        this.mainInterface = null;
    }

    initialize() {
        this.securityLayer = document.getElementById('security-layer');
        this.mainInterface = document.getElementById('main-interface');
    }

    verify(token) {
        // Verify Recaptcha token with backend
        return this.verifyTokenWithBackend(token);
    }

    async verifyTokenWithBackend(token) {
        try {
            const response = await fetch('/api/verify-recaptcha', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token })
            });

            const result = await response.json();

            if (result.success) {
                this.verified = true;
                this.unlockInterface();
                return true;
            } else {
                Utils.log('Verification failed: ' + result.message, 'error');
                return false;
            }
        } catch (error) {
            Utils.log('Verification error: ' + error.message, 'error');
            return false;
        }
    }

    unlockInterface() {
        if (Utils.exists(this.securityLayer)) {
            this.securityLayer.style.opacity = '0';
            this.securityLayer.style.pointerEvents = 'none';
            
            setTimeout(() => {
                if (Utils.exists(this.securityLayer)) {
                    this.securityLayer.style.display = 'none';
                }
            }, 500);
        }

        if (Utils.exists(this.mainInterface)) {
            this.mainInterface.setAttribute('aria-hidden', 'false');
        }

        Utils.log('Interface unlocked', 'success');
    }
}

/* ============================================
   MAIN APPLICATION
   ============================================ */
const Network = new NetworkProtocolManager();
const packageRenderer = new PackageRenderer();
const epochMonitor = new EpochMonitor();
const networkMatrix = new NetworkMatrix();
const securityManager = new SecurityManager();

// Initialize application
function initializeApp() {
    Utils.log('Initializing HUOKAING THARA Future ISP...', 'info');

    // Initialize security
    securityManager.initialize();

    // Render packages
    packageRenderer.render();

    // Start epoch monitor
    epochMonitor.start();

    // Start network matrix (optional)
    networkMatrix.start();

    Utils.log('Application initialized successfully', 'success');
}

// Recaptcha onload callback
function onloadCallback() {
    Utils.log('Recaptcha loaded', 'info');
    
    const recaptchaElement = document.getElementById('recaptcha-container');
    
    if (Utils.exists(recaptchaElement) && window.google && window.google.recaptcha) {
        try {
            window.google.recaptcha.init({
                sitekey: 'YOUR_SITE_KEY_HERE', // Replace with your actual site key
                callback: function(token) {
                    securityManager.verify(token);
                },
                'error-callback': function() {
                    Utils.log('Recaptcha error', 'error');
                }
            });
        } catch (error) {
            Utils.log('Recaptcha initialization error: ' + error.message, 'error');
        }
    }
}

// Fallback if Recaptcha doesn't load
setTimeout(() => {
    if (!securityManager.verified) {
        Utils.log('Recaptcha not loaded, showing fallback', 'warning');
        // Uncomment to auto-unlock for testing:
        // securityManager.unlockInterface();
    }
}, 5000);

// Initialize on window load
window.addEventListener('load', initializeApp);

// Cleanup on page unload
window.addEventListener('unload', () => {
    epochMonitor.stop();
    networkMatrix.stop();
});

/* ============================================
   GLOBAL EXPORTS
   ============================================ */
// Make initiateProtocol available globally
window.initiateProtocol = Network.initiateProtocol.bind(Network);

// Export utilities for debugging
window.ISPUtils = Utils;
window.ISPConfig = CONFIG;

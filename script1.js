/* ============================================
   HOLOGRAM BACKGROUND EFFECT - MASTER VERSION
   ============================================ */

class HologramBackground {
    constructor(containerSelector = '.hologram-container') {
        this.containerSelector = containerSelector;
        this.container = null;
        this.canvas = null;
        this.ctx = null;
        this.width = 0;
        this.height = 0;
        this.animationId = null;
        this.drops = [];
        this.columns = 0;
        this.fontSize = 14;
        this.charSet = [];
        this.neonCyan = '#00f2ff';
        this.neonPurple = '#bc13fe';
        
        // Performance settings
        this.trailOpacity = 0.1;
        this.resetChance = 0.975;
        this.maxChars = 96;
        
        this.initialize();
    }

    initialize() {
        // Find container
        this.container = document.querySelector(this.containerSelector);
        
        if (!this.container) {
            console.warn('[HologramBackground] Container not found:', this.containerSelector);
            return;
        }

        // Setup canvas
        this.createCanvas();
        this.setupCharacters();
        this.setupColors();
        this.bindEvents();
        
        // Start animation
        this.start();
        
        console.log('[HologramBackground] Initialized successfully');
    }

    createCanvas() {
        this.canvas = document.createElement('canvas');
        
        // Canvas styling
        Object.assign(this.canvas.style, {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: '0',
            opacity: '0.6'
        });

        // Container setup
        this.container.style.position = 'relative';
        this.container.style.overflow = 'hidden';
        
        // Add canvas to container
        this.container.appendChild(this.canvas);
        
        // Get context
        this.ctx = this.canvas.getContext('2d');
    }

    setupCharacters() {
        // Create character set (Katakana + numbers + symbols)
        this.charSet = [];
        
        // Katakana characters
        for (let i = 0x30A0; i < 0x30A0 + this.maxChars; i++) {
            this.charSet.push(String.fromCharCode(i));
        }
        
        // Add numbers
        for (let i = 0; i <= 9; i++) {
            this.charSet.push(String(i));
        }
        
        // Add symbols
        const symbols = ['░', '▒', '▓', '█', '■', '□', '●', '○', '◈', '◆'];
        this.charSet.push(...symbols);
    }

    setupColors() {
        // Get colors from CSS variables
        try {
            this.neonCyan = getComputedStyle(document.documentElement)
                .getPropertyValue('--neon-cyan')
                .trim() || '#00f2ff';
            
            this.neonPurple = getComputedStyle(document.documentElement)
                .getPropertyValue('--neon-purple')
                .trim() || '#bc13fe';
        } catch (error) {
            console.warn('[HologramBackground] CSS variable error:', error);
        }
    }

    bindEvents() {
        // Resize handler
        window.addEventListener('resize', () => {
            this.handleResize();
        });

        // Visibility change (pause when tab is hidden)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pause();
            } else {
                this.start();
            }
        });
    }

    handleResize() {
        // Debounce resize for performance
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
        }
        
        this.resizeTimeout = setTimeout(() => {
            this.resize();
            this.resetDrops();
        }, 100);
    }

    resize() {
        const containerWidth = this.container.clientWidth;
        const containerHeight = this.container.clientHeight;
        
        // Set canvas size
        this.canvas.width = containerWidth;
        this.canvas.height = containerHeight;
        
        this.width = containerWidth;
        this.height = containerHeight;
        
        // Recalculate columns
        this.columns = Math.floor(this.width / this.fontSize);
        
        console.log('[HologramBackground] Resized:', {
            width: this.width,
            height: this.height,
            columns: this.columns
        });
    }

    resetDrops() {
        // Reset drops array with new column count
        this.drops = new Array(this.columns).fill(0);
    }

    start() {
        if (this.animationId) {
            return; // Already running
        }
        
        // Initial resize
        this.resize();
        
        // Start animation loop
        this.animate();
        
        console.log('[HologramBackground] Animation started');
    }

    pause() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
            console.log('[HologramBackground] Animation paused');
        }
    }

    stop() {
        this.pause();
        
        // Remove canvas
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
        
        console.log('[HologramBackground] Stopped and cleaned up');
    }

    animate() {
        this.animationId = requestAnimationFrame(() => {
            this.draw();
            this.animate();
        });
    }

    draw() {
        // Create translucent background for trail effect
        this.ctx.fillStyle = `rgba(5, 5, 5, ${this.trailOpacity})`;
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Set font settings
        this.ctx.font = `${this.fontSize}px 'Courier New', monospace`;
        this.ctx.textBaseline = 'top';

        // Draw each column
        for (let i = 0; i < this.drops.length; i++) {
            this.drawCharacter(i);
        }
    }

    drawCharacter(columnIndex) {
        const x = columnIndex * this.fontSize;
        const y = this.drops[columnIndex] * this.fontSize;

        // Random character
        const char = this.getRandomCharacter();

        // Random color (cyan or purple)
        const color = this.getRandomColor();
        
        // Set text color with glow effect
        this.ctx.fillStyle = color;
        this.ctx.shadowColor = color;
        this.ctx.shadowBlur = 8;
        
        // Draw character
        this.ctx.fillText(char, x, y);
        
        // Reset shadow for next draw
        this.ctx.shadowBlur = 0;

        // Reset drop if it reaches bottom (with random chance)
        if (this.drops[columnIndex] * this.fontSize > this.height && 
            Math.random() > this.resetChance) {
            this.drops[columnIndex] = 0;
        }

        // Move drop down
        this.drops[columnIndex]++;
    }

    getRandomCharacter() {
        return this.charSet[Math.floor(Math.random() * this.charSet.length)];
    }

    getRandomColor() {
        // 70% cyan, 30% purple for visual variety
        return Math.random() < 0.7 ? this.neonCyan : this.neonPurple;
    }

    // Optional: Add burst effect at specific position
    burst(x, y, radius = 100, duration = 500) {
        const startX = x;
        const startY = y;
        const startTime = Date.now();
        
        const burstAnimation = () => {
            const elapsed = Date.now() - startTime;
            
            if (elapsed > duration) {
                return;
            }
            
            // Clear burst area
            this.ctx.fillStyle = 'rgba(5, 5, 5, 0.3)';
            this.ctx.fillRect(
                startX - radius, 
                startY - radius, 
                radius * 2, 
                radius * 2
            );
            
            requestAnimationFrame(burstAnimation);
        };
        
        burstAnimation();
    }

    // Optional: Set intensity (0-1)
    setIntensity(intensity) {
        intensity = Math.min(1, Math.max(0, intensity));
        this.trailOpacity = 0.05 + intensity * 0.2;
        this.resetChance = 0.99 - intensity * 0.02;
    }
}

/* ============================================
   LEGACY FUNCTION (BACKWARD COMPATIBILITY)
   ============================================ */

function startHologramBackground(containerSelector = '.hologram-container') {
    // Create global instance for backward compatibility
    if (!window.hologramBackground) {
        window.hologramBackground = new HologramBackground(containerSelector);
    }
    
    return window.hologramBackground;
}

/* ============================================
   ENHANCED VERSION WITH MORE EFFECTS
   ============================================ */

class EnhancedHologramBackground extends HologramBackground {
    constructor(containerSelector = '.hologram-container') {
        super(containerSelector);
        
        // Additional effects
        this.gridLines = true;
        this.floatingParticles = true;
        this.pulseEffect = false;
        this.particles = [];
        
        // Initialize additional effects
        if (this.gridLines) {
            this.drawGrid();
        }
        
        if (this.floatingParticles) {
            this.createParticles();
        }
    }

    draw() {
        // Call parent draw
        super.draw();
        
        // Draw grid overlay
        if (this.gridLines) {
            this.drawGridOverlay();
        }
        
        // Draw floating particles
        if (this.floatingParticles) {
            this.drawParticles();
        }
    }

    drawGridOverlay() {
        const gridSize = 50;
        
        // Horizontal lines
        for (let y = 0; y < this.height; y += gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.width, y);
            this.ctx.strokeStyle = `rgba(0, 242, 255, 0.03)`;
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        }
        
        // Vertical lines
        for (let x = 0; x < this.width; x += gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.height);
            this.ctx.strokeStyle = `rgba(0, 242, 255, 0.03)`;
            this.ctx.lineWidth = 1;
            this.ctx.stroke();
        }
    }

    createParticles() {
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                size: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }

    drawParticles() {
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = this.width;
            if (particle.x > this.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.height;
            if (particle.y > this.height) particle.y = 0;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(0, 242, 255, ${particle.opacity})`;
            this.ctx.fill();
        });
    }

    // Add scanline effect
    addScanlines() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        
        for (let y = 0; y < this.height; y += 4) {
            this.ctx.fillRect(0, y, this.width, 2);
        }
    }
}

/* ============================================
   USAGE EXAMPLES
   ============================================ */

// Basic usage
const hologram = startHologramBackground();

// Enhanced usage with more effects
const enhancedHologram = new EnhancedHologramBackground('.hologram-container');

// Control intensity
hologram.setIntensity(0.8); // High intensity

// Pause/resume
hologram.pause();
setTimeout(() => hologram.start(), 5000); // Resume after 5 seconds

// Stop completely
// hologram.stop();

// Add burst effect
// hologram.burst(100, 100, 150, 1000);

/* ============================================
   PERFORMANCE OPTIMIZATIONS
   ============================================ */

// Throttle animation frame for better performance
function throttleAnimation(callback, fps = 30) {
    const interval = 1000 / fps;
    let lastTime = 0;
    
    return function...timedCallback() {
        const now = Date.now();
        
        if (now - lastTime >= interval) {
            lastTime = now;
            callback.apply(this, arguments);
        }
    };
}

// Usage with throttling
// This reduces CPU usage on slower devices
const throttledDraw = throttleAnimation(function() {
    hologram.draw();
}, 30);

/* ============================================
   GLOBAL EXPORTS
   ============================================ */

window.HologramBackground = HologramBackground;
window.EnhancedHologramBackground = EnhancedHologramBackground;
window.startHologramBackground = startHologramBackground;

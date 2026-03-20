function startHologramBackground() {
  const container = document.querySelector('.hologram-container');
  if (!container) return;

  // Create a canvas covering the container
  const canvas = document.createElement('canvas');
  canvas.style.position = 'absolute';
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none'; // So it doesn't block UI
  canvas.style.zIndex = '0'; // Behind content
  container.style.position = 'relative'; // For canvas absolute positioning
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');

  let width, height;
  function resize() {
    width = container.clientWidth;
    height = container.clientHeight;
    canvas.width = width;
    canvas.height = height;
  }
  resize();
  window.addEventListener('resize', resize);

  // Parameters for the falling lines
  const fontSize = 14;
  const columns = Math.floor(width / fontSize);
  const drops = new Array(columns).fill(0);

  const neonCyan = getComputedStyle(document.documentElement).getPropertyValue('--neon-cyan').trim() || '#00f2ff';

  function draw() {
    // translucent background to create trail effect
    ctx.fillStyle = 'rgba(5, 5, 5, 0.1)';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = neonCyan;
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = String.fromCharCode(0x30A0 + Math.random() * 96).replace(/\w/, ''); // Katakana chars

      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }

    requestAnimationFrame(draw);
  }

  draw();
}

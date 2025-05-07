document.addEventListener("DOMContentLoaded", () => {
    const blacklight = document.querySelector(".blacklight");
    const buttons = document.querySelectorAll('.hidden-btn');
  
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
  
      // Update blacklight gradient position
      const gradientCenterX = (mouseX / window.innerWidth) * 100;
      const gradientCenterY = (mouseY / window.innerHeight) * 100;
  
      blacklight.style.background = `radial-gradient(
        circle 150px at ${gradientCenterX}% ${gradientCenterY}%,
        rgba(24, 3, 47, 0.48) 10%,
        transparent
      )`;
  
      // Update button visibility based on mouse proximity
      buttons.forEach(button => {
        const rect = button.getBoundingClientRect();
        const btnCenterX = rect.left + rect.width / 2;
        const btnCenterY = rect.top + rect.height / 2;
        
        const distance = Math.hypot(mouseX - btnCenterX, mouseY - btnCenterY);
        const maxDistance = 150; // Pixels from cursor to show button
  
        if (distance < maxDistance) {
          button.style.opacity = '1';
          button.style.transform = 'scale(1)';
          button.style.pointerEvents = 'auto';
        } else {
          button.style.opacity = '0';
          button.style.transform = 'scale(0.5)';
          button.style.pointerEvents = 'none';
        }
      });
    });
  });

  
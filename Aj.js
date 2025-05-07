document.addEventListener('DOMContentLoaded', () => {
    const fireCard = document.querySelector('.segment-card[data-fire]');
    const fireEmoji = fireCard.querySelector('.segment-icon');
    const audio = document.getElementById('fireSound');
  
    function createFlame(x, y) {
      const flame = document.createElement('div');
      flame.className = 'flame';
      flame.style.left = `${x - 20}px`;
      flame.style.top = `${y - 20}px`;
      
      // Create sparks
      for(let i = 0; i < 8; i++) {
        const spark = document.createElement('div');
        spark.className = 'fire-spark';
        spark.style.left = `${x + (Math.random() * 20 - 10)}px`;
        spark.style.top = `${y + (Math.random() * 10 - 5)}px`;
        document.body.appendChild(spark);
        setTimeout(() => spark.remove(), 600);
      }
  
      document.body.appendChild(flame);
      setTimeout(() => flame.remove(), 800);
    }
  
    fireCard.addEventListener('click', (e) => {
      const rect = fireEmoji.getBoundingClientRect();
      const x = rect.left + rect.width/2;
      const y = rect.top + rect.height/2;
      
      // Create multiple flames
      for(let i = 0; i < 3; i++) {
        setTimeout(() => {
          createFlame(
            x + (Math.random() * 20 - 10),
            y + (Math.random() * 10 - 5)
          );
        }, i * 50);
      }
  
      // Play sound
      audio.currentTime = 0;
      audio.play();
      
      // Add screen shake
      document.documentElement.style.transform = `translate(${
        Math.random() * 4 - 2
      }px, ${
        Math.random() * 4 - 2
      }px)`;
      
      setTimeout(() => {
        document.documentElement.style.transform = 'none';
      }, 100);
    });
  });

const playButton = document.getElementById('playButton');
const vinyl = document.querySelector('.vinyl');
const audioPlayer = document.getElementById('player');

let isPlaying = false;

playButton.addEventListener('click', () => {
  isPlaying = !isPlaying;
  
  if(isPlaying) {
    audioPlayer.play();
    vinyl.style.animationPlayState = 'running';
    playButton.textContent = '⏸ Pause';
  } else {
    audioPlayer.pause();
    vinyl.style.animationPlayState = 'paused';
    playButton.textContent = '▶ Play';
  }
});
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const lockScreen = document.getElementById('lockScreen');
const letterScreen = document.getElementById('letterScreen');
const heartsContainer = document.getElementById('heartsContainer');

// Transition from envelope to love letter
openBtn.addEventListener('click', () => {
  lockScreen.classList.add('hidden');
  setTimeout(() => {
    letterScreen.classList.remove('hidden');
  }, 300);
});

// Option to close letter back to start
closeBtn.addEventListener('click', () => {
  letterScreen.classList.add('hidden');
  setTimeout(() => {
    lockScreen.classList.remove('hidden');
  }, 300);
});

// Generate floating hearts background
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('floating-heart');
  
  const heartIcons = ['❤️', '💖', '🌸', '💕', '✨'];
  heart.innerText = heartIcons[Math.floor(Math.random() * heartIcons.length)];
  
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 3 + 's';
  heart.style.fontSize = Math.random() * 15 + 15 + 'px';
  
  heartsContainer.appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 400);
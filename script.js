// Renk paleti oluştur
const colors = ['#00712D', '#74512D', '#BC9F8B', '#134B70', '#134B70', '#201E43'];

// Rastgele bir renk seç
const randomColor = colors[Math.floor(Math.random() * colors.length)];

// Body'ye rastgele arka plan rengi uygula
document.body.style.setProperty('--random-color', randomColor);

// LocalStorage'dan mevcut sayaç değerini al
let count = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

// Sayacı ekranda göster
const counterDisplay = document.getElementById('counterDisplay');
counterDisplay.textContent = count;

// Butonları seç
const incrementButton = document.getElementById('incrementButton');
const resetButton = document.getElementById('resetButton');

// Artırma butonuna tıklama olayını dinle
incrementButton.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
    localStorage.setItem('counter', count);
});

// Sıfırlama butonuna tıklama olayını dinle
resetButton.addEventListener('click', () => {
    count = 0;
    counterDisplay.textContent = count;
    localStorage.setItem('counter', count);
});

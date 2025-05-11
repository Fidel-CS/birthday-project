// Mengambil elemen audio dan body
const audio = document.querySelector('audio');
const body = document.body;

// Menambahkan event listener untuk audio
audio.addEventListener('play', () => {
    body.classList.add('play-music'); // Menambahkan kelas saat audio diputar
});

audio.addEventListener('pause', () => {
    body.classList.remove('play-music'); // Menghapus kelas saat audio dijeda
});

        // Fungsi untuk meniup lilin
        function blowOutCandles() {
            const candles = document.querySelectorAll('.fuego');
            const audio = document.querySelector('audio'); 
            candles.forEach((candle, index) => {
                setTimeout(() => {
                    candle.classList.add('blowout'); // Tambahkan kelas untuk efek mati
                }, index * 200); // Delay untuk setiap lilin
            });
            // Setelah semua lilin mati, stop audio and redirect to card.html
            setTimeout(() => {
                audio.pause(); // Stop the audio
                audio.currentTime = 0; // Reset audio to the beginning
                document.body.classList.add('fade-out'); // Tambahkan efek fade-out
                setTimeout(() => {
                    window.location.href = 'card.html'; // Redirect setelah fade-out
                }, 1000); // Tunggu 1 detik untuk efek fade-out
            }, candles.length * 200 + 500); // Tunggu semua lilin mati
        }
        // Tambahkan event listener untuk meniup lilin dengan klik
        document.addEventListener('click', blowOutCandles); // Meniup lilin saat diklik
// Membungkus semua kode agar tidak bocor ke global scope
(function() {
    // ===== ELEMEN YANG AKAN DIMANIPULASI =====
    const countdownSection = document.querySelector('.countdown-section');
    if (!countdownSection) return; // Hentikan jika section tidak ditemukan

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    // ===== TANGGAL TUJUAN COUNTDOWN =====
    const targetDate = new Date("Sep 7, 2025 20:00:00").getTime();

    // Fungsi untuk menambah "0" di depan angka jika < 10
    function formatNumber(number) {
        return number < 10 ? `0${number}` : number;
    }

    // ===== FUNGSI UPDATE COUNTDOWN =====
    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdownFunction);
            document.querySelector(".countdown-timer").innerHTML = "<h2 class='countdown-subtitle'>Waktu Habis!</h2>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.innerText = formatNumber(days);
        hoursEl.innerText = formatNumber(hours);
        minutesEl.innerText = formatNumber(minutes);
        secondsEl.innerText = formatNumber(seconds);
    }, 1000);

    // ===== SLIDESHOW BACKGROUND (HANYA DI SECTION INI) =====
    const images = [
        "picture one.JPG",
        "picture2.JPG",
        "picture3.JPG"
    ];
    let currentIndex = 0;

    function changeBackground() {
        // Mengubah background dari .countdown-section, BUKAN document.body
        countdownSection.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeBackground, 5000);
    changeBackground(); // Panggil pertama kali agar background langsung muncul
})();
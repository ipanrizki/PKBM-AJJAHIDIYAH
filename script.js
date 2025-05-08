function updateDateTime() {
  const dt = new Date();
  document.getElementById("datetime").innerText = dt.toLocaleString("id-ID");
}

// Slider otomatis
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach((slide, i) => {
    slide.classList.add("hidden");
  });

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].classList.remove("hidden");
}

setInterval(showSlides, 3000);

function updateDateTime() {
  const now = new Date();

  const hari = now.toLocaleDateString('id-ID', { weekday: 'long' });
  const tanggal = now.getDate();
  const bulan = now.toLocaleDateString('id-ID', { month: 'long' });
  const tahun = now.getFullYear();

  let jam = now.getHours();
  let menit = now.getMinutes();
  if (menit < 10) menit = "0" + menit;

  const hasil = `${hari}, ${tanggal} ${bulan} ${tahun} - ${jam}:${menit} WIB`;
  document.getElementById("datetime").textContent = hasil;

  setTimeout(updateDateTime, 1000);
}
// Data siswa: NISN → { nama, link dokumen }
const siswaData = {
  "0026477362": { nama: "DADAN ARIPIN", link: "https://drive.google.com/file/d/1MzpPJnLLk1ws4ZnukMgNWgAyLfzCKxUz/view?usp=drive_link" },

"0053654891": { nama: "ERRI SITI JUNIATI", link: "https://drive.google.com/file/d/1osWw7x75Y0pfX8mkNdxnAxkDAXEl3Oka/view?usp=drive_link" },

"0037372616": { nama: "PAISAL ROMADAN", link: "https://drive.google.com/file/d/1M73o4AmiNiD6wFfJs4fxSIw5MRxMcVan/view?usp=drive_link" },

"0008612367": { nama: "RIO MUHAMAD FAHKRIL", link: "https://drive.google.com/file/d/1-Mu2grVE-wztFG56BSDQDsypSjVEL_1i/view?usp=drive_link" },

"0043858538": { nama: "YOSEFINA", link: "https://drive.google.com/file/d/1JP7RbYKDfoN09osOj1ww66bqtvqEg1wi/view?usp=drive_link" },

  "0079370446": { nama: "DILA MELANI UTARI PUTRI", link: "https://drive.google.com/file/d/1dNGx3CPGnn66BrpkJROWpkO1FRLiKiYw/view?usp=drive_link" }
  // Tambahkan data siswa lainnya di sini
};

function login() {
  const nama = document.getElementById("nama").value.trim().toLowerCase();
  const nisn = document.getElementById("nisn").value.trim();

  if (siswaData[nisn] && siswaData[nisn].nama.toLowerCase() === nama) {
    window.location.href = siswaData[nisn].link;
  } else {
    alert("Nama atau NISN tidak cocok.");
  }
}

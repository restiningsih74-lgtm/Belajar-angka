MathJax = { 
tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] } 
}; 

function cekJawaban() {
    let skor = 0;
    let totalSoal = 2;

    // Kunci Jawaban
    const kunciJawaban = {
        "soal1": "0.75",
        "soal2": "30"
    };

    let semuaDijawab = true;

    for (let soal in kunciJawaban) {
        let pilihan = document.querySelector(`input[name="${soal}"]:checked`);
        let feedback = document.querySelector(`input[name="${soal}"]`)?.closest('.card-body').querySelector(".feedback");

        if (feedback) feedback.innerHTML = ""; // reset feedback

        if (pilihan) {
            if (pilihan.value === kunciJawaban[soal]) {
                feedback.innerHTML = "<span class='text-success'>Benar!</span>";
                skor++;
            } else {
                feedback.innerHTML = `<span class='text-danger'>Salah! Jawaban benar: ${kunciJawaban[soal]}</span>`;
            }
        } else {
            if (feedback) {
                feedback.innerHTML = "<span class='text-warning'>Belum dijawab!</span>";
            }
            semuaDijawab = false;
        }
    }

    if (semuaDijawab) {
        document.getElementById("skor").innerText = `Skor Anda: ${skor}/${totalSoal}`;
        document.getElementById("cekJawabanBtn").disabled = true;
        document.getElementById("ulangBtn").classList.remove("d-none");
    }
}

function ulang() {
    document.querySelectorAll("input[type=radio]").forEach(input => input.checked = false);
    document.querySelectorAll(".feedback").forEach(f => f.innerHTML = "");
    document.getElementById("skor").innerText = "";
    document.getElementById("cekJawabanBtn").disabled = false;
    document.getElementById("ulangBtn").classList.add("d-none");
}

// Sembunyikan tombol ulang saat awal
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("ulangBtn").classList.add("d-none");
});

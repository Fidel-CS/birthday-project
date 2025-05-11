const body = document.querySelector("body");
const swalst = Swal.mixin({
    timer: 2300,
    allowOutsideClick: false,
    showConfirmButton: false,
    timerProgressBar: true,
    imageHeight: 90,
});
const audio = new Audio(document.getElementById('linkmp3').src);
let ftganti = 0;
let fungsi = 0;
let fungsiAwal = 0;
let deffotostiker = document.getElementById('fotostiker').src;

function berjatuhan() {
    const heart = document.createElement("div");
    heart.className = "fas fa-snowflake";
    heart.style.left = (Math.random() * 90) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
    body.appendChild(heart);
}

setInterval(function () {
    var heartArr = document.querySelectorAll(".fa-snowflake");
    if (heartArr.length > 100) {
        heartArr[0].remove();
    }
}, 100);

document.getElementById("Content").style = "opacity:1;margin-top:16vh";
const swals = Swal.mixin({
    allowOutsideClick: false,
    cancelButtonColor: '#FF0040',
    imageHeight: 80,
});

document.getElementById("kadoIn").onclick = function () {
    if (fungsiAwal == 0) {
        audio.play();
        fungsiAwal = 1;
        document.getElementById("kadoIn").style = "transition:all .8s ease;transform:scale(10);opacity:0";
        document.getElementById("wallpaper").style = "transform: scale(1.5);";
        document.getElementById("ket").style = "display:none";
        setTimeout(initengahan, 300);
        setTimeout(inipesan, 500);
    }
};

async function inipesan() {
    var { value: nama } = await swals.fire({
        title: 'Masukin Nama Kamu',
        input: 'text',
    });
    if (nama && nama.length < 11) {
        window.nama = nama;
        vketikhalo = "Hai, " + nama + " ✨";
        mulainama();
    } else {
        await swals.fire('Ups!', 'Nama tidak boleh kosong atau lebih dari 10 karakter, ya!');
        inipesan();
    }
}

// Pertanyaan Akhir
var tanya = 'Mau Kado Gak Nih? 😏';
var opstanya = 'Ayo jawab 😆';
var tompositif = 'Mau';
var tomnegatif = 'Engga';

async function tanyaLanjut() {
    var { isConfirmed } = await Swal.fire({
        title: tanya,
        text: opstanya,
        imageUrl: 'https://feeldreams.github.io/kadoin.png', // opsional gambar di popup
        showCancelButton: true,
        confirmButtonText: tompositif,
        cancelButtonText: tomnegatif,
    });

    if (isConfirmed) {
        window.location.href = "cake.html"; // langsung pindah halaman
    } else {
        await Swal.fire('Yahhh 😜', 'Yaudah deh 😆');
    }
}

// Tombol Lanjut diklik -> munculin pertanyaan
document.getElementById("By").addEventListener("click", async function () {
    await tanyaLanjut();
});

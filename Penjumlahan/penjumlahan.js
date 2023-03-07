function penjumlahan() {
    var angka1 = document.getElementById("angka1").value;
    var angka2 = document.getElementById("angka2").value;
    var hasil = parseInt(angka1) + parseInt(angka2);

    document.getElementById("hasil").value = hasil;
}
function jumlahkan(){
    var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    var bilangan2 = parseFloat(document.getElementById("bilangan2").value);

    var hasil = bilangan1 + bilangan2;
    alert("hasil penjumlahan: " + hasil);
}

function resetForm(){
    document.getElementById("bilangan1").value = "";
    document.getElementById("bilangan2").value = "";
}

document.getElementById("jumlahkan").addEventListener("click", jumlahkan)
document.getElementById("ulang").addEventListener("click", resetForm)

function validateForm() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;

    if (nama === "" || email === "" || alamat === "") {
        alert("Semua kolom harus diisi!");
        return false;
    } else {
        // Lakukan tindakan pendaftaran di sini (contoh: mengirim data ke server)
        alert('Pendaftaran berhasil!');
        // Clear form
        document.getElementById('registrationForm').reset();
    }
    return true;
}
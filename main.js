function validateForm() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (nama === "" || email === "" || password === "") {
        alert("Semua kolom harus diisi!");
        return false; // Prevent form submission
    }

    // Validasi email sederhana
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        alert("Format email tidak valid!");
        return false; // Prevent form submission
    }

    // Validasi password sederhana (minimal 6 karakter)
    if (password.length < 6) {
        alert("Password harus memiliki minimal 6 karakter!");
        return false; // Prevent form submission
    }

    // Jika semua validasi berhasil, form akan disubmit
    return true;
}

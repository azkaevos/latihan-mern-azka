// Fungsi Memasak Mie
function masakMie(rasa, callback) {
    console.log("Adik memasak mie rasa " + rasa + "...");
    setTimeout(() => {
        callback("Mie " + rasa + " sudah matang!");
    }, 2000);
}

// Menghidangkan - Callback
function hidangkanMie(mie) {
    console.log("Adik : " + mie);
}

// Running Program
console.log("Kakak mencuci piring");
masakMie("Ayam Bawang", hidangkanMie)
console.log("Kakak : Piring udah beres");

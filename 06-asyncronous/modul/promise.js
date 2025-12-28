// Fungsi Memasak Mie
function masakMie(rasa) {
    console.log("Adik memasak mie rasa " + rasa + "...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (rasa) {
                resolve("Mie " + rasa + " sudah matang!");
            }else{
                reject("Gagal memasak mie.");
            }
        }, 2000);
    });
}

// Running Program
console.log("Kakak mencuci piring");
masakMie("Ayam Bawang").then((mie) => {console.log("Adik : " + mie)})
console.log("Kakak : Pirig dah selesai");

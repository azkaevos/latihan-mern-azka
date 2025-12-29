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

// ASYNC AWAIT FUNCTION
async function hidangkan() {
    try {
        const mie = await masakMie("Ayam Bawang");
        console.log("Adik : " + mie);
    } catch (error) {
        console.log(error);
    }
}

// Running Program
console.log ("================== ASYNC AWAIT ================");
console.log("Kakak mencuci piring");
hidangkan();
console.log("Kakak : Pirig dah selesai");

console.log("Halo Javascript")

import { PI, penjumlahan } from "./kalkulator.js"

import hitungan from "./kalkulator.js"

const hasilJumlah = penjumlahan(50, 46)
console.log(`Hasil Penjumlahan : ${hasilJumlah}`);

const luasPermukaanBumi = 4 * PI * (6371 * 6371)
console.log(
    `Luas Permukaan Bumi Adalah ${luasPermukaanBumi.toLocaleString()} km²`
);

const object = hitungan(777)
console.log(`Angka yang dikembalikan : ${object.angka}`)
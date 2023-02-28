// let nilai = prompt("masukkan nilai :",0);
// let hasil ="";

// switch(true){
//     case nilai > 100:
//         hasil = "D"
//         break;
// }
// switch(true){
//     case nilai >= 91 && nilai <= 100:
//         hasil = "A"
//         break;
//     case nilai >= 81 && nilai <= 90:
//         hasil = "B"
//         break;
//     case nilai >= 71 && nilai <= 80:
//         hasil = "C"
//         break;
//     case nilai >= 61 && nilai <= 70:
//         hasil = "D"
//         break;
//     case nilai >= 0 && nilai <= 60:
//         hasil = "E"
//         break;
//     default:
//         document.write("Tidak ada")
// }
// document.write(`Kamu mendapatkan nilai ${nilai} dan skor ${hasil}`);

//PERCABANGAN OPERATOR TERNARY
//Percabangan menggunakan operator ternary merupakan bentuk lain dari percabangan if/else

// //contoh
// let jwb = prompt("apakah Jakarta Ibu saya?","");
// let jawaban = (jwb.toUpperCase() == "IYA") ? "Benar":"Salah";
// document.write("Jawaban Anda : <strong>&{Jawaban}</strong>")

// Percabangan NESTED (bercabang)
// merupakan percabangan bersarang yang berarti kita biasa membuat blok didalamnya

// let user = prompt("Username :", "");
// let pass = prompt("Password :", "");

// if(user == "ahmad"){
//     if(pass == "ahmad21"){
//         document.write(`<h1>Selamat datang ${user}`);
//     }else{
//         document.write("<p>Password salah, silakan coba lagi</p>");
//     }
// }else{
//     document.write("<p>Anda tidak terdaftar!</p>");
// }

//luasLingkaran
function rumus(b){

}
let b = parseInt(prompt("Masukan nilai jari jari"))
let phi = 3.14;
let hasil =phi * (b * b);
console.log(hasil);
document.write(hasil);
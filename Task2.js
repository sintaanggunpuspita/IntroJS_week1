const bahasaIndonesia = 90;
const bahasaInggris = 85;
const matematika = 80;
const ipa = 84;
const hitungRata = (bahasaIndonesia+bahasaInggris+matematika+ipa)/4;
if (hitungRata >=90) {
    console.log("rata-rata : "+ hitungRata)
    console.log("Grade : A")
}else if (hitungRata >=80) {
    console.log("rata-rata : "+ hitungRata)
    console.log("Grade : B")
}else if (hitungRata >=70) {
    console.log("rata-rata : "+ hitungRata)
    console.log("Grade : C")
}else if (hitungRata >=60) {
    console.log("rata-rata : "+ hitungRata)
    console.log("Grade : D")
}else {
    console.log("rata-rata : "+ hitungRata)
    console.log("Grade : E")
}
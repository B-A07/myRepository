alert("2 Kurs içerikleri Javascrip= Array-object ile değiştirelecek!")

let kurslar = [

{
    kursadi:"Türkçe",
    bölüm:"sözel",
    aciklama:"Okullarda okuma-yazmadan başlanarak Türkçe eğitimi yapılır. Türkçe eğitiminin genel amaçları şöyle özetlenebilir:",
},
{
    kursadi:"Resim",
    bölüm:"Sanat",
    aciklama:"çizgi ve renklerle yapılan, hatta günümüzde kavramsal bir boyutta ele alınması açısından hemen her tür malzemenin de kullanılabileceği bir anlatım tekniğidir.",
},
{
    kursadi:"ingilizce",
    bölüm:"Yabancı Dil",
    aciklama:"İngilizceyi öğrenmeliyiz çünkü küreselleşen dünya düzeninde en yaygın kullanılan ikinci dildir ve iletişimin anahtarıdır. ",
},

];


document.getElementById("baslik1").innerHTML = `${kurslar[0].kursadi}`;
document.getElementById("bölüm1").innerHTML = `${kurslar[0].bölüm}`;
document.getElementById("aciklama1").innerHTML = `${kurslar[0].aciklama}`;

document.getElementById("baslik3").innerHTML = `${kurslar[1].kursadi}`;
document.getElementById("bölüm3").innerHTML = `${kurslar[1].bölüm}`;
document.getElementById("aciklama3").innerHTML = `${kurslar[1].aciklama}`;


alert("2 Kurs içeriği başarıyla değiştirildi. Ödev tamam!")
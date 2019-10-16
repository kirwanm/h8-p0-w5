//Week-5 Exercise Kali Terus Rekursif
/*
Diberikan sebuah function kaliTerusRekursif(angka) yang menerima satu parameter berupa angka.
Function akan memproses angka yang lebih dari satu digit menjadi satu digit dengan melakukan perkalian.
Bila masih lebih dari satu digit, terus lakukan perkalian setiap digit-nya untuk pada akhirnya
mendapatkan satu digit.
Wajib menggunakan rekursif untuk berlatih rekursif, namun kamu boleh menggunakan looping juga disini.

Contoh:
3 => 3, karena sudah satu digit.
24 => 8, karena 24 dua digit, maka kita lakukan 2 * 4 = 8. 8 satu digit, maka hasilnya adalah 8.
654 => 0, karena 654 tiga digit, maka lakukan 6 * 5 * 4 = 120. 120 tiga digit, maka lakukan 1 * 2 * 0 = 0.
0 satu digit, maka hasilnya adalah 0.
*/

  function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var result = 0;
    if(angka===0) {
      return 0;
    }
    else if(angka<10) {
      return angka
    }
    else if(angka>10) {
      result = Number(String(angka)[0]) * kaliTerusRekursif(Number(String(angka).substring(1)));
      while(result>10) {
        result = Number(String(result)[0]) * kaliTerusRekursif(Number(String(result).substring(1)));
      }
      return result;
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6
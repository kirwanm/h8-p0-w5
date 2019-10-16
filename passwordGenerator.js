//Week-5 Exercise Password Generator
/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password
(harus berurutan):
Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti
akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B,
 I -> J, U -> V, E -> F, O -> P)
Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord
Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya
Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
NOTE:

Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces)
diletakkan di passwordGenerator dan return password-nya dari function ini juga
*/

 function changeVocals (str) {
    //code di sini
    var abjad = 'bBfFjJpPvV';
    var aeiou = 'aAeEiIoOuU';
    var result = '';
    for(var i=0; i<str.length; i++) {
      for(var j=0; j<aeiou.length; j++) {
        if(str[i]===aeiou[j]) {
          result += abjad[j];
        }
      }
      if(result.length-1!==i) {
        result += str[i];
      }
    }
    return result;
  }
  
  function reverseWord (str) {
    //code di sini
    var result = '';
    for(var i=str.length-1; i>-1; i--) {
      result += str[i];
    }
    return result;
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var result = '';
    var abjad = 'abcdefghijklmnopqrstuvwxyz';
    var ABJAD = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(var i=0; i<str.length; i++) {
      for(var j=0; j<abjad.length; j++) {
        if(str[i]===abjad[j]) {
          result += ABJAD[j];
        }
        else if(str[i]===ABJAD[j]) {
          result += abjad[j];
        }
      }
    }
    return result;
  }
  
  function removeSpaces (str) {
    //code di sini
    var result = '';
    for(var i=0; i<str.length; i++) {
      if(str[i]!==' ') {
        result += str[i];
      }
    }
    return result;
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length<5) {
      return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }
    else {
      return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
    }
  }

  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
//Week-5 Exercise Cari Pelaku Regex
/*
Diberikan sebuah function cariPelaku(kalimat) yang menerima satu parameter berupa string.
Function akan me-return jumlah berapa kali ditemukan kata "abc" secara berturut-turut
di dalam kalimat tersebut. Gunakan regex untuk melatih kemampuan regex.
*/

  function cariPelaku(str) {
    // you can only write your code here!
    var result = (str.match(/abc/g));
    //console.log(str.match(/abc/g));
    return result.length;
  }
  
  // TEST CASES
  console.log(cariPelaku('mabcvabc')); // 2
  console.log(cariPelaku('abcdabdc')); // 1
  console.log(cariPelaku('bcabcac')); // 1
  console.log(cariPelaku('abcabcabc')); // 3
  console.log(cariPelaku('babcbacabc')); // 2
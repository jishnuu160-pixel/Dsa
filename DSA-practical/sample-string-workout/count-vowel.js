
function countVowelsConstants(str){
    let vowel=0;
    let constants=0;

    for(let i=0;i<str.length;i++){
      if(str[i]==="a" ||
        str[i]==="e" ||
        str[i]==="i" ||
        str[i]==="o" ||
        str[i]==="u" 
      ){
        vowel++;
      }else{
        constants++;
      }
    }
    return [vowel, constants];
}

console.log(countVowelsConstants("hello world"));
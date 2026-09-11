function reverse(n,result=0){
   if(n===0) return result;

  let digit=n%10;
  result=result*10+digit;

  return reverse(Math.floor(n/10),result);
}

console.log(reverse(12345));
function birthdayCakeCandles(candles) {
  let max=candles[0];
   let count=0;
  
  for(let i=0;i<candles.length;i++){
     if(candles[i]>max)   max=candles[i];

    if(candles[i]===max)  count++;
  }
  return count;
}

console.log(birthdayCakeCandles([4,4,1,2]));
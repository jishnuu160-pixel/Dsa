
function reverse(arr){
  let rev=[];
   for(let i=arr.length-1;i>=0;i--){
     rev.push(arr[i]);  
   }
  return rev;
}

console.log(reverse([10,20,30,40]));
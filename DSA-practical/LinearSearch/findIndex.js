
function findIndex(arr,target){
   for(let i=0;i<arr.length;i++){
      if(arr[i]===target){
          return i;
      }
   }
   return -1;
}

console.log(findIndex([15, 25, 35, 45, 55],45));
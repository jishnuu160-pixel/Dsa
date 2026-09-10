
function findElement(arr,target){
   for(let i=0;i<arr.length;i++){
      if(arr[i]===target){
           console.log("Element found");
           break;
      }
   }
}

findElement([10, 20, 30, 40, 50],30);
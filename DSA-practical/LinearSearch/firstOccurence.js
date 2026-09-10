
function firstOccurence(arr,target){
      for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
      }
}

console.log(firstOccurence([10, 20, 30, 20, 40, 20],20))
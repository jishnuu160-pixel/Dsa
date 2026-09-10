
function findElement(arr,target){
  
    let start=0;
    let end=arr.length-1;

    while(start<=end){
        let mid=Math.floor((start+end)/2);

        if(arr[mid]===target){
            return true;
        }

        if(arr[mid]<target){
            start=mid+1;
        }else{
            end=mid-1;
        }
    }
    return false;
}

console.log(findElement([10, 20, 30, 40, 50, 60, 70],40));
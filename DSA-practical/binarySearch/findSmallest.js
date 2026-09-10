
function  findSmallest(arr,target){
  let start=0;
  let end=arr.length-1;
  let answer=-1;

  while(start<=end){
     let mid=Math.floor((start+end)/2);

    if(arr[mid]>target){
      answer=arr[mid];
      end=mid-1;
    }else{
      start=mid+1;
    }
  }
  return answer;
}

console.log(findSmallest([10, 20, 30, 40, 50, 60, 70],35))

function rotateLeft(d,arr){
    for(let j=0;j<d;j++){
        
        let first=arr[0];
        for(let i=0;i<arr.length;i++){
            arr[i]=arr[i+1];
        }
        arr[arr.length-1]=first;
    }
    return arr;
}

console.log(rotateLeft(2,[1,2,3,4,5]));
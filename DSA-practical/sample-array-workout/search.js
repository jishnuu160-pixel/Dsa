function searchNumber(arr,value){
    for(let i=0;i<arr.length;i++){
        if(value===arr[i]) return true;
    }
    return false;
}

console.log(searchNumber([5, 8, 2, 10, 3], 2));


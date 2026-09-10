
function indexOccurence(arr,target){
    let res=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            res.push(i);
        }
    }
    return res;
}

console.log(indexOccurence([5, 10, 20, 5, 30, 5, 40],5))
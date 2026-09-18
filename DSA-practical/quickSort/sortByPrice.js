function quickSort(arr,start,end){
  if(start>=end){
    return;
  }

  let i=start-1;
  let pivot=arr[end];

  for(let j=start;j<end;j++){
    if(arr[j].price>pivot.price){
        i++;

        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
  }

  let temp=arr[i+1];
  arr[i+1]=arr[end];
  arr[end]=temp;

  let pivotIndex=i+1;

  quickSort(arr,start,pivotIndex-1);
  quickSort(arr,pivotIndex+1,end);

  return arr;
}

let products = [
    { name: "Shoes", price: 2500 },
    { name: "Watch", price: 1500 },
    { name: "Bag", price: 3000 },
    { name: "Cap", price: 800 },
    { name: "Jacket", price: 2200 }
];

console.log(quickSort(products,0,products.length-1));
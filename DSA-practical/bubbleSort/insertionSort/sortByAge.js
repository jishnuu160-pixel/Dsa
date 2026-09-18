function sortByAge(arr){
     for(let i=0;i<arr.length;i++){
      let key=arr[i];
      let j=i-1;

        while(j>=0 && arr[j].age>key.age){
             arr[j+1]=arr[j];
             j--;
        }
        arr[j+1]=key;
     }
     return arr;
}

let people = [
    { name: "John", age: 25 },
    { name: "Alex", age: 19 },
    { name: "Sam", age: 32 },
    { name: "Mike", age: 22 }
];

console.log(sortByAge(people));
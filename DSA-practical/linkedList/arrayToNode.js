
class Node{
  constructor(data){
    this.data=data;
    this.next=null;
  }
}


function arrayToLinkedList(arr){
  const head=new Node(arr[0]);

  let current=head;
  
  for(let i=1;i<arr.length;i++){
        const newNode=new Node(arr[i]);
    current.next=newNode;
    current=newNode;
  }
  return head;
}

const arr=[10,50,20,40,30];
const head=arrayToLinkedList(arr);

let current=head;
let min=current.data;

while(current!==null){
   if(current.data===40){
     console.log("Found");
     break;
   }
  current=current.next;
}




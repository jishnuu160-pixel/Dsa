class Node{
  constructor(data){
    this.data=data;
    this.next=null;
    this.prev=null
  }
}

const node1=new Node(10);
const node2=new Node(20);
const node3=new Node(30);
const node4=new Node(40);

node1.next=node2;
node2.next=node3;
node3.next=node4;

node2.prev=node1;
node3.prev=node2;
node4.prev=node3;

head=node1;

current=head;
while(current.next!==null){
  current=current.next;
}

let newNode=new Node(50);

current.next=newNode;
current.prev=current;

current=head;
while(current!==null){
  console.log(current.data);
  current=current.next;
}


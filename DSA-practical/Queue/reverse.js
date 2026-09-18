class Queue{
    constructor(){
     this.items=[];
    }

    enqueue(value){
        this.items.push(value);
    }

    dequeue(){
        return this.items.shift();
    }

    display(){
        
        console.log(this.items);
    }
}

let queue=new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

let rev=[];
let j=0;

for(let i=queue.items.length-1;i>=0;i--){
    rev[j]=queue.items[i];
   j++;
}

console.log(rev);




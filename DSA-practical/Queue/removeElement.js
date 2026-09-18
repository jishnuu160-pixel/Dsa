class Queue{
    constructor(){
        this.items=[];
    }

    enqueue(value){
       this.items.push(value)
    }

    dequeue(){
      return this.items.shift();
    }

    display(){
        console.log(this.items);
    }
}

let queue1=new Queue();

queue1.enqueue(10);
queue1.enqueue(20);
queue1.enqueue(30);

let element=20;
let temp=[];

while(queue1.items.length>0){
   let value=queue1.dequeue();

   if(value!==element){
    temp[temp.length]=value;
   }
}

queue1.items=temp;

queue1.display();
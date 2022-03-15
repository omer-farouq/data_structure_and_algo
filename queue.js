   //First in Fist Out
   //The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
   
   class Queue{
       constructor(){
           this.queue = [];
       }
       enqueue(item){
           this.queue.push(item);
       }
       dequeue(){
           if(this.queue.length){
               return this.queue.shift();
           }
       }
   }
   const premikes = new Queue();
   premikes.enqueue ('Ashique');
   premikes.enqueue('Dewan');
   premikes.enqueue('Prem');
   premikes.enqueue('Priyq');
   console.log(premikes.queue);
   const newPrem = premikes.dequeue();
   console.log(newPrem);

var queue=[];
 function queue(){
    var queue = prompt("Creating a Queue") ;
    
    constructor()
        this.data = [];
        this.rear = 0;
        this.size = 10;
    }
 
 function enqueue(element){
    var que = prompt("Enter a number: ") ;
    this.data[this.rear]=element;
    this.rear=this.rear+1;
    document.getElementById("enq").innerHTML= enq;
}
function length(){

return this.rear;
}
function Peek(){
    var p = prompt("Get highest number in a queue");
    if(this.isempty()==false)
    {
        return this.data[0];
    }
    document.getElementById("peek").innerHTML = peek
}
function getLast()
{

    if(this.isempty==false)
    {
        this.rear=this.rear-1;
    }
}

dequeue()
{
    var deque = prompt("Remove a number: ") ;
    if(this.isempty==false)
    {
        this.rear=this.rear-1;
        return this.data.shift();
    }
}
print()
{
    for(let i=0; i<this.rear; i++)
    {
        console.log(this.data[i]);
    }
}
reset_queue()
{
    clearInterval()
    {
        this.data.length = 0;
        this.rear = 0;

    }
}
    

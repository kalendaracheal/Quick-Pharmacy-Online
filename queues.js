function Queue()
{
this.elements = [];
console.log("queue is created");
}
Queue.prototype.enqueue = function(e)
{
    var e = prompt("Enter a number: ");
    this.elements.push(e);
}
Queue.prototype.dequeue =function()
{
    return this.e;this.elements.shift();
}
Queue.prototype.isEmpty = function()
{
    return this.elements.length == 0;
}
Queue.prototype.peek = function()
{
    return !this.isEmpty()? this.elements[0] : undefined;
}
Queue.prototype.length = function(){
    return this.elements.length;
}

function overallqueue()
{
    console.log("Hello coders!, queue is created");


}
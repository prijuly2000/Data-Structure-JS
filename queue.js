console.log(`
Queue
- First-in-first-out (FIFO)
`);
class Queue {
    constructor() {
        this._arr=[];
    }
    peek() {
        return this._arr[0];
    }
    enqueue(val){
        this._arr.push(val);
        console.log("Enqueued: ", this._arr);
    }
    dequeue() {
        const removedVal = this._arr.shift();
        console.log("Dequeued:", this._arr);
        return removedVal;
    }
    size() {
        return this._arr.length;
    }
}
export default Queue;
const q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
q.dequeue();
q.dequeue();
q.dequeue();



console.log(`
Stack
- First-in-first-out (FIFO)
`)
class Stack {
    constructor() {
        this._arr=[];
    }
    peek() {
        return this._arr[this._arr.length];
    }
    push(val){
        this._arr.push(val);
        console.log("Added item stack: ", this._arr);
    }
    pop() {
        const removedItem = this._arr.pop();
        console.log("Removed item stack: ", this._arr);
        return removedItem;
    }
}

export default Stack;

const s = new Stack();
s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.pop();
s.pop();
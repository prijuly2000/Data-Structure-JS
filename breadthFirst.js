import Queue from "./queue.js"

console.log(`
BFS
Print average at each level of binary tree.
`);

class Node {
    constructor(item) {
        this.val = item;
        this.left = null;
        this.right = null;
    }
}

function breadthFirst() {
    const root = new Node(50);
    root.left = new Node(17);
    root.right = new Node(76);

    root.left.left = new Node(9);
    root.left.right = new Node(23);
    root.left.right.right = new Node(19);

    root.right.left = new Node(54);
    root.right.right = new Node(77);
    const q = new Queue();
    q.enqueue(root);
    let level = 1;
    let addedCount = 1;
    while(q.size() > 0) {
        let sum =0;
        let count = addedCount;
        let oldCount = count;
        addedCount=0;
        while(count > 0) {
            let node = q.dequeue();
            sum += node.val;
            console.log("BFS traverse", node.val);
            if (node.right !== null) {
                q.enqueue(node.right);
                addedCount++;
            }
            if(node.left !== null) {
                q.enqueue(node.left);
                addedCount++;
            }
            count--;
        }
        console.log("Average at level ",level,"sum ", sum, "count ",oldCount, sum/oldCount);
        level++;
    }
}
export default breadthFirst;
breadthFirst();

class LinkedListNode {
    constructor(...nodes) {
        if (nodes.length === 0)
            throw new Error('Invalid Input: expecting at least one node');
        let newNode;
        newNode = this.consumeNewNode(nodes);
        this.next = null;
        while (nodes.length) {
            const tmp = { ...this };
            newNode = this.consumeNewNode(nodes);
            this.next = tmp;
        }
    }

    consumeNewNode(nodes) {
        var newNode = nodes[nodes.length - 1];
        if (newNode instanceof LinkedListNode) {
            this.value = newNode.value;
        }
        else {
            this.value = newNode;
        }
        nodes.pop();
        return newNode;
    }

    toString(callback = null) {
        if (callback)
            return callback(this.value);
        return this.value.toString();
    }
}

module.exports = LinkedListNode;
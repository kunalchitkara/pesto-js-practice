class PqNode {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }

    toString() {
        return `${this.value} --> ${this.priority}`;
    }
}

class PriorityQueue {
    constructor(arr = []) {
        this.pq = arr;
    }

    hasValue(value) {
        return (this.pq.filter(n => n.value === value).length === 1);
    }

    toString() {
        return this.pq.map(n => n.toString()).join(', ')
    }

    peek() {
        return this.pq[0].value;
    }

    poll() {
        return this.pq.shift().value;
    }

    addPosition(priority = 0) {
        if (this.pq.length === 0)
            return 0;
        if (this.pq[this.pq.length - 1].priority <= priority) {
            return this.pq.length;
        }
        for (var i = 0; i < this.pq.length - 1; i++) {
            if (this.pq[i].priority > priority) {
                return i;
            }
        }
        return this.pq.length - 1;
    }

    addNodeAtPosition(pqNode, pos) {
        if (!pqNode instanceof PqNode)
            throw new Error('Internal Server Error');
        this.pq.splice(pos, 0, pqNode);
    }

    add(value, priority) {
        if (this.hasValue(value))
            throw new Error(`Invalid Input: Node with value ${value} already exists`);
        var pos = this.addPosition(priority);
        this.addNodeAtPosition(new PqNode(value, priority), pos);
    }

    changePriority(value, priority) {
        if (!this.hasValue(value))
            throw new Error(`Invalid Input: Node with value ${value} does not exist`);
        var i = 0;
        while (this.pq[i].value !== value)
            i++;
        this.pq.splice(i, 1);
        this.add(value, priority);
    }
}

module.exports = PriorityQueue;
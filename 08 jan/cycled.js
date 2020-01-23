class Cycled extends Array {
    constructor(fixture = []) {
        super(...fixture);
        this._index = 0;
    }

    get index() {
        return this._index;
    }

    get value() {
        return this[this._index];
    }

    set index(n) {
        this._index = n;
        this.adjustIndex();
    }

    current() {
        return this[this._index];
    }

    step(n) {
        this._index += n;
        this.adjustIndex();
        return this[this._index];
    }

    *next() {
        for (var val of [...this])
            yield { value: val };
    }

    next() {
        return this.step(1);
    }

    previous() {
        return this.step(-1);
    }

    adjustIndex() {
        this._index %= this.length;
        if (this._index < 0)
            this._index += this.length;
    }

    *reversed() {
        var start = 0;
        var end = this.length - 1;
        while (start < end) {
            const temp = this[start];
            this[start] = this[end];
            this[end] = temp;
            start++;
            end--;
        }
        for (var val of [...this])
            yield val;
    }

    indexOf(n) {
        return [...this].indexOf(n);
    }
}

module.exports = Cycled;

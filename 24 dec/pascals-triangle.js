class Triangle {
    constructor(n) {
        this.rows = [];
        if (n === 0)
            return;
        this.rows.push([1]);
        if (n === 1)
            return;
        for (var i = 2; i <= n; i++) {
            var row = [];
            for (var j = 0; j < i; j++) {
                if (j === 0 || j === i - 1)
                    row.push(1);
                else
                    row.push(this.rows[this.rows.length - 1][j - 1] + this.rows[this.rows.length - 1][j]);
            }
            this.rows.push(row);
        }
    }
}

module.exports = Triangle;
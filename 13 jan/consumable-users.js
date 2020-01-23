class ConsumableUsers {
    constructor(arr = []) {
        this.users = [];
        for (var a of arr) {
            this.users.push(a);
        }
        this.done = false;
    }

    get nextUser() {
        if (this.users.length) {
            var nextUser = this.users.shift(1);
            this.done = false;
            return 'user: ' + nextUser;
        } else {
            this.done = true;
            return 'noname'
        }
    }
}

module.exports = ConsumableUsers;
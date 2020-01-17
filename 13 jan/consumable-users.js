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
consumableUsers = new ConsumableUsers(['Alice', 'Bob']);
var usersIterable = [];
var length = consumableUsers.users.length;
for (var i = 0; i <= length; i++) {
    var user = consumableUsers.nextUser;
    usersIterable.push(user);
}
const [
    firstUser,
    secondUser,
 ] = usersIterable;

console.log('usersIterable', usersIterable);
console.log('firstUser', firstUser);
console.log('secondUser', secondUser);
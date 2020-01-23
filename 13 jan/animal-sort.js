class Animal {
    constructor(name, legsCount) {
        this.name = name;
        this.numberOfLegs = legsCount;
    }
}

const animalUtil = {
    animalArray: (arr) => {
        return arr.map(animal => new Animal(animal.name, animal.numberOfLegs));
    }
}

function animalSort(arr) {
    return animalUtil.animalArray(arr).sort((a, b) => {
        return (`${a.numberOfLegs}|${a.name}` > `${b.numberOfLegs}|${b.name}`);
    });
}

module.exports = animalSort;

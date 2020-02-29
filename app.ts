class BaseObject<T> {
    constructor(initializer?: Partial<T>) {
        if (initializer) {
            Object.assign(this, initializer);
        }
    }
}

class User extends BaseObject<User> {
    firstName: string;
    lastName: string;
    age: number;

    sayMyName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

class Item extends BaseObject<Item> {
    name: string;

    constructor(actualCtorDep: string, initializer?: Partial<Item>) {
        super(initializer);
    }
}

const user1 = new User({age: 32, firstName: 'Pera', lastName: 'Peric'});
const item1 = new Item('asdf', { name: 'item1' });

console.log(user1);
user1.sayMyName();

console.log(item1);

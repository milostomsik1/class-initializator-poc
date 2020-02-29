class InitObject<T> {
    constructor(initializator?: Partial<T>) {
        if (initializator) {
            Object.assign(this, initializator);
        }
    }
}

class User extends InitObject<User> {
    firstName: string;
    lastName: string;
    age: number;

    constructor(initializator?: Partial<User>) {
        super(initializator);
    }

    sayMyName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const user1 = new User({age: 32, firstName: 'Pera', lastName: 'Peric'});

console.log(user1);
user1.sayMyName();
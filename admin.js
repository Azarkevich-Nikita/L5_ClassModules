import { User } from './user.js';

export class Admin extends User {
    #canBanUsers;

    constructor(name, age, isAdmin, canBanUsers = true) {
        super(name, age, isAdmin);
        this.#canBanUsers = canBanUsers;
    }

    get canBanUsers() {
        return this.#canBanUsers;
    }

    set canBanUsers(value) {
        if (typeof value === "boolean") {
            this.#canBanUsers = value;
        } else {
            console.error("canBanUsers должно быть булевым значением");
        }
    }

    show() {
        console.log(
            `Имя: ${this.name}, Возраст: ${this.age}, Администратор: ${this.isAdmin}, Может банить: ${this.#canBanUsers}`
        );
    }

    static clone(orig) {
        return new Admin(orig.name, orig.age, orig.isAdmin, orig.canBanUsers);
    }
}

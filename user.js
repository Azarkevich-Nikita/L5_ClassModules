export class User {
    #name;
    #age;
    #isAdmin;

    constructor(name = "None", age = 0, isAdmin = false) {
        this.#name = name;
        this.#age = age;
        this.#isAdmin = isAdmin;
    }

    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get isAdmin() {
        return this.#isAdmin;
    }

    set name(value) {
        if (typeof value === "string") {
            this.#name = value;
        } else {
            console.error("Имя должно быть строкой");
        }
    }

    set age(value) {
        if (typeof value === "number" && value >= 0) {
            this.#age = value;
        } else {
            console.error("Возраст должен быть числом >= 0");
        }
    }

    set isAdmin(value) {
        if (typeof value === "boolean") {
            this.#isAdmin = value;
        } else {
            console.error("isAdmin должно быть булевым значением");
        }
    }

    #grantAdminRights() {
        this.#isAdmin = true;
    }

    show() {
        console.log(`Имя: ${this.#name}, Возраст: ${this.#age}, Администратор: ${this.#isAdmin}`);
    }

    delete() {
        Object.keys(this).forEach(key => delete this[key]);
        console.log("Экземпляр удалён");
    }

    copy() {
        return this;
    }

    static clone(orig) {
        return new User(orig.name, orig.age, orig.isAdmin);
    }

    makeAdmin() {
        this.#grantAdminRights();
    }
}

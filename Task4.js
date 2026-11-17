// Task 1
class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    showInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Price: ${this.price}`);
        console.log(`Category: ${this.category}`);
    }
}

let product1 = new Product("iPhone 15", 2200, "Smartphones");
let product2 = new Product("MacBook Air M2", 3200, "Laptops");
let product3 = new Product("AirPods Pro", 450, "Accessories");

product1.showInfo();
product2.showInfo();
product3.showInfo();

// Task 2
const user = {
    firstName: "Yusuf",
    lastName: "Baghirov",
    _age: 16,

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value) {
        let names = value.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
    },

    get age() {
        return this._age;
    },

    set age(value) {
        if (value >= 0) {
            this._age = value;
        }
    }
};

console.log(user.fullName);
console.log(user.age);

user.fullName = "Kamran Karimzade";
user.age = 26;

console.log(user.fullName);
console.log(user.age);

user.age = -5;
console.log(user.age);

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// // 1. Deklarasikan variabel
var username = 'Alice';
var age = 25;
var isAdmin = true;
var colors = ['red', 'green', 'blue'];
// 2. Buat fungsi multiply
function multiply(a, b) {
    return a * b;
}
var myCar = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
};
// 4. Variabel userId
var userId = '123';
// 5. Class Animal
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log("".concat(this.name, " generic sound"));
    };
    return Animal;
}());
var genericAnimal = new Animal('Kucing');
genericAnimal.makeSound();
// 6. Class Dog
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log('Woof!');
    };
    return Dog;
}(Animal));
var dog = new Dog('Buddy');
dog.makeSound();
// 7. Fungsi generic
function identity(arg) {
    return arg;
}
var result = identity('Emir');
var result2 = identity(10);
var pointA = {
    x: 10,
    y: 20,
};
// 9. Class BankAccount
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this.balance = 0;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var account = new BankAccount();
account.deposit(100);
account.deposit(400);
console.log(account.getBalance());
var user = {
    id: 1,
    name: 'Alice',
};
var profileUpdate = {
    name: 'Bob',
};
// 12. Enum Role
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
var currentRole = Role.User;
var manager = {
    id: 2,
    name: 'John',
    department: 'HR',
};
var person = {
    name: 'John Doe',
    age: 30,
};
if (person.address) {
    console.log(person.address.city);
}
// 15. Fungsi calculateDiscount
function calculateDiscount(price, discount) {
    if (discount === void 0) { discount = 10; }
    return price - (price * discount) / 100;
}

// // 1. Deklarasikan variabel
const username: string = 'Alice';
const age: number = 25;
const isAdmin: boolean = true;
const colors: string[] = ['red', 'green', 'blue'];

// 2. Buat fungsi multiply
function multiply(a: number, b: number): number {
  return a * b;
}

// // 3. Interface Car
interface Car {
  brand: string;
  model: string;
  year: number;
}

const myCar: Car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2020,
};

// 4. Variabel userId
let userId: string | number = '123';

// 5. Class Animal
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} generic sound`);
  }
}

const genericAnimal = new Animal('Kucing');
genericAnimal.makeSound();

// 6. Class Dog
class Dog extends Animal {
  makeSound(): void {
    console.log('Woof!');
  }
}

const dog = new Dog('Buddy');
dog.makeSound();

// 7. Fungsi generic
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>('Emir');
const result2 = identity<number>(10);

// 8. Type alias Point
type Point = {
  x: number;
  y: number;
};

const pointA: Point = {
  x: 10,
  y: 20,
};

// 9. Class BankAccount
class BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount();
account.deposit(100);
account.deposit(400);
console.log(account.getBalance());

// 10. Interface User
interface User {
  readonly id: number;
  name: string;
}

let user: User = {
  id: 1,
  name: 'Alice',
};


user.id = 2;

// 11. Interface Profile dengan Partial
interface Profile {
  name: string;
  age: number;
}

const profileUpdate: Partial<Profile> = {
  name: 'Bob',
};

// 12. Enum Role
enum Role {
  Admin,
  User,
  Guest,
}

const currentRole: Role = Role.User;

// 13. Type alias Employee dan Manager
type Employee = {
  id: number;
  name: string;
};

type Manager = {
  department: string;
};

type ManagerEmployee = Employee & Manager;

const manager: ManagerEmployee = {
  id: 2,
  name: 'John',
  department: 'HR',
};

// 14. Objek person dengan optional chaining
interface Person {
  name: string;
  age: number;
  address?: {
    city: string;
    country: string;
  };
}

const person: Person = {
  name: 'John Doe',
  age: 30,
};

if (person.address) {
  console.log(person.address.city);
}

// 15. Fungsi calculateDiscount
function calculateDiscount(price: number, discount: number = 10): number {
  return price - (price * discount) / 100;
}

// // tipe data dasar pada typescript
// // number
// const age: number = 20;
// // string
// const fullName: string = 'John Doe';
// // boolean
// const isMarried: boolean = true;

// // array
// const numbers: number[] = [1, 2, 3];
// const names: string[] = ['John', 'Doe'];
// const booleans: boolean[] = [true, false];
// const mixed: (number | string | boolean)[] = [1, 'John'];
// const array: Array<string> = ['John', 'Doe'];

// // type data any
// const any: any = 'Emir';

// // tipe data khusus yang hanya ada pada typescript
// // tuple
// const biodata: [number, string, boolean] = [20, 'Emir', true];
// // null dan undefined
// const nullValue: null = null;
// const undefinedValue: undefined = undefined;

// // enum (tipe data yang seperti object dengan key dan value)
// enum Direction {
//   Up = 1,
//   Down,
//   Left,
// }

// console.log(Direction.Up);

// enum Status {
//   Active = 'active',
//   Inactive = 'inactive',
// }

// console.log(Status.Active);

// if (Status.Active === 'active') {
//   console.log('active');
// } else {
//   console.log('inactive');
// }

// // tipe data object
// const person: {
//   name: string;
//   age: number;
//   isMarried: boolean;
// } = {
//   name: 'John',
//   age: 20,
//   isMarried: true,
// };

// interface Person {
//   name: string;
//   age: number;
//   isMarried: boolean;
//   greet(): string;
// }

// const person2: Person = {
//   name: 'John',
//   age: 20,
//   isMarried: true,
//   greet() {
//     return `Hello ${this.name}`;
//   },
// };

// function greet(name: string): string {
//   return `Hello ${name}`;
// }

// const greet2 = (name: string): string => {
//   return `Hello ${name}`;
// };

// function greet3(name: string): void {
//   console.log(`Hello ${name}`);
// }

// function optional(name: string, age?: number): string {
//   if (age) {
//     return `Hello ${name}, you are ${age} years old`;
//   } else {
//     return `Hello ${name}`;
//   }
// }

// type Point = {
//   x: number;
//   y: number;
// };

// const point: Point = {
//   y: 10,
//   x: 20,
// };

// // union type (menambahkan lebih dari satu data)
// let id: string | number;
// id = 'string';
// id = 10;

// // class Refacto | explain

// class Animal {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   makeSound(): void {
//     console.log(`${this.name} makes a sound`);
//   }
// }

// const dog = new Animal('Dog');
// dog.makeSound();

// class Cat extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
// }

// // Access Modifier
// // public, private, protected
// class Person {
//   public name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   public greet(): void {
//     console.log(`Hello ${this.name}`);
//   }
// }

// // Generics
// // generics memungkinkan pembuatan tipe data yang fleksible dan dinamis

// function indentity<T>(value: T): T {
//   return value;
// }

// const result = indentity<string>('hello');
// const result2 = indentity<number>(10);
// class Box<T> {
//   private value: T;
//   constructor(value: T) {
//     this.value = value;
//   }
//   getValue(): T {
//     return this.value;
//   }
// }
// const box = new Box<string>('Emir');

// // Tipe Utility
// // Partial
// interface Person2 {
//   name: string;
//   age: number;
// }

// const person4: Partial<Person2> = {
//   name: 'Emir',
// };
// // Required
// const person3: Required<Person2> = {
//   name: 'Emir',
//   age: 20,
// };

// let readonlyUser: Readonly<Person2> = {
//   name: 'Emir',
//   age: 20,
// };

// readonlyUser = {
//   name: 'Ahmad',
//   age: 20,
// };

// type UserName = Pick<Person2, 'name'>;
// const userName: UserName = {
//   name: 'Emir',  // string
// }
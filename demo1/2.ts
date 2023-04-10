function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'Tom';
// let u: number = null;
// let n: null = undefined;
// let unusable:void = null;
interface Person {
    [pp: string]: string | number | undefined;
    name: string;
    age?: number;
}

let tom: Person = {
    id: 66,
    name: 'Tom',
    age: 25,
    gender: 'male',
    hh: 33
};
tom.id = 77
// interface IArguments {
//     [index: string]: string | number | Function;
//     3: boolean;
//     length: number;
//     callee: Function;
// }
console.log(tom)
console.log(sayHello(user));
interface ClassArray {
    [index: string]: number
    (length: number): string
}
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
console.log(reverse(5),reverse('3'));
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    console.log(source, subString)
    return false;
};
// mySearch('','');
interface a {
    name: string
}
interface b {
    name: string,
    age: number
};
let B: b = {
    name: '',
    age: 0
};
let A: a;
A = B as a;
let ff: number = 0;
let aa: any;
ff = aa;
aa = ff;
(window as any).foo = 1;
interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}

const animal: Animal = {
    name: 'tom'
};
let tom1: Cat = animal as Cat;
let tom6: [string, number, number];
// tom6 = ['',0,0];
// tom6[0] = 'Tom';
let tom7: [string, number];
tom7 = ['Tom', 25];
tom7.push('male');
enum Color8 {RED= -2, GREEN = 1.7, BLUE };
console.log(Color8['BLUE'],Color8['2.7']);
export function bar() {
    return 'bar';
};



// class GenericNumber<T> {
//     zeroValue: T;
//     add: (x: T, y: T) => T;
//     constructor( zeroValue: T,  add: (x: T, y: T) => T){
//         this.zeroValue = zeroValue;
//         this.add = add;
//     }
// }

// let myGenericNumber = new GenericNumber<number>(0, (1,1)=>{0});
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) { return x + y; };
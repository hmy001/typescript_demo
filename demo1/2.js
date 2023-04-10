"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bar = void 0;
function sayHello(person) {
    return 'Hello, ' + person;
}
let user = 'Tom';
let tom = {
    id: 66,
    name: 'Tom',
    age: 25,
    gender: 'male',
    hh: 33
};
tom.id = 77;
// interface IArguments {
//     [index: string]: string | number | Function;
//     3: boolean;
//     length: number;
//     callee: Function;
// }
console.log(tom);
console.log(sayHello(user));
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
console.log(reverse(5), reverse('3'));
let mySearch;
mySearch = function (source, subString) {
    console.log(source, subString);
    return false;
};
;
let B = {
    name: '',
    age: 0
};
let A;
A = B;
let ff = 0;
let aa;
ff = aa;
aa = ff;
window.foo = 1;
const animal = {
    name: 'tom'
};
let tom1 = animal;
let tom6;
// tom6 = ['',0,0];
// tom6[0] = 'Tom';
let tom7;
tom7 = ['Tom', 25];
tom7.push('male');
var Color8;
(function (Color8) {
    Color8[Color8["RED"] = -2] = "RED";
    Color8[Color8["GREEN"] = 1.7] = "GREEN";
    Color8[Color8["BLUE"] = 2.7] = "BLUE";
})(Color8 || (Color8 = {}));
;
console.log(Color8['BLUE'], Color8['2.7']);
function bar() {
    return 'bar';
}
exports.bar = bar;
;
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

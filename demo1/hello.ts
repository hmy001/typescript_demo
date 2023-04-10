// class Student {
//     fullName: string;
//     constructor(public firstName: string, public middleInitial: string, public lastName: string) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// };

// interface Person {
//     firstName: string;
//     lastName: string;
// };

// function greeter(person : Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// };

// let user = new Student("Jane", "M.", "User");

// document.body.innerHTML = greeter(user);

// interface Options { color: string; volume: number };

// let options = {} as Options;
// options.color = "red";
// options.volume = 11;
// let n: never;
// interface LabelledValue {
//     label?: string;
//     color?: number
//   }
  
//   function printLabel(labelledObj: LabelledValue) {
//     console.log(labelledObj.label);
//   }
  
//   let myObj = {label: "Size 10 Object", col: 10};
//   printLabel(myObj);

//   interface SquareConfig {
//     color?: string;
//     width?: number;
// }
// interface SquareConfig {
//     color?: string;
//     width?: number;
//     [o:string]: any;
// }

// function createSquare(config: SquareConfig): { color?: string; area?: number } {
//     return {color:(config as SquareConfig).color, area: config.area};
// }

// let mySquare = createSquare({ colour: "red", width: 100 });
// let mySquare1 = createSquare({ colour: "red", width: 100 });

// interface ClockConstructor {
//     new (hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//     tick():void;
// }

// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//     return new ctor(hour, minute);
// }

// class DigitalClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("beep beep");
//     }
// }
// class AnalogClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("tick tock");
//     }
// }

// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);

// class Control {
//     private state: any = 1;
    
// }

// interface SelectableControl extends Control {
//     select(): void;
// };

// class Button extends Control implements SelectableControl {
//     select() {}
// };
// var b = new Button();

// class TextBox extends Control {

// };



// // class Control {
// //     private state: any;
// // }
// // interface SelectableControl extends Control {
// //     select(): void;
// // }
// // class Button extends Control implements SelectableControl {
// //     select() { }
// // }
// // class TextBox extends Control { }

// // class Image implements SelectableControl {
// //     private state = 1;
// //     select() { }
// // };

// // interface person {

// //     sex: string;
    
// //     }
    
// //     interface stu {
    
// //     name: string;
    
// //     order?: number;

// //     }
// //   interface stuConstructor{
// //     new (name: string, sex:string, order?:number): any;
// //   }
// // function createStu(ctor:stuConstructor, name: string, sex:string, order?:number) {
// //     return new ctor(name, sex, order)
// // } 
// // class student1 implements person, stu {
// //     public sex: string = '';
// //     public name: string = '';
// //     public order?: number = 0;
// //     constructor(name: string, sex:string, order?:number) {
        
// //     }
// // }
// abstract class Department {

//     constructor(public name: string) {
//     }

//     printName(): void {
//         console.log('Department name: ' + this.name);
//     }

//     abstract printMeeting(): void; // 必须在派生类中实现
// }

// class AccountingDepartment extends Department {

//     constructor() {
//         super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
//     }

//     printMeeting(): void {
//         console.log('The Accounting Department meets each Monday at 10am.');
//     }

//     generateReports(): void {
//         console.log('Generating accounting reports...');
//     }
// }
// let department: Department; // 允许创建一个对抽象类型的引用
// // department = new Department(); // 错误: 不能创建一个抽象类的实例
// department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
// department.printName();
// department.printMeeting();
// // department.generateReports(); // 错误: 方法在声明的抽象类中不存在
// class Greeter {
//     static standardGreeting = "Hello, there";
//     greeting: string;
//     greet() {
//         if (this.greeting) {
//             return "Hello, " + this.greeting;
//         }
//         else {
//             return Greeter.standardGreeting;
//         }
//     }
// }

// let greeter1: Greeter;
// greeter1 = new Greeter();
// console.log(greeter1.greet());

// let greeterMaker: typeof Greeter = Greeter;
// greeterMaker.standardGreeting = "Hey there!";

// let greeter2: Greeter = new greeterMaker();
// console.log(greeter2.greet()== greeter1.greet(),);

// let getName:(first: string, last: string) => string = function(f: string = 'hhh', e?:string) {
//     return f + '' + e;
// }
// class GenericNumber<T> {
//     public zeroValue: T;
//     add: (x: T, y: T) => T;
//     static sub: <T>(X:T,Y:T) => T;
// }
// let x = (a: number) => 0;
// let y :(b: number, s: string) => number;
// enum EventType { Mouse, Keyboard }

// interface Event { timestamp: number; }
// interface MouseEvent extends Event { x: number; y: number }
// interface KeyEvent extends Event { keyCode: number }

// function listenEvent(eventType: EventType, handler: (n: Event) => void) {
//     /* ... */
// }

// // Unsound, but useful and common
// listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + ',' + e.y));
// // Undesirable alternatives in presence of soundness
// listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x + ',' + (<MouseEvent>e).y));
// listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.x + ',' + e.y)));

// // Still disallowed (clear error). Type safety enforced for wholly incompatible types
// // listenEvent(EventType.Mouse, (e: number) => console.log(e));
// // y = x; // OK
// // x = y; // Error
// function invokeLater(args: any[], callback: (...args: any[]) => void) {
//     /* ... Invoke callback with 'args' ... */
// }

// // Unsound - invokeLater "might" provide any number of arguments
// invokeLater([1, 2], (x, y) => console.log(x + ', ' + y));

// // Confusing (x and y are actually required) and undiscoverable
// invokeLater([1, 2], (x?, y?) => console.log(x + ', ' + y));
// class Animal {
//     private oldSix = 6;
//     feet: number;
//     constructor(name: string, numFeet: number) { }
// }

class Size {
    feet!: number;
    constructor(numFeet: number) {  }
}

// let a: Animal;
// let s: Size;

// a = s;  //OK
// s = a;  //OK
// let n: number = undefined;
type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;
interface Square {
    // kind: "square";
    size: number;
}
interface Rectangle {
    // kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    // kind: "circle";
    radius: number;
}
type Shape = Square | Rectangle | Circle;
export {}
export default Circle;
// export default Shape;
class Animal {
    name:string = 'ccc';
    constructor(name:string) {
        this.name = name;
    }
    getName = () => {
        console.log("this:",this)
        return this.name;
    }
    getName2 = function(){
        console.log('99')
    }
}
class cat extends Animal {
    constructor(name:string) {
        super(name);
        super.getName2();
        super.getName();
    }
}
let  c = new cat('hhh');
console.log(c.getName());

let t: [string, number, number?, number?] = ['', 3, 3, 3]

class teacher {
    name: string = 'teacher';
    getName() {
        return this.name
    }
}
class p extends teacher {
    getPname(){
        return this.name;
    }
}
let pp = new p();
pp.getPname();

// 单例模式
class singleTon {
    name: string;
    private static _instance: singleTon;
    private constructor(name:string) {
        this.name = name;
    };
    static getInsTance(name:string) {
        if (!this._instance) {
            this._instance = new singleTon(name);
        }
        return this._instance;
    };
}
let s1 = singleTon.getInsTance('单例1');
let s2 = singleTon.getInsTance('单例2');
console.log(s1.name, s2.name)

// let fg:number = null;

// // 访问器装饰器
// // target参数对应的是 （普通访问器：类的prototype，静态访问器：类）, key:对应访问器名称 , descriptor: 同object.defineProperty

// function testDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
//     console.log("target:", target, target == Test.prototype, target == Test, ",key:",key);
//     // descriptor.writable = true;
//     // descriptor.value = '666'
//     // descriptor.get = () =>{
//     //     return 'get 装饰器'
//     // }
//     descriptor.set = (name: string) =>{ // set如何访问 this._name
//         name = "set装饰器：" + name;
//         return name;
//     }
// }

// class Test {
//     private _name: string;
//     constructor(name: string) {
//         this._name = name;
//     }
//     get name() {
//         return this._name;
//     }
//     @testDecorator
//     set name(name: string) {
//         this._name = name;
//     }
// }
// const test = new Test('111');
// test.name = '222'
// console.log(test.name); // 还是输出:  111， 期待输出:  set装饰器：222
export {}

// 访问器装饰器
function testDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
    // console.log("this:",this)
    const originalSet:(this: PropertyDescriptor, args_0: string) => void = descriptor.set!; // 保存原始的 set 方法
    descriptor.set = function(name: string) {
        name = "set装饰器：" + name;
        console.log("this:",this, this == test, target, target.constructor == Test) // this指向当前实例对象
        originalSet.call(this, name); // 使用 .call(this, ...) 调用原始的 set 方法
    }
    descriptor.get = function() {
        console.log("this:",this, "this==Test:", this == Test)
        return 'hhghghgh'
    }
}

// 类
class Test {
    private _name: string;
    static staticName: string = 'static';
    constructor(name: string) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    @testDecorator // 希望通过装饰器，对this._name做一点处理
    set name(name: string) {
        console.log("this:",this, this == test)
        this._name = name;
    }
    @testDecorator
    static get n() {
        return this.staticName;
    }
}
const test = new Test('111');
test.name = '222'
console.log(test.name); // 输出: set装饰器：222
console.log(Test.n);
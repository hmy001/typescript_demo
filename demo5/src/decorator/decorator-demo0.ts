function testDecorator(target: any) {
    console.log(target.prototype.constructor == Test, target == Test, target, target.hhh = 666)
    target.prototype.getName =function (this: Test){
        return this.name;
    }
    // console.log(target, target == Test) // 输出 [class Test] true
}

@testDecorator
class Test {
    name: string;
    constructor(name: string) {
        this.name =name
    }
}
const test = new Test('cxk');
console.log((test as any).getName())
console.log((Test as any).hhh)
testDecorator(Test)
// const initCarPropertyDec  = <T>(property: T) => {
//     return (target: any, propertyKey: string | symbol) => {
//         console.log("property:",property)
//         target[propertyKey] = property;
//     }
// }

// class Car {
//     @initCarPropertyDec('奔驰')
//     name: string = '666';
// }

// console.log(new Car().name)

function a() {
    console.log("收集a装饰器");
    return function(target: any) {
        console.log("a装饰器运行")
    }
}

function b() {
    console.log("收集b装饰器");
    return function(target: any) {
        console.log("b装饰器运行")
    }
}

@a()
@b()
class demo {
    
}

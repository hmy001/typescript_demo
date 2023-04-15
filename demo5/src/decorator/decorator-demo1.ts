// 类的装饰器是一个函数，通过@加函数名使用，其参数是类的本身，会立即作用于类本身，而不是new的时候才调用
// demo1
function testDecorator(constructor: any) {
    console.log(constructor.prototype.constructor == Test, constructor == Test)
    constructor.prototype.getName =function (this: Test){
        return this.name;
    }
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
console.log("################################")
// 装饰原有内容，若装饰没有的内容则不会生效，即如果Test1没有getName函数，则此处不会为他添加上getName函数
// demo2
function test1Decorator<T extends new (...args: any[]) => any>(constructor1: T) {
    return class extends constructor1 {
        name = 'hhh'
        getName() {
            return this.name + '666'
        }
    }
}

@test1Decorator
class Test1 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const test1 = new Test1('hmy ');
console.log(test1.name,test1.getName())

// 装饰加上额外内容
// demo3
function test2Decorator() {
    return function <T extends new (...args: any[]) => any>(constructor1: T) {
        return class extends constructor1 {
            name = 'hhh'
            getName() {
                return this.name + '666'
            }
        }
    }
}

// 实际上返回一个在【参数类】上扩展的【新类】
const Test2 = test2Decorator()(class Test1 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
})
const test2 = new Test2('hmy');
console.log(test2.name,test2.getName())

export {}
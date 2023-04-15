// 函数装饰器
// 普通方法， target参数对应的是 类的prototype, key:对应函数名称 , descriptor: 同object.defineProperty
// 静态方法， target参数对应的是 类, key:对应函数名称 , descriptor: 同object.defineProperty

function testDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log("target:", target, target == Test.prototype, target == Test, ",key:",key);
    descriptor.value = function() {
        return '6666'
    }
}

class Test {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    @testDecorator
    getName() {
        return this.name;
    }
    // @testDecorator
    static hhh() {
        console.log("静态方法")
    }
}
const test = new Test('普通方法装饰：');
console.log(test.getName());
export {}